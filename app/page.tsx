import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import MainPage from "../components/home/MainPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOG | Song of God - Text Manipulator",
};

export default function Home() {
  return <MainPage />;
}
