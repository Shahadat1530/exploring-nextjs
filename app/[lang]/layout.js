
import "../globals.css";


export const metadata = {
  title: "Home Page",
  description: "This is our home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
