import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>YouTube Video Sharing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Web application for sharing YouTube videos"
        />
      </head>
      <body className="bg-gradient-to-br from-black to-[#121286]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
