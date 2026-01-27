"use client";

import { Button } from "@/components/ui/Button";
import { IHeroSlide } from "@/components/Home/HeroSlide";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

interface HeroSlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (slide: IHeroSlide) => void;
  initialData?: IHeroSlide;
}

export default function HeroSlideModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: HeroSlideModalProps) {
  const [formData, setFormData] = useState<IHeroSlide>(
    initialData || {
      title: "",
      imageUrl: "",
    }
  );
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  useEffect(() => {
    if (isOpen && initialData) {
      setFormData({
        title: initialData.title,
        imageUrl: initialData.imageUrl,
      });
    } else if (!isOpen) {
      // Reset form when modal closes
      setFormData({
        title: "",
        imageUrl: "",
      });
    }
  }, [isOpen, initialData]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a valid image file (JPEG, PNG, or WebP)");
      return;
    }

    // Validate file size (e.g., 5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Upload failed");
      }

      const data = await response.json();

      // Ensure the URL is properly formatted
      const imageUrl = data.url.startsWith("http")
        ? data.url
        : `${window.location.origin}${data.url}`;

      setFormData((prev) => ({ ...prev, imageUrl }));
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to upload image"
      );
      console.error(error);
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-surface-dark border border-white/10 rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary">
            {initialData ? "Edit" : "Add"} Hero Slide
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-surface-light"
            leftIcon={<X className="h-4 w-4 text-foreground" />}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              placeholder="Enter title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-3 bg-surface-light border border-white/10 rounded-md 
                text-foreground placeholder:text-foreground/50
                focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Image
            </label>
            <div className="space-y-3">
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                placeholder="Enter image URL"
                className="w-full p-3 bg-surface-light border border-white/10 rounded-md 
                  text-foreground placeholder:text-foreground/50
                  focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="text-sm text-foreground/70 text-center">Or</div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="primary"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="w-full bg-primary hover:bg-primary-dark text-background 
                  transition-colors duration-200 py-2.5"
              >
                {isUploading ? "Uploading..." : "Upload Image"}
              </Button>
            </div>
          </div>

          {formData.imageUrl && (
            <div className="relative h-48 rounded-md overflow-hidden border border-white/10">
              <Image
                src={formData.imageUrl}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={onClose}
              className="bg-surface-light hover:bg-surface-dark border border-white/10 
                text-foreground transition-colors duration-200"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="bg-primary hover:bg-primary-dark text-background 
                transition-colors duration-200"
            >
              {initialData ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
