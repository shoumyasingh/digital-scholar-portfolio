
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-scholar-navy dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-center text-scholar-gray dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Interested in my research, potential collaborations, or have a question? I'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-scholar-gray dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-scholar-gray dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-scholar-gray dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Message subject" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-scholar-gray dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="bg-scholar-blue hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-scholar-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-scholar-navy dark:text-white">
                      Email
                    </h3>
                    <a 
                      href="mailto:jane.doe@example.com" 
                      className="text-scholar-gray dark:text-gray-300 hover:text-scholar-blue dark:hover:text-blue-400"
                    >
                      jane.doe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-scholar-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-scholar-navy dark:text-white">
                      Phone
                    </h3>
                    <a 
                      href="tel:+15551234567" 
                      className="text-scholar-gray dark:text-gray-300 hover:text-scholar-blue dark:hover:text-blue-400"
                    >
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-scholar-gray dark:text-gray-400">
                      Monday - Friday, 9:00 AM - 5:00 PM PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-scholar-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-scholar-navy dark:text-white">
                      Office
                    </h3>
                    <p className="text-scholar-gray dark:text-gray-300">
                      Computer Science Department<br />
                      Stanford University<br />
                      Stanford, CA 94305
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-scholar-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-scholar-navy dark:text-white">
                      Schedule a Meeting
                    </h3>
                    <a 
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-scholar-gray dark:text-gray-300 hover:text-scholar-blue dark:hover:text-blue-400"
                    >
                      Book a time on my calendar
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-lg text-scholar-navy dark:text-white mb-4">
                    Social Media
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 text-scholar-navy dark:text-white hover:bg-scholar-blue hover:text-white dark:hover:bg-scholar-blue p-3 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 text-scholar-navy dark:text-white hover:bg-scholar-blue hover:text-white dark:hover:bg-scholar-blue p-3 rounded-full transition-colors"
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
