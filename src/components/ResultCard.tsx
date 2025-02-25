
import React from "react";
import { Check, AlertTriangle, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Disease {
  prediction: string;
  disease_info: string;
}

interface ResultCardProps {
  disease: Disease | null;
  className?: string;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ disease, className, onReset }) => {
  return (
    <div
      className={cn(
        "w-full max-w-xl rounded-lg border bg-white p-6 shadow-sm animate-fade-in dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div
          className={cn(
            "rounded-full p-2",
            disease 
              ? "bg-green-50 dark:bg-green-900/20" 
              : "bg-yellow-50 dark:bg-yellow-900/20"
          )}
        >
          {disease ? (
            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          )}
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="font-medium dark:text-white">
              {disease ? disease.prediction : "No disease detected"}
            </h3>
          </div>
          
          {disease && (
            <div 
              className="text-sm text-gray-600 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: disease.disease_info }}
            />
          )}
          
          <Button
            onClick={onReset}
            variant="outline"
            className="mt-4 w-full"
            aria-label="Try another image"
          >
            <UploadCloud className="mr-2 h-4 w-4" />
            Try Another Image
          </Button>
        </div>
      </div>
    </div>
  );
};
