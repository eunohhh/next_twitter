import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MSWComponent } from "./_components/MSWcomponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Z. 무슨 일이 일어나고 있나요? / Z",
    description: "Z.com inspired by X.com",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MSWComponent />
                {children}
            </body>
        </html>
    );
}
