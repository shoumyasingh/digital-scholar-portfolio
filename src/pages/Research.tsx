
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, FileCode, Users, BookOpen, Calendar, MapPin, ArrowUpRight, Download, ExternalLink } from "lucide-react";

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('interests');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Handle URL hash for direct links
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      if (id === 'publications') setActiveTab('publications');
      if (id === 'conferences') setActiveTab('conferences');
      
      // Scroll to element with delay for animation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  const publications = [
    {
      title: "Optimizing IoT Networks Using Adaptive Learning Algorithms",
      authors: "Doe, J., Smith, A., & Johnson, B.",
      journal: "Journal of Network and Computer Applications",
      year: 2023,
      doi: "10.1016/j.jnca.2023.05.012",
      pdf: "#",
      id: "intelligent-systems"
    },
    {
      title: "Context-Aware Interfaces: A Comprehensive Survey",
      authors: "Doe, J. & Williams, C.",
      journal: "ACM Transactions on Computer-Human Interaction",
      year: 2022,
      doi: "10.1145/3491102.3502025",
      pdf: "#",
      id: "adaptive-ui"
    },
    {
      title: "Heterogeneous Computing in Distributed Environments: Challenges and Solutions",
      authors: "Doe, J., Miller, R., Garcia, L., & Chen, H.",
      journal: "IEEE Transactions on Parallel and Distributed Systems",
      year: 2021,
      doi: "10.1109/TPDS.2021.3061520",
      pdf: "#",
      id: "distributed-computing"
    },
    {
      title: "Machine Learning Approaches for Anomaly Detection in IoT Networks",
      authors: "Smith, A., Doe, J., & Taylor, E.",
      journal: "Sensors Journal",
      year: 2020,
      doi: "10.3390/s20102876",
      pdf: "#"
    }
  ];

  const conferences = [
    {
      name: "International Conference on Information Systems (ICIS)",
      year: 2023,
      role: "Speaker",
      topic: "Distributed Computing Paradigms for Edge Networks",
      location: "Copenhagen, Denmark"
    },
    {
      name: "IEEE International Conference on Software Engineering (ICSE)",
      year: 2022,
      role: "Session Chair",
      topic: "AI-Powered Software Development",
      location: "Pittsburgh, USA"
    },
    {
      name: "ACM Conference on Human Factors in Computing Systems (CHI)",
      year: 2021,
      role: "Poster Presenter",
      topic: "Adaptive User Interfaces",
      location: "Virtual Event"
    }
  ];

  const researchInterests = [
    {
      title: "Artificial Intelligence",
      description: "Machine learning algorithms, neural networks, and AI ethics",
      icon: <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      color: "blue"
    },
    {
      title: "Human-Computer Interaction",
      description: "User experience, adaptive interfaces, accessibility",
      icon: <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      color: "purple"
    },
    {
      title: "Distributed Systems",
      description: "Edge computing, IoT networks, system optimization",
      icon: <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />,
      color: "green"
    }
  ];

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
        
        {/* Research icon */}
        <div className="absolute top-1/4 right-1/4 opacity-10 dark:opacity-5 hidden lg:block">
          <div className="relative h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 p-6 animate-pulse">
            <BookOpen className="h-full w-full text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
            <BookOpen className="w-3.5 h-3.5 mr-2" /> Research Portfolio
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Research
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
            My research explores the intersection of artificial intelligence, human-computer interaction, and distributed systems, with a focus on practical applications.
          </p>
          
          {/* ORCID ID */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <a 
              href="https://orcid.org/0009-0009-2137-0864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-all shadow-sm hover:shadow-md group"
            >
              <svg className="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                <path fill="#A6CE39" d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"/>
                <g>
                  <path fill="#FFFFFF" d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z"/>
                  <path fill="#FFFFFF" d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"/>
                  <path fill="#FFFFFF" d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1C84.2,46.7,88.7,51.3,88.7,56.8z"/>
                </g>
              </svg>
              <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                ORCID: 0009-0009-2137-0864
              </span>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
          </div>
          
          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center mt-12 gap-4">
            <Button
              variant={activeTab === 'interests' ? 'default' : 'outline'}
              onClick={() => setActiveTab('interests')}
              className={activeTab === 'interests' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Research Interests
            </Button>
            <Button
              variant={activeTab === 'publications' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('publications');
                document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'publications' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Publications
            </Button>
            <Button
              variant={activeTab === 'conferences' ? 'default' : 'outline'}
              onClick={() => {
                setActiveTab('conferences');
                document.getElementById('conferences')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={activeTab === 'conferences' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-200 dark:border-slate-700'}
            >
              Conferences
            </Button>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          {/* Research Interests */}
          <div id="interests" className={`mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Research Interests
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchInterests.map((interest, index) => {
                const colorMap = {
                  blue: "from-blue-500 to-indigo-500 bg-blue-50 dark:bg-blue-900/20",
                  purple: "from-purple-500 to-pink-500 bg-purple-50 dark:bg-purple-900/20",
                  green: "from-green-500 to-emerald-500 bg-green-50 dark:bg-green-900/20"
                };
                
                return (
                  <div 
                    key={index}
                    className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${colorMap[interest.color]}`}></div>
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${colorMap[interest.color]}`}>
                        {interest.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {interest.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Publications */}
          <div id="publications" className={`mb-20 scroll-mt-24 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mr-4">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Publications
              </h2>
            </div>
            
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  id={pub.id}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {pub.title}
                        </h3>
                        <p className="italic text-slate-600 dark:text-slate-300 mb-2">
                          {pub.authors}
                        </p>
                        <div className="flex items-center mb-6">
                          <Badge className="bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 mr-3">
                            {pub.year}
                          </Badge>
                          <span className="text-slate-600 dark:text-slate-300 font-medium">{pub.journal}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700">
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> DOI
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700">
                          <a href={pub.pdf} className="flex items-center">
                            <Download className="h-3.5 w-3.5 mr-1.5" /> PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Conference Participation */}
          <div id="conferences" className={`scroll-mt-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mr-4">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Conference Participation
              </h2>
            </div>
            
            <div className="space-y-8">
              {conferences.map((conf, index) => (
                <div 
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-green-500 to-teal-500"></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {conf.name}
                        </h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                          <div className="flex items-center text-slate-600 dark:text-slate-300">
                            <Badge className="bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 mr-3">
                              {conf.year}
                            </Badge>
                            <span className="font-medium">{conf.role}</span>
                          </div>
                          <div className="flex items-center text-slate-600 dark:text-slate-300">
                            <MapPin className="h-4 w-4 text-slate-400 dark:text-slate-500 mr-1.5" />
                            {conf.location}
                          </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg text-slate-700 dark:text-slate-300 mb-2">
                          <span className="font-medium">Topic:</span> {conf.topic}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}










