
import React from "react";
import { Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Disease {
  name: string;
  confidence: number;
  description: string;
}

interface ResultCardProps {
  disease: Disease | null;
  className?: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ disease, className }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-600";
    if (confidence >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div
      className={cn(
        "w-full max-w-xl rounded-lg border bg-white p-6 shadow-sm animate-fade-in",
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div
          className={cn(
            "rounded-full p-2",
            disease ? "bg-green-50" : "bg-yellow-50"
          )}
        >
          {disease ? (
            <Check className="h-5 w-5 text-green-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          )}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">
              {disease ? disease.name : "No disease detected"}
            </h3>
            {disease && (
              <span
                className={cn(
                  "text-sm font-medium",
                  getConfidenceColor(disease.confidence)
                )}
              >
                {disease.confidence}% confidence
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {disease
              ? disease.description
              : "The leaf appears to be healthy. No signs of disease were detected."}
          </p>
        </div>
      </div>
    </div>
  );
};
