import { Progress } from "@/components/ui/progress";

interface CourseProgressProps {
  progress: number;
  showLabel?: boolean;
}

export const CourseProgress = ({ progress, showLabel = true }: CourseProgressProps) => {
  return (
    <div className="w-full">
      {showLabel && (
        <div
          className="text-[#0E1116] text-xs font-normal leading-[1.1] tracking-[0.05px] mb-2"
        >
          {progress}% completed
        </div>
      )}
      <div className="max-w-full w-[313px] rounded-[100px]">
        <div className="bg-[rgba(217,217,217,1)] flex flex-col rounded-[100px]">
          <div 
            className="bg-[rgba(0,170,17,1)] flex shrink-0 h-1 rounded-[100px]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;