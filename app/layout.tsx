import { lato } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        este es el layout general
        {children}
        <footer className="flex items-center justify-center py-10">
          Nextjs learn 👨🏽‍💻
        </footer>
      </body>
    </html>
  );
}
