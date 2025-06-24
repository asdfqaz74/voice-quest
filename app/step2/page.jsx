"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const liClassName =
  "md:text-base text-sm text-center rounded p-10 cursor-pointer bg-gray-600 hover:scale-105 hover:bg-gray-200 hover:text-black transition-all flex flex-col items-center justify-center gap-2 shadow-xl whitespace-nowrap";

export default function Step2() {
  const router = useRouter();

  const handleClick = (theme) => {
    router.push("/step3");
  };

  return (
    <>
      <span className="text-2xl font-bold ">원하시는 테마를 선택해주세요</span>
      <div className="mt-20">
        <ul className="grid grid-cols-2 gap-10">
          <li className={liClassName} onClick={() => handleClick("healing")}>
            <Image src="/healing.svg" width={80} height={80} alt="힐링" />
            힐링
          </li>
          <li className={liClassName} onClick={() => handleClick("activity")}>
            <Image src="/activity.svg" width={80} height={80} alt="액티비티" />
            액티비티
          </li>
          <li className={liClassName} onClick={() => handleClick("shopping")}>
            <Image src="/shopping.svg" width={80} height={80} alt="쇼핑" />
            쇼핑
          </li>
          <li className={liClassName} onClick={() => handleClick("travel")}>
            <Image src="/travel.svg" width={80} height={80} alt="여행" />
            여행
          </li>
        </ul>
      </div>
    </>
  );
}
