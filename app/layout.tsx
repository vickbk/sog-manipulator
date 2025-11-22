import MainHeader from "../components/common/MainHeader";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="justify-center gap-12 py-12">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
