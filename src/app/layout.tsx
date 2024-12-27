import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hazki",
  description: "Consultor do Mercado Digital",
  icons: {
    icon: "/favicon.ico", // Para navegadores que usam o ícone principal
    apple: "/logo.png", // Para dispositivos Apple (opcional)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
