import "./globals.css";


export const metadata = {
  title: "Home - Elbrit Life Sciences",
  description: "Elbrit distribute and develop cutting edge medications to treat and prevent complex illnesses and various health conditions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
