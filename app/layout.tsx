import { ToastContainer } from "react-toastify";
import MainHeader from "../components/common/MainHeader";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="justify-center gap-12 py-12">
        <MainHeader />
        {children}
        <ToastContainer theme="system" />
      </body>
    </html>
  );
}
