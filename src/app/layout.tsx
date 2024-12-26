// src/app/layout.tsx
export const metadata = {
  title: "Meu Projeto com NextJS",
  description: "Landing page com Framer Motion e TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
