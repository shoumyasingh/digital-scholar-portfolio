import { useState, useEffect } from "react";
import { ArrowRight, Code, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Assuming these are imported elsewhere in your application
// For the example, I'll simulate the Link component's behavior
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>{children}</a>
);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-blue-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.slate.100/80)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/80)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/25)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/25)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/10 dark:bg-blue-400/5 rounded-xl rotate-12 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-xl -rotate-12 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full animate-pulse"></div>
      
      {/* Code snippet decorative element */}
      <div className="absolute right-8 top-16 hidden lg:block">
        <div className="relative w-36 h-36 rounded-lg bg-slate-900/90 shadow-xl p-4 -rotate-6">
          <div className="text-xs text-blue-400 font-mono overflow-hidden">
            <div>function research() &#123;</div>
            <div className="pl-4">const ai = new AI();</div>
            <div className="pl-4">return ai.solve();</div>
            <div>&#125;</div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-3 py-1 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50">
                  <BookOpen className="w-3 h-3 mr-1" /> PhD Researcher
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50">
                  <Code className="w-3 h-3 mr-1" /> Software Engineer
                </Badge>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Deepak Kumar
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Results-driven Data Engineer with PhD in Information Technology and over 8 years of experience. Specializing in data platforms, big data technologies, ETL processes, and cloud computing across diverse domains including social media, transportation, banking, and e-commerce.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Open to collaboration</span>
                </div>
                <div className="hidden md:flex h-4 border-l border-slate-300 dark:border-slate-700"></div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">A</div>
                    <div className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center text-white text-xs font-bold">I</div>
                    <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-bold">ML</div>
                  </div>
                  <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300">Research areas</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg hover:shadow-xl transition-all">
                  <Link to="/research" className="flex items-center">
                    Explore My Research 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 shadow-sm hover:shadow transition-all">
                  <Link to="/contact" className="text-blue-600 hover:underline">Get in Touch</Link>
                </Button>
              </div>
              
              <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Experience</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">8+ Years</span>
                </div>
                <div className="flex flex-col border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Publications</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">49</span>
                </div>
                <div className="flex flex-col border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Citations</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">451</span>
                </div>
                <div className="flex flex-col border border-slate-200 dark:border-slate-800 rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Companies</span>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">Meta, Lyft</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-md opacity-60 animate-pulse"></div>
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                <img 
                  src="/D-photo.jpeg" 
                  alt="Deepak Kumar" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badges */}
                <div className="absolute -right-4 top-1/4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg animate-pulse">
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg animate-pulse">
                  <BookOpen className="h-6 w-6 text-indigo-500" />
                </div>
              </div>
              
              {/* Featured publication card */}
              <div className="absolute -bottom-12 -right-12 md:right-0 w-72 bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 border border-slate-200 dark:border-slate-700 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white">Latest Publication</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">DDoS Attack Detection in SDN-IoT</p>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                    <Link to="/publications" className="flex items-center">
                      View <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern decorative elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
    </section>
  );
}


