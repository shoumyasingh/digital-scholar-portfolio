import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, SendIcon, MessageSquare } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      (e.target as HTMLFormElement).reset();
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <SendIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your name" 
                        required 
                        className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                        className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Message subject" 
                      required 
                      className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={6} 
                      required 
                      className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className={`bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto ${formStatus === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}`}
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                    >
                      {formStatus === 'idle' && 'Send Message'}
                      {formStatus === 'submitting' && 'Sending...'}
                      {formStatus === 'success' && 'Message Sent!'}
                      {formStatus === 'error' && 'Try Again'}
                    </Button>
                    
                    {formStatus === 'success' && (
                      <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                        Your message has been sent successfully. I'll get back to you as soon as possible.
                      </p>
                    )}
                    
                    {formStatus === 'error' && (
                      <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                        There was an error sending your message. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact information */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                        href="mailto:jane.doe@example.com" 
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        jane.doe@example.com
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
                
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Office
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Computer Science Department<br />
                        Stanford University<br />
                        Stanford, CA 94305
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Schedule a Meeting
                      </h3>
                      <a 
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        Book a time on my calendar
                      </a>
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
                      href="https://linkedin.com" 
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
        </div>
      </section>
    </Layout>
  );
}









