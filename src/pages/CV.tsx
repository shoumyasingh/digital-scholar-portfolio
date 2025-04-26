import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Code, BookOpen, Users, Award, Calendar, Building } from "lucide-react";

export default function CV() {
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
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-800/80 shadow-sm backdrop-blur-sm">
            <FileText className="w-3.5 h-3.5 mr-2" /> Resume
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Curriculum Vitae
          </h1>
          
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all group">
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* CV content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Ph.D. in Information Technology
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Stanford University
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      2017 - 2021
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Dissertation: "Adaptive Algorithms for Distributed Computing in IoT Networks"
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Advisor: Prof. Michael Johnson
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        M.S. in Computer Science
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Massachusetts Institute of Technology
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      2015 - 2017
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Thesis: "Machine Learning Approaches to Network Security"
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        B.S. in Computer Science
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          University of California, Berkeley
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      2011 - 2015
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Minor in Mathematics
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Experience */}
          <div className={`mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mr-4">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Professional Experience
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Lead Software Engineer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Google AI Research
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      2021 - Present
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Lead a team of 8 engineers developing AI-powered tools for software analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Design and implement distributed systems for large-scale machine learning pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Collaborate with research scientists to translate academic findings into practical applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Publish research papers in top-tier conferences and journals</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Software Engineer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Microsoft Research
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      2017 - 2021
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Developed machine learning algorithms for IoT security applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Designed and implemented a distributed database system for edge computing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Contributed to open-source projects in the distributed systems space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Mentored junior engineers and interns</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Software Engineering Intern
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          IBM Research
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Summer 2016
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span>Developed algorithms for anomaly detection in network traffic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span>Implemented machine learning models for security applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className={`mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mr-4">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technical Skills
              </h2>
            </div>
            
            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-700">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                    Programming Languages
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Python <span className="text-purple-500 dark:text-purple-400">(Expert)</span></span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Rust <span className="text-purple-500 dark:text-purple-400">(Advanced)</span></span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>C/C++ <span className="text-purple-500 dark:text-purple-400">(Advanced)</span></span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>JavaScript/TypeScript <span className="text-purple-500 dark:text-purple-400">(Advanced)</span></span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Java <span className="text-purple-500 dark:text-purple-400">(Intermediate)</span></span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Go <span className="text-purple-500 dark:text-purple-400">(Intermediate)</span></span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    Frameworks & Technologies
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>TensorFlow/PyTorch</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Distributed Systems (Kafka, Kubernetes)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Databases (SQL, NoSQL, Time-series)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Cloud Platforms (AWS, GCP, Azure)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Web Development (React, Node.js)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>IoT Protocols & Standards</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    Research Areas
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Machine Learning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Distributed Computing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Human-Computer Interaction</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>IoT Security</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                    Soft Skills
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Team Leadership</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Technical Writing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Public Speaking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Project Management</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Mentoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Awards & Honors */}
          <div className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-2 mr-4">
                <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Awards & Honors
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Outstanding Research Award
                  </h3>
                </div>
                <p className="ml-11 text-slate-600 dark:text-slate-300">
                  ACM SIGCOMM, 2022
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Best Paper Award
                  </h3>
                </div>
                <p className="ml-11 text-slate-600 dark:text-slate-300">
                  IEEE International Conference on Distributed Computing Systems, 2021
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Google Research Fellowship
                  </h3>
                </div>
                <p className="ml-11 text-slate-600 dark:text-slate-300">
                  2018-2020
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3">
                    <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    ACM Student Research Competition, 1st Place
                  </h3>
                </div>
                <p className="ml-11 text-slate-600 dark:text-slate-300">
                  2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}













