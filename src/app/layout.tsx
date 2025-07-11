import './globals.css';
import MobileMenu from '../components/MobileMenu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
