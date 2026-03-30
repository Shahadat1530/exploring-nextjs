import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home Page",
  description: "This is our home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="py-4 border-b border-gray-400">
          <ul className="flex gap-5 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li> Contact Us</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
