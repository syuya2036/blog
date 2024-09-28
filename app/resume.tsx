"use client";

import ResumeItem from "@/components/resume-item";
import { Button } from "@/components/ui/button";
import { Typography } from "@material-tailwind/react";
import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";

const RESUME_ITEMS = [
  {
    icon: <ComputerIcon />,
    date: "April 2020",
    children:
      "Division of Computer Engineering and Informatics of National Institute of Technology, Ichinoseki College 5th Grade",
  },
  {
    icon: <PsychologyIcon />,
    date: "Now",
    children: "Studying Machine Learning and Optimization Theory.",
  },
  {
    icon: <SchoolIcon />,
    date: "April 2025 (Expected)",
    children:
      "Intended Enrollment in the Mathematics Program, Faculty of Science, Niigata University",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24 dark:bg-gray-900 antialiased">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            I studied computer science at a technical college of information
            science. There I was attracted to the mathematical aspects of
            machine learning and optimization theory, and I plan to enter the
            mathematics department at Niigata University.
          </Typography>
          <Button asChild variant="outline">
            <a href="mailto:shuya@yantan.dev?subject=YantanTechからお問い合せ">
              Contact Me
            </a>
          </Button>
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {RESUME_ITEMS.map((props, idx) => (
            <li key={idx} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {props.date}
              </time>
              <div className="mt-5">
                <ResumeItem key={idx} {...props} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Resume;
