import './globals.css';

export const metadata = {
  title: 'hazki',
  description: 'Descrição da página',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
