
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropZoneProps {
  onFileSelect: (file: File) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileSelect }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
    },
    maxFiles: 1,
  });

  const clearPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
  };

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative w-full max-w-xl h-80 rounded-lg border-2 border-dashed p-4 transition-colors",
        isDragActive
          ? "border-leaf-400 bg-leaf-50 dark:bg-leaf-900/20"
          : "border-gray-300 hover:border-leaf-300 dark:border-gray-700 dark:hover:border-leaf-400",
        "cursor-pointer group"
      )}
    >
      <input {...getInputProps()} />
      {preview ? (
        <div className="relative h-full w-full">
          <button
            onClick={clearPreview}
            className="absolute right-2 top-2 z-10 rounded-full bg-white dark:bg-gray-800 p-1 shadow-lg transition-transform hover:scale-110"
          >
            <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded object-contain"
          />
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <Upload
            className={cn(
              "h-10 w-10 transition-colors",
              isDragActive ? "text-leaf-400" : "text-gray-400 dark:text-gray-500"
            )}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium dark:text-gray-300">
              {isDragActive ? "Drop your image here" : "Drop your leaf image here"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG up to 10MB</p>
          </div>
        </div>
      )}
    </div>
  );
};
