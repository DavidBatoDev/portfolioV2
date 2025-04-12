import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Bato-bato | Software Developer & Cloud Enthusiast",
  description:
    "Explore the portfolio of David E. Bato-bato, a passionate software developer specializing in web, mobile, and IoT projects. Discover his work, experience, and skills in cloud, DevOps, and full-stack development.",
  keywords: [
    "David Bato-bato",
    "Software Developer Philippines",
    "Cloud Developer",
    "Next.js Portfolio",
    "Full-stack Developer",
    "React Developer",
    "IoT Developer",
    "DevOps",
    "Firebase",
    "ESP32",
    "GDSC PUP",
    "Scholarship App Developer",
  ],
  authors: [{ name: "David E. Bato-bato", url: "https://github.com/DavidBatoDev" }],
  creator: "David E. Bato-bato",
  openGraph: {
    title: "David Bato-bato | Software Developer & Cloud Enthusiast",
    description:
      "Check out David Bato-bato’s portfolio showcasing impactful projects in web, mobile, and IoT. Software Engineer | DevOps | GDSC PUP | Cloud & AI enthusiast.",
    url: "https://davidbatodev-portfolio.vercel.app/",
    siteName: "David Bato-bato Portfolio",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
