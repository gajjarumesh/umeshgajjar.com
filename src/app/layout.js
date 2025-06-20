import App from "./app";
import "./globals.css";
export const metadata = {
  title: "Umesh Gajjar",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <App children={children} />
    </html>
  );
}
