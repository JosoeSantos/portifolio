export const metadata = {
  title: "Josoe.",
  description: "Complex software and natural language",
};

import { Fira_Code, Newsreader, Nunito_Sans } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
});

import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.className} ${nunitoSans.className} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink antialiased">
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
