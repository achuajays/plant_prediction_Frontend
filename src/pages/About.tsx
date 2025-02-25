
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-leaf-50 dark:bg-leaf-900/20">
              <Leaf className="h-6 w-6 text-leaf-500" />
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">About LeafGuard</h1>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              LeafGuard is an advanced plant disease detection system that helps gardeners, farmers, and plant enthusiasts identify and treat plant diseases early. Our AI-powered technology analyzes leaf images to provide accurate disease diagnoses and treatment recommendations.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Simply upload a photo of a plant leaf, and our advanced AI model will analyze it for signs of disease. Within seconds, you'll receive a detailed report including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Disease identification</li>
              <li>Detailed disease information</li>
              <li>Treatment recommendations</li>
              <li>Prevention tips</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Our Technology</h2>
            <p className="text-gray-600 dark:text-gray-400">
              LeafGuard uses state-of-the-art machine learning models trained on thousands of plant disease images. Our system can identify various plant diseases with over 95% accuracy, making it a reliable tool for plant health management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
