import { AlertDialogDeleteIcon } from "@/app/_assets/icons";

const DELETE_STRING: string = "delete";

export const checkDialogTypeForImage = (type: string) =>
  type?.toLowerCase() === DELETE_STRING ? <AlertDialogDeleteIcon /> : undefined;
