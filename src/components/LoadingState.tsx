
import React from "react";
import { Loader2 } from "lucide-react";

export const LoadingState: React.FC = () => {
  return (
    <div className="flex w-full max-w-xl animate-fade-in flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
      <Loader2 className="h-8 w-8 animate-spin text-leaf-400" />
      <h3 className="mt-4 font-medium">Analyzing your leaf...</h3>
      <p className="mt-2 text-sm text-gray-500">
        Our AI is examining the image for signs of disease
      </p>
    </div>
  );
};
