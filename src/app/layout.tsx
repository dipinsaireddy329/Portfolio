import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dipinsaireddy.vercel.app"),
  title: {
    default: "Dipin Sai Reddy Bojjireddy | Full Stack, Flutter and AI Engineer",
    template: "%s | Dipin Sai Reddy"
  },
  description:
    "A handcrafted developer portfolio for Dipin Sai Reddy Bojjireddy, a full stack developer, Flutter developer and AI engineer building scalable web, mobile and AI systems.",
  keywords: [
    "Dipin Sai Reddy",
    "Full Stack Developer",
    "Flutter Developer",
    "AI Engineer",
    "Next.js",
    "Generative AI Intern",
    "Tirupati"
  ],
  authors: [{ name: "Dipin Sai Reddy Bojjireddy" }],
  creator: "Dipin Sai Reddy Bojjireddy",
  openGraph: {
    title: "Dipin Sai Reddy Bojjireddy | Developer Portfolio",
    description:
      "Explore projects, skills, AI experiments, GitHub work and engineering case studies by Dipin Sai Reddy Bojjireddy.",
    url: "https://dipinsaireddy.vercel.app",
    siteName: "Dipin Sai Reddy Portfolio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipin Sai Reddy Bojjireddy | Developer Portfolio",
    description:
      "Full stack, Flutter and AI engineer building production-ready digital products."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dipin Sai Reddy Bojjireddy",
    jobTitle: ["Full Stack Developer", "Flutter Developer", "AI Engineer"],
    email: "dipinsaireddy@gmail.com",
    telephone: "+91 8121312937",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirupati",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN"
    },
    sameAs: [
      "https://github.com/dipinsaireddy329",
      "https://www.linkedin.com/in/dipin-sai-reddy-bojjireddy-3358a92b7/",
      "https://leetcode.com/u/dipin329/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
