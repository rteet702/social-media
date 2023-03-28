import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export const metadata = {
    title: "Robert Teets - Blog",
    description: "Created and maintained by Robert Teets",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
