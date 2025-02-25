
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const About = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="flex justify-between mb-8">
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

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-leaf-50 dark:bg-leaf-900/20">
              <Leaf className="h-6 w-6 text-leaf-500" />
            </div>
            <h1 className="text-3xl font-semibold">About LeafGuard</h1>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                LeafGuard is dedicated to empowering gardeners, farmers, and plant enthusiasts with cutting-edge technology for early plant disease detection. Our AI-powered system helps protect your plants and ensure healthy growth through accurate diagnosis and timely intervention.
              </p>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Plant Health Importance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Early Detection</h3>
                  <p className="text-muted-foreground">
                    Identifying plant diseases in their early stages is crucial for preventing spread and minimizing crop damage. Our system can detect symptoms before they become visible to the naked eye.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Sustainable Farming</h3>
                  <p className="text-muted-foreground">
                    By detecting diseases early, we help reduce the need for chemical treatments and promote more sustainable farming practices.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Safety Guidelines</h2>
              <ul className="space-y-4 list-disc pl-6">
                <li className="text-muted-foreground">
                  Regular monitoring: Check your plants weekly for any signs of disease or stress.
                </li>
                <li className="text-muted-foreground">
                  Proper spacing: Ensure adequate airflow between plants to prevent disease spread.
                </li>
                <li className="text-muted-foreground">
                  Clean tools: Sanitize gardening tools between uses to prevent cross-contamination.
                </li>
                <li className="text-muted-foreground">
                  Quarantine new plants: Keep new additions isolated for 1-2 weeks to prevent potential disease introduction.
                </li>
              </ul>
            </section>

            <section className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our advanced AI model analyzes leaf images using deep learning techniques, comparing them against a vast database of known plant diseases. Within seconds, you receive detailed information about:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-muted-foreground">Disease identification and severity</li>
                  <li className="text-muted-foreground">Treatment recommendations</li>
                  <li className="text-muted-foreground">Preventive measures</li>
                  <li className="text-muted-foreground">Long-term care strategies</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
