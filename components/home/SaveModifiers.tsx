import CustomDialog from "@components/common/CustomDialog";
import { useEffect, useRef } from "react";

export default function SaveModifier() {
  const saveDialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    saveDialog.current?.showModal();
  }, []);
  return (
    <CustomDialog className="m-auto relative p-4" isOpen={true}>
      save form
    </CustomDialog>
  );
}
