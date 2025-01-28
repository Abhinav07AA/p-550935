import { Card } from "@/components/ui/card";
import CourseProgress from "./CourseProgress";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  coverImage: string;
  iconImage: string;
}

const CourseCard = ({
  title,
  description,
  progress,
  coverImage,
  iconImage,
}: CourseCardProps) => {
  return (
    <Card className="max-w-[345px] bg-white pb-[25px] rounded-xl">
      <div className="flex flex-col relative aspect-[1.364] w-full pt-4 pb-[205px] px-[69px] rounded-xl">
        <img
          loading="lazy"
          srcSet={coverImage}
          className="absolute h-full w-full object-cover inset-0"
          alt={`${title} cover`}
        />
        <img
          loading="lazy"
          src={iconImage}
          className="aspect-[1] object-contain w-8 mb-[-41px]"
          alt={`${title} icon`}
        />
      </div>
      
      <div className="flex w-full flex-col items-stretch mt-4 px-4">
        <h2 className="text-[#0E1116] text-base font-medium leading-[1.1] tracking-[0.08px]">
          {title}
        </h2>
        
        <p className="text-[#596C8C] text-xs font-normal leading-[13px] tracking-[0.05px] mt-2">
          {description}
        </p>
        
        <div className="mt-[27px]">
          <CourseProgress progress={progress} />
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;