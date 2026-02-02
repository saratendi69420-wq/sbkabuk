# Hostinger VPS Deployment Guide for Next.js Application

## Overview

This guide covers deploying your Next.js project (Yatribook) on Hostinger VPS with MongoDB integration.

---

## Prerequisites

- Hostinger VPS account (with SSH access)
- Node.js 18+ knowledge
- MongoDB connection string (Atlas or local)
- Your project repository (GitHub recommended)

---

## Step 1: Set Up Hostinger VPS

### 1.1 Access Your VPS

1. Log in to your Hostinger account
2. Go to **Hosting** → **VPS**
3. Click on your VPS and note the IP address
4. Get your root credentials (email or account dashboard)

### 1.2 Connect via SSH

```bash
ssh root@YOUR_VPS_IP_ADDRESS
```

Enter your password when prompted.

### 1.3 Update System

```bash
apt update && apt upgrade -y
```

---

## Step 2: Install Required Software

### 2.1 Install Node.js and npm

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
```

Verify installation:

```bash
node --version
npm --version
```

### 2.2 Install Git

```bash
apt install -y git
```

### 2.3 Install PM2 (Process Manager)

```bash
npm install -g pm2
```

### 2.4 Install Nginx (Reverse Proxy)

```bash
apt install -y nginx
```

### 2.5 Install SSL Certificate (Certbot)

```bash
apt install -y certbot python3-certbot-nginx
```

---

## Step 3: Clone Your Project

### 3.1 Create Application Directory

```bash
mkdir -p /var/www/yatribook
cd /var/www/yatribook
```

### 3.2 Clone Your Repository

**Option A: Using GitHub SSH (recommended)**

```bash
git clone git@github.com:YOUR_USERNAME/sarabook.git .
```

**Option B: Using HTTPS**

```bash
git clone https://github.com/YOUR_USERNAME/sarabook.git .
```

### 3.3 Install Dependencies

```bash
npm install
```

---

## Step 4: Configure Environment Variables

### 4.1 Create .env.local File

```bash
nano .env.local
```

### 4.2 Add Your Environment Variables

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yatribook?retryWrites=true&w=majority

# Next.js
NEXT_PUBLIC_API_URL=https://yourdomain.com

# Other configs if needed
NODE_ENV=production
```

Save and exit (Ctrl+X, then Y, then Enter)

### 4.3 Secure the File

```bash
chmod 600 .env.local
```

---

## Step 5: Build and Test the Application

### 5.1 Build the Next.js App

```bash
npm run build
```

### 5.2 Test the Build

```bash
npm start
```

The app should run on localhost:3000. Stop it with **Ctrl+C**.

---

## Step 6: Set Up PM2 (Process Manager)

### 6.1 Start App with PM2

```bash
pm2 start npm --name "yatribook" -- start
```

### 6.2 Create PM2 Ecosystem File (Optional but Recommended)

```bash
nano ecosystem.config.js
```

Add the following:

```javascript
module.exports = {
  apps: [
    {
      name: "yatribook",
      script: "npm",
      args: "start",
      cwd: "/var/www/yatribook",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
      error_file: "/var/log/pm2/yatribook-error.log",
      out_file: "/var/log/pm2/yatribook-out.log",
    },
  ],
};
```

### 6.3 Start with Ecosystem File

```bash
pm2 start ecosystem.config.js
```

### 6.4 Configure PM2 Startup

```bash
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/bin/pm2 startup systemd -u root --hp /root
pm2 save
```

### 6.5 Verify PM2 is Running

```bash
pm2 status
```

---

## Step 7: Configure Nginx as Reverse Proxy

### 7.1 Create Nginx Configuration

```bash
nano /etc/nginx/sites-available/yatribook
```

### 7.2 Add Configuration

```nginx
upstream yatribook {
    server 127.0.0.1:3000;
}

server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://yatribook;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # For file uploads
    client_max_body_size 50M;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
}
```

Replace `yourdomain.com` with your actual domain.

### 7.3 Enable the Configuration

```bash
ln -s /etc/nginx/sites-available/yatribook /etc/nginx/sites-enabled/
```

### 7.4 Test Nginx Configuration

```bash
nginx -t
```

### 7.5 Restart Nginx

```bash
systemctl restart nginx
```

### 7.6 Enable Nginx to Start on Boot

```bash
systemctl enable nginx
```

---

## Step 8: Set Up SSL Certificate (HTTPS)

### 8.1 Point Your Domain to VPS

Update your domain's DNS records to point to your VPS IP address:

- A record: `yourdomain.com` → `YOUR_VPS_IP`
- A record: `www.yourdomain.com` → `YOUR_VPS_IP`

### 8.2 Wait for DNS Propagation (5-48 hours)

Check status:

```bash
nslookup yourdomain.com
```

### 8.3 Obtain SSL Certificate

```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts (enter email, agree to terms).

### 8.4 Auto-Renewal

```bash
systemctl enable certbot.timer
systemctl start certbot.timer
```

Verify:

```bash
systemctl status certbot.timer
```

---

## Step 9: Configure Firewall

### 9.1 Enable UFW Firewall

```bash
ufw enable
```

### 9.2 Allow SSH, HTTP, HTTPS

```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
```

### 9.3 Check Firewall Status

```bash
ufw status
```

---

## Step 10: Configure File Uploads (If Needed)

### 10.1 Create Upload Directory

```bash
mkdir -p /var/www/yatribook/public/uploads
chmod 755 /var/www/yatribook/public/uploads
```

### 10.2 Update Nginx Config for Uploads

Already included in Step 7.2 (`client_max_body_size 50M;`)

---

## Step 11: Monitoring and Maintenance

### 11.1 Monitor Application

```bash
pm2 monit
```

### 11.2 View Logs

```bash
# Combined logs
pm2 logs

# Specific app logs
pm2 logs yatribook

# Error logs
pm2 logs yatribook --err
```

### 11.3 Restart Application

```bash
pm2 restart yatribook
```

### 11.4 Reload Nginx

```bash
nginx -s reload
```

### 11.5 Check Disk Space

```bash
df -h
```

### 11.6 Check Memory Usage

```bash
free -h
```

---

## Step 12: Backup Configuration

### 12.1 Backup MongoDB Data (if using local MongoDB)

```bash
mysqldump -u root -p database_name > /backup/backup_$(date +%Y%m%d_%H%M%S).sql
```

### 12.2 Backup Application Files

```bash
tar -czf /backup/yatribook_$(date +%Y%m%d_%H%M%S).tar.gz /var/www/yatribook
```

### 12.3 Set Up Automated Backups (Cron Job)

```bash
crontab -e
```

Add:

```bash
0 2 * * * tar -czf /backup/yatribook_$(date +\%Y\%m\%d).tar.gz /var/www/yatribook
```

---

## Troubleshooting

### App Not Starting

```bash
pm2 status
pm2 logs yatribook
```

### Nginx Connection Refused

```bash
nginx -t
systemctl restart nginx
```

### Port Already in Use

```bash
lsof -i :3000
kill -9 <PID>
```

### SSL Certificate Issues

```bash
certbot renew --dry-run
```

### DNS Not Resolving

```bash
dig yourdomain.com
nslookup yourdomain.com
```

---

## Quick Reference Commands

```bash
# Stop application
pm2 stop yatribook

# Restart application
pm2 restart yatribook

# Delete from PM2
pm2 delete yatribook

# View all PM2 processes
pm2 list

# Check Nginx status
systemctl status nginx

# Reload Nginx without downtime
nginx -s reload

# Check if port is listening
netstat -tuln | grep 3000

# SSH into VPS
ssh root@YOUR_VPS_IP

# Pull latest code
cd /var/www/yatribook && git pull origin main

# Rebuild and restart
npm install && npm run build && pm2 restart yatribook
```

---

## Security Tips

1. **Change root password**

   ```bash
   passwd
   ```

2. **Disable SSH password login (use keys)**
   - Generate SSH key locally: `ssh-keygen`
   - Add to VPS: `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`

3. **Keep system updated**

   ```bash
   apt update && apt upgrade -y
   ```

4. **Monitor for suspicious activity**

   ```bash
   tail -f /var/log/auth.log
   ```

5. **Use strong passwords for services**

6. **Regularly backup your data**

---

## Additional Resources

- [Next.js Production Checklist](https://nextjs.org/docs/going-to-production)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Certbot Documentation](https://certbot.eff.org/)

---

## Need Help?

Check logs, use `pm2 logs`, verify DNS propagation, and ensure firewall isn't blocking ports.
