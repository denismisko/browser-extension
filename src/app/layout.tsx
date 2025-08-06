import type { Metadata } from "next";
import "./scss/globals.scss";

export const metadata: Metadata = {
  title: "Browser Extensions",
  description: "Browser Extensions in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
