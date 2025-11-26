import { DownloadManipulators } from "./DownloadManipulators";
import { UploadManipulators } from "./UploadManipulators";

export const ExternalManager = () => {
  return (
    <section className="grid gap-12 md:grid-cols-2 md:gap-4">
      <DownloadManipulators />
      <UploadManipulators />
    </section>
  );
};
