import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        {Icon}
      </Card>
      <Typography className="w-full font-normal !text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
