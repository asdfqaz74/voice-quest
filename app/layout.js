import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Voice Quest",
  description: "여행지를 추천드려요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="KO-KR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="relative w-full min-h-screen bg-gray-500">
          <div
            className="absolute left-1/2 z-30"
            style={{
              top: 72, // 헤더 높이(64px) + 간격(8px), 필요시 조절
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "600px", // 중앙 컨텐츠 최대너비 맞춰도 OK
            }}
          >
            <ProgressBar />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
