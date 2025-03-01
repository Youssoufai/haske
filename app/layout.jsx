import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata = {
  title: "MAGA HASKE",
  description: "Official Website for MAGA Haske Movement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*    <Navbar />
        {children}
        <Footer /> */}
      </body>
    </html>
  );
}
