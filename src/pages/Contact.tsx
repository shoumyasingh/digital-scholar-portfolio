import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Header section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white dark:from-slate-900 dark:via-blue-950/10 dark:to-gray-950 py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.slate.100/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100/50)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.slate.700/20)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/20)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        
        {/* Animated floating mail icon */}
        <div className="absolute right-1/4 top-1/3 opacity-10 dark:opacity-5 hidden lg:block">
          <div className="relative h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 p-6 animate-pulse">
            <MessageSquare className="h-full w-full text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5 mr-2" /> Contact Me
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Interested in my research, potential collaborations, or have a question? I'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact content section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Email
                      </h3>
                      <a 
                        href="mailto:deepak.kumar@example.com" 
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        deepak.kumar@example.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Phone
                      </h3>
                      <a 
                        href="tel:+15551234567" 
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Monday - Friday, 9:00 AM - 5:00 PM PST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                    Social Media
                  </h3>
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 p-3 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/deepak-kumar-tech/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}









