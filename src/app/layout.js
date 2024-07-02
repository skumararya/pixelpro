import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/css/style.css";
import "../../public/css/font-awesome.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "satish Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body >
      <div id="wrapper">
        <Header />
        <main id="main" className="mainContentArea">
        {children}
        </main>
        <Footer />
        </div>
<a href="#top" title="Back to Top" id="backtotop"><i className="fa fa-angle-up"></i></a>
<PopupForm />
        </body>
    </html>
  );
}