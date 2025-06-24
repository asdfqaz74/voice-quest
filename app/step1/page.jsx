"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Step1() {
  const [step, setStep] = useState("intro");

  useEffect(() => {
    // 2초 후 애니메이션 시작
    const introTimer = setTimeout(() => setStep("animating"), 2000);
    // 애니메이션 0.7초 후 폼 등장
    const formTimer = setTimeout(() => setStep("form"), 2700);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(formTimer);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-500 relative overflow-hidden">
      {/* 인트로 문구 */}
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2
          transition-all duration-700 z-10
          ${step === "intro" && "opacity-100 scale-100 translate-y-0"}
          ${step === "animating" && "opacity-0 scale-90 -translate-y-16"}
          ${step === "form" && "hidden"}
        `}
        style={{ transitionProperty: "all" }}
      >
        <span className="text-2xl md:text-4xl font-bold block text-center mb-2">
          안녕하세요.
        </span>
        <span className="text-2xl md:text-4xl font-bold block text-center whitespace-nowrap">
          시작에 앞서 -
        </span>
      </div>
      {/* 폼 */}
      <div
        className={`
          transition-all duration-700
          ${
            step !== "form"
              ? "opacity-0 translate-y-8 pointer-events-none"
              : "opacity-100 translate-y-0 pointer-events-auto"
          }
          w-full max-w-sm mx-auto
        `}
        style={{ transitionProperty: "all" }}
      >
        <form className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-xl">
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-gray-700">이름</span>
            <input
              type="text"
              className="border rounded-lg px-3 py-2"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-gray-700">나이</span>
            <input
              type="number"
              className="border rounded-lg px-3 py-2"
              required
            />
          </label>
          <Link href={"/step2"} className="text-blue-500 hover:underline">
            확인
          </Link>
        </form>
      </div>
    </div>
  );
}
