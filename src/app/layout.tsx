import type { Metadata } from "next";
import { Inter, Londrina_Outline, Bungee_Outline, Oxygen, Carter_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar, Footer } from "./components";



const inter = Inter({ subsets: ["latin"] });
const londrina = Londrina_Outline({ weight: "400", subsets: ["latin"], variable: "--font-londrina" });
const bungee = Bungee_Outline({ weight: "400", subsets: ["latin"], variable: "--font-bungee" }); 
const oxygen = Oxygen({weight: "400", subsets: ["latin"], variable: "--font-oxygen" });
const carter = Carter_One({weight: "400", subsets: ["latin"], variable: "--font-carter" });


export const metadata: Metadata = {
  title: "JnB Production Studios",
  description: "JnB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} ${londrina.variable} ${bungee.variable} ${oxygen.variable} ${carter.variable} bg-primary`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
