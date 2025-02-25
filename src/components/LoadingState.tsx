
import React from "react";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface LoadingStateProps {
  progress: number;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ progress }) => {
  return (
    <div className="flex w-full max-w-xl animate-fade-in flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Loader2 className="h-8 w-8 animate-spin text-leaf-400" />
      <h3 className="mt-4 font-medium dark:text-white">Analyzing your leaf...</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Our AI is examining the image for signs of disease
      </p>
      <Progress value={progress} className="mt-4 w-full" />
    </div>
  );
};
