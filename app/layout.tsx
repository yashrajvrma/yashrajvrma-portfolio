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
  title: "Yashraj Verma - Full Stack Developer | Portfolio",
  description:
    "I'm Yashraj Verma a 20y/o developer pursuing B.E in Electronics and Telecommunication engineering. I love to build cool products that makes peoples live easier. I play, read books and create content for fun.",
  keywords: [
    "Yashraj",
    "Yashraj Verma",
    "Breeze",
    "Breeze AI",
    "breezeai.live",
    "Yashraj Verma Portfolio",
    "Tcet",
    "Yashraj Verma linkedin",
    "Electronics and Telecommunication Engineer",
    "Engineer from Mumbai",
    "Mumbai",
    "Kandivali",
    "AI Powered Docs Editor",
    "Breeze ai live - AI Powered Docs Editor",
    "Yashraj Verma Twitter",
    "yashrajvrma",
    "Engineer",
    "Yashraj Verma Engineer",
    "Yashraj Verma Youtube",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta property="og:url" content="your url" /> */}
        <meta name="og:locale" content="en_US" />
        <meta name="robots" content="index, follow, nocache" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Yashraj Verma - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="I'm Yashraj Verma a 20 y/o developer pursuing B.E in Electronics and Telecommunication engineering. I love to build cool products that makes peoples live easier. I play, read books and create content for fun."
        />
        <meta name="creator" content="Yashraj Verma" />
        <meta name="publisher" content="Yashraj Verma" />
        <meta name="classification" content="Portfolio Website" />
        <meta name="contact:email" content="yashrajv.work@gmail.com" />
        <meta name="contact:locality" content="Mumbai" />
        <meta name="contact:country_name" content="India" />
        <meta name="contact:region" content="Maharashtra" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />

        <meta
          name="keywords"
          content="Full Stack Developer, React Developer, Node.js Developer, TypeScript Developer, JavaScript Developer, Frontend Developer, Backend Developer, Web Developer,Software Engineer, Portfolio,India, Yashraj Verma, Yashraj, Stealth Startup, Founding Engineer, Hackathon, Thakur College of Engineering and Technology, TCET, tcet, Best Portfolio, Minimalist Portfolio, Developer Portfolio, Student Portfolio, Tech Portfolio, Modern Portfolio, Clean Portfolio, Professional Portfolio, Portfolio Website, Personal Website, Developer Website, Breeze, Breeze AI, AI Powered Document Editor, Docs Editor, Word Docs Editor, Editor, Microsoft Word, Docx, AI"
        />

        <meta
          property="og:image"
          content="https://i.postimg.cc/mk47DcYZ/localhost-3000-3.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yashrajvrma" />
        <meta name="twitter:creator" content="@yashrajvrma" />
        <meta
          name="twitter:title"
          content="Yashraj Verma - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="A 20 y/o Full Stack Developer pursuing B.E in Electronics and Telecommunication Engineering. I love to build cool products that makes peoples live easier."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/mk47DcYZ/localhost-3000-3.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
