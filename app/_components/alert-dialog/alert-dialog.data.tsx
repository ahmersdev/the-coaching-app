import { AlertDialogDeleteIcon } from "@/app/_assets";

const DELETE_STRING: string = "delete";

export const checkDialogTypeForImage = (type: string) =>
  type?.toLowerCase() === DELETE_STRING ? <AlertDialogDeleteIcon /> : undefined;
