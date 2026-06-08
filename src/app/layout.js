import { DM_Sans, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["italic", "normal"],
  weight: ["300", "400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "disqet — o seu álbum de fotos coletivo em tempo real",
  description:
    "Crie um álbum colaborativo para seu casamento ou festa via QR Code. Sem downloads, sem cadastro. Convidados escaneiam e tiram fotos.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="bg-bg text-text font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
