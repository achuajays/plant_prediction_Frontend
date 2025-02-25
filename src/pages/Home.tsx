
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Sun, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FDF8EC] px-4 py-6 dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between mb-20">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-leaf-500" />
          <span className="font-semibold text-xl text-gray-900 dark:text-white">LeafGuard</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link to="/predict" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Detect
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-6xl font-light tracking-tight text-gray-900 dark:text-white">
              Proper care of{" "}
              <span className="font-serif text-leaf-600 dark:text-leaf-400">Plants</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Use our AI-powered tool for easy plant care diagnosis. Learn about potential diseases and get recommendations to keep your plants healthy and thriving.
            </p>

            <div className="flex gap-4">
              <Button asChild size="lg" className="group bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900">
                <Link to="/predict" className="flex items-center">
                  Start Detection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Plant Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-leaf-50 dark:bg-leaf-900/20">
                  <Sun className="h-5 w-5 text-leaf-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Analysis Speed</div>
                  <div className="font-medium dark:text-white">Under 10s</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-leaf-50 dark:bg-leaf-900/20">
                  <Droplet className="h-5 w-5 text-leaf-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Accuracy Rate</div>
                  <div className="font-medium dark:text-white">95%+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-full bg-leaf-50/50 dark:bg-leaf-900/10 flex items-center justify-center p-8">
              <img 
                src="/lovable-uploads/f40bfdef-ca33-4466-95cc-4dd2c60becdd.png" 
                alt="Plant care illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
