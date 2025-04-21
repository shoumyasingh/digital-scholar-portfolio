
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-scholar-navy dark:text-white leading-tight">
              Dr. Jane Doe
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-scholar-gray dark:text-gray-300">
              PhD Researcher & Software Engineer
            </h2>
            <p className="mt-6 text-lg text-scholar-gray dark:text-gray-300 max-w-lg">
              Exploring the intersection of information technology, artificial intelligence, and software engineering. My research focuses on developing innovative solutions to complex computational problems.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-scholar-blue hover:bg-blue-700 text-white">
                <Link to="/research">
                  Explore My Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Jane Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative element */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
}
