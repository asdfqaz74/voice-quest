"use client";

import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";

const steps = [
  { path: "/", label: "정보 입력" },
  { path: "/step2", label: "테마 선택" },
];

function LinearProgressWithLabel({ value }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#FFEB3B", // 연노랑 계열(MUI yellow[500])
            },
            backgroundColor: "#FFFDE7", // 연노랑 바(bar 배경)
            height: 10, // 두께조절
            borderRadius: 8, // 둥글게
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function StepProgressBar() {
  const pathname = usePathname();
  const currentStep = steps.findIndex((s) => s.path === pathname);
  // 스텝 개수에 따라 퍼센트 자동계산
  const value =
    currentStep === -1
      ? 0
      : Math.round(((currentStep + 1) / steps.length) * 100);

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  );
}
