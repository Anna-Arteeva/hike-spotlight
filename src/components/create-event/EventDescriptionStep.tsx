import { useTranslation } from "react-i18next";
import { X, ImageIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

  const handleClearDescription = () => {
    onDescriptionChange("");
  };

  const handleFileUpload = () => {
    // For now, just a placeholder - file upload can be implemented later
    // This would typically open a file picker and upload to storage
    console.log("File upload clicked");
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
              onClick={handleFileUpload}
            >
              <ImageIcon className="h-4 w-4" />
              {t("createEvent.step5.uploadNewPhoto")}
            </Button>
          </div>

          {/* Photo Preview */}
          {coverPhotoUrl ? (
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <img
                src={coverPhotoUrl}
                alt={t("createEvent.step5.coverPhotoAlt")}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">{t("createEvent.step5.noPhotoPlaceholder")}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
