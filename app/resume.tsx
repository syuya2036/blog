"use client";

import { ResumeItem } from "@/components/resume-item";
import { Button } from "@/components/ui/button";
import { Typography } from "@material-tailwind/react";
import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";

const RESUME_ITEMS = [
  {
    icon: <ComputerIcon />,
    children: "一関工業高等専門学校 情報・ソフトウェア系 5年",
  },
  {
    icon: <SchoolIcon />,
    children: "新潟大学 理学部 理学科 数学プログラム 進学予定",
  },
  {
    icon: <PsychologyIcon />,
    children: "機械学習・最適化理論 勉強中",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            私は高専の情報系でコンピュータサイエンスを学びました。
            そこで機械学習や最適化理論の数学的側面に惹かれ、新潟大学の数学科に進学する予定です。
          </Typography>
          <Button asChild variant="outline">
            <a href="mailto:shuya@yantan.dev?subject=YantanTechからお問い合せ">
              Contact Me
            </a>
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
