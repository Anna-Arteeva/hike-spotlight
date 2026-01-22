import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface UnsavedChangesDialogProps {
  open: boolean;
  onContinueEditing: () => void;
  onDiscard: () => void;
}

export function UnsavedChangesDialog({ 
  open, 
  onContinueEditing, 
  onDiscard 
}: UnsavedChangesDialogProps) {
  const { t } = useTranslation();

  return (
    <AlertDialog open={open} onOpenChange={(isOpen) => !isOpen && onContinueEditing()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("createEvent.unsavedChanges.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("createEvent.unsavedChanges.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onContinueEditing}>
            {t("createEvent.unsavedChanges.continueEditing")}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onDiscard} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {t("createEvent.unsavedChanges.discard")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
