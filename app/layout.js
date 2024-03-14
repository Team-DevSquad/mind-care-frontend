import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MindCare",
  description:
    "Revolutionize your mental well-being with our innovative app, offering personalized tools and support for managing stress, anxiety, and more. Access therapy resources, track progress, and find community in your journey to better mental health",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body className={inter.className}>
          {" "}
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
