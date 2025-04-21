
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto text-scholar-blue mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-scholar-navy dark:text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-scholar-gray dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Interested in my research, collaboration opportunities, or have a question? I'm always open to interesting conversations and new connections.
        </p>
        <Button asChild size="lg" className="bg-scholar-blue hover:bg-blue-700 text-white">
          <Link to="/contact">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
