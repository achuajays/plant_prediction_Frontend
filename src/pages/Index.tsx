
import { useState, useEffect } from "react";
import { DropZone } from "@/components/DropZone";
import { LoadingState } from "@/components/LoadingState";
import { ResultCard } from "@/components/ResultCard";
import { Leaf, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface Disease {
  name: string;
  confidence: number;
  description: string;
}

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<Disease | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + 10;
        });
      }, 200);
    }
    return () => {
      if (interval) clearInterval(interval);
      setProgress(0);
    };
  }, [isAnalyzing]);

  const analyzeLeaf = async (file: File) => {
    try {
      setIsAnalyzing(true);
      setResult(null);

      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Mockup response
      setResult({
        name: "Early Blight",
        confidence: 85,
        description:
          "Early blight is a common disease affecting tomato and potato plants. It appears as dark brown spots with concentric rings on leaves.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex justify-end px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-leaf-50 dark:bg-leaf-900/20">
            <Leaf className="h-6 w-6 text-leaf-500" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Plant Disease Finder
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Upload a leaf image to detect potential diseases
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <DropZone onFileSelect={analyzeLeaf} />
          {isAnalyzing && <LoadingState progress={progress} />}
          {result && <ResultCard disease={result} onReset={handleReset} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
