import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s / The Frostwood",
    default: "Welcome / The Frostwood",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
