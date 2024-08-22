import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daily-todo-task.vercel.app/"),

  title: {
    template: "%s | Sisprot GF",
    default: "Sisprot GF",
  },
  authors: {
    name: "chensokheng",
  },
  description:
    "Build dashboard with role managemanet using next.js and supabase.",
  openGraph: {
    title: "Sisprot Global Fiber",
    description: "Build dashboard with next.js and supabase ",
    url: "https://daily-todo-task.vercel.app/",
    siteName: "Sisprot Global Fiber",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} antialiased dark:bg-[#161616]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
