
import { useState, useEffect } from "react";
import { DropZone } from "@/components/DropZone";
import { LoadingState } from "@/components/LoadingState";
import { ResultCard } from "@/components/ResultCard";
import { Leaf, Moon, Sun, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

interface Disease {
  prediction: string;
  disease_info: string;
}

const Predict = () => {
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

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      setResult(data);
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
        <div className="flex justify-between">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-accent"
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-accent"
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
          <h1 className="text-3xl font-semibold">
            Plant Disease Finder
          </h1>
          <p className="mt-2 text-muted-foreground">
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

export default Predict;
