import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ContextWrapper from "@/components/ContextWrapper";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empowered Activity Library",
  icons : {
    icon : './icon.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="./favicon.ico" />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
      </head>
      <body className={roboto.className}>
        <ContextWrapper>{children}</ContextWrapper>
      </body>
    </html>
  );
}
