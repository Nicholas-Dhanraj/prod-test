import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import react, { ReactNode } from "react";
// import { ThemeProvider } from "@/context/ThemeContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
interface props {
  children?: ReactNode
  // any props that come into the component
}
export const metadata = {
  title: "OKC WM",
  description: "Description",
};

export default function RootLayout({  children, ...props }: props ) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider>
          <AuthProvider> */}
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          {/* </AuthProvider>
        </ThemeProvider> */}
      </body>
    </html>
  );
}
