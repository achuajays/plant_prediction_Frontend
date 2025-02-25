
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-leaf-50 dark:bg-leaf-900/20">
            <Leaf className="h-8 w-8 text-leaf-500" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Plant Disease Detection
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Protect your plants by early detection of diseases. Our AI-powered tool helps
              identify potential issues before they become severe.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild size="lg" className="group">
              <Link to="/predict" className="flex items-center">
                Start Detection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Quick Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get results in seconds with our advanced AI model
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simply upload a photo of your plant's leaf
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Accurate Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get detailed information about detected diseases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
