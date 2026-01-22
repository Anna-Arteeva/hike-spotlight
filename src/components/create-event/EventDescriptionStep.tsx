import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ImageIcon, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

interface EventDescriptionStepProps {
  description: string;
  addDisclaimer: boolean;
  coverPhotoUrl: string | null;
  onDescriptionChange: (description: string) => void;
  onAddDisclaimerChange: (addDisclaimer: boolean) => void;
  onCoverPhotoChange: (url: string | null) => void;
}

export function EventDescriptionStep({
  description,
  addDisclaimer,
  coverPhotoUrl,
  onDescriptionChange,
  onAddDisclaimerChange,
  onCoverPhotoChange,
}: EventDescriptionStepProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleClearDescription = () => {
    onDescriptionChange("");
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error(t("createEvent.step5.invalidFileType"));
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error(t("createEvent.step5.fileTooLarge"));
      return;
    }

    setIsUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `covers/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("event-photos")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        toast.error(t("createEvent.step5.uploadFailed"));
        return;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("event-photos")
        .getPublicUrl(filePath);

      onCoverPhotoChange(publicUrl);
      toast.success(t("createEvent.step5.uploadSuccess"));
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(t("createEvent.step5.uploadFailed"));
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemovePhoto = async () => {
    if (!coverPhotoUrl) return;

    try {
      // Extract file path from URL
      const url = new URL(coverPhotoUrl);
      const pathParts = url.pathname.split("/event-photos/");
      if (pathParts.length > 1) {
        const filePath = pathParts[1];
        
        // Delete from storage
        await supabase.storage
          .from("event-photos")
          .remove([filePath]);
      }
    } catch (error) {
      console.error("Error removing photo:", error);
    }

    onCoverPhotoChange(null);
  };

  return (
    <div className="max-w-md mx-auto px-4 md:px-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">
          {t("createEvent.step5.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("createEvent.step5.subtitle")}
        </p>
      </div>

      <div className="space-y-6">
        {/* Description Section */}
        <div className="space-y-2">
          <Label className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {t("createEvent.step5.descriptionLabel")}
          </Label>
          <div className="relative">
            <Textarea
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              placeholder={t("createEvent.step5.descriptionPlaceholder")}
              className="min-h-[200px] resize-none pr-10 text-base"
              maxLength={1000}
            />
            {description && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={handleClearDescription}
                aria-label={t("createEvent.step5.clearDescription")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Add Disclaimer Checkbox */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="add-disclaimer"
              checked={addDisclaimer}
              onCheckedChange={(checked) => onAddDisclaimerChange(checked === true)}
            />
            <Label 
              htmlFor="add-disclaimer" 
              className="text-base font-medium cursor-pointer"
            >
              {t("createEvent.step5.addDisclaimer")}
            </Label>
          </div>

          {/* Disclaimer Text Box */}
          {addDisclaimer && (
            <div className="ml-7 p-4 bg-muted/50 rounded-lg border-l-4 border-primary/50">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {t("createEvent.step5.disclaimerTitle")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("createEvent.step5.disclaimerText")}
              </p>
            </div>
          )}
        </div>

        {/* Cover Photo Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("createEvent.step5.coverPhoto")}
            </Label>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80 gap-2"
              onClick={handleFileInputClick}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("createEvent.step5.uploading")}
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4" />
                  {t("createEvent.step5.uploadNewPhoto")}
                </>
              )}
            </Button>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label={t("createEvent.step5.uploadNewPhoto")}
          />

          {/* Photo Preview */}
          {coverPhotoUrl ? (
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border group">
              <img
                src={coverPhotoUrl}
                alt={t("createEvent.step5.coverPhotoAlt")}
                className="w-full h-full object-cover"
              />
              {/* Remove button overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleRemovePhoto}
                  className="gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  {t("createEvent.step5.removePhoto")}
                </Button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleFileInputClick}
              disabled={isUploading}
              className="w-full aspect-video rounded-lg border-2 border-dashed border-border bg-muted/30 flex items-center justify-center hover:bg-muted/50 hover:border-primary/50 transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="text-center text-muted-foreground">
                {isUploading ? (
                  <Loader2 className="h-12 w-12 mx-auto mb-2 opacity-50 animate-spin" />
                ) : (
                  <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                )}
                <p className="text-sm">
                  {isUploading 
                    ? t("createEvent.step5.uploading") 
                    : t("createEvent.step5.noPhotoPlaceholder")
                  }
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
