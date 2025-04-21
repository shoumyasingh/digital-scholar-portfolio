
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, FileText, Code, BookOpen, Users } from "lucide-react";

export default function CV() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-scholar-navy dark:text-white mb-6">
            Curriculum Vitae
          </h1>
          <div className="flex justify-center mb-12">
            <Button className="bg-scholar-blue hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-scholar-blue mr-2" />
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white">
                Education
              </h2>
            </div>
            
            <div className="ml-8 space-y-8">
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  Ph.D. in Information Technology
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  Stanford University
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  2017 - 2021
                </p>
                <p className="mt-2 text-scholar-gray dark:text-gray-300">
                  Dissertation: "Adaptive Algorithms for Distributed Computing in IoT Networks"
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  Advisor: Prof. Michael Johnson
                </p>
              </div>
              
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  M.S. in Computer Science
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  Massachusetts Institute of Technology
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  2015 - 2017
                </p>
                <p className="mt-2 text-scholar-gray dark:text-gray-300">
                  Thesis: "Machine Learning Approaches to Network Security"
                </p>
              </div>
              
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  B.S. in Computer Science
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  University of California, Berkeley
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  2011 - 2015
                </p>
                <p className="mt-2 text-scholar-gray dark:text-gray-300">
                  Minor in Mathematics
                </p>
              </div>
            </div>
          </div>
          
          {/* Professional Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-scholar-blue mr-2" />
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white">
                Professional Experience
              </h2>
            </div>
            
            <div className="ml-8 space-y-8">
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  Lead Software Engineer
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  Google AI Research
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  2021 - Present
                </p>
                <ul className="mt-2 text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Lead a team of 8 engineers developing AI-powered tools for software analysis</li>
                  <li>Design and implement distributed systems for large-scale machine learning pipelines</li>
                  <li>Collaborate with research scientists to translate academic findings into practical applications</li>
                  <li>Publish research papers in top-tier conferences and journals</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  Software Engineer
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  Microsoft Research
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  2017 - 2021
                </p>
                <ul className="mt-2 text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed machine learning algorithms for IoT security applications</li>
                  <li>Designed and implemented a distributed database system for edge computing</li>
                  <li>Contributed to open-source projects in the distributed systems space</li>
                  <li>Mentored junior engineers and interns</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 pb-2">
                <h3 className="text-xl font-bold text-scholar-navy dark:text-white">
                  Software Engineering Intern
                </h3>
                <p className="text-scholar-gray dark:text-gray-300 font-medium">
                  IBM Research
                </p>
                <p className="text-scholar-gray dark:text-gray-300">
                  Summer 2016
                </p>
                <ul className="mt-2 text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed algorithms for anomaly detection in network traffic</li>
                  <li>Implemented machine learning models for security applications</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-scholar-blue mr-2" />
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white">
                Technical Skills
              </h2>
            </div>
            
            <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white mb-2">
                  Programming Languages
                </h3>
                <ul className="text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Python (Expert)</li>
                  <li>Rust (Advanced)</li>
                  <li>C/C++ (Advanced)</li>
                  <li>JavaScript/TypeScript (Advanced)</li>
                  <li>Java (Intermediate)</li>
                  <li>Go (Intermediate)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white mb-2">
                  Frameworks & Technologies
                </h3>
                <ul className="text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>TensorFlow/PyTorch</li>
                  <li>Distributed Systems (Kafka, Kubernetes)</li>
                  <li>Databases (SQL, NoSQL, Time-series)</li>
                  <li>Cloud Platforms (AWS, GCP, Azure)</li>
                  <li>Web Development (React, Node.js)</li>
                  <li>IoT Protocols & Standards</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white mb-2">
                  Research Areas
                </h3>
                <ul className="text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Machine Learning</li>
                  <li>Natural Language Processing</li>
                  <li>Distributed Computing</li>
                  <li>Human-Computer Interaction</li>
                  <li>IoT Security</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white mb-2">
                  Soft Skills
                </h3>
                <ul className="text-scholar-gray dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Team Leadership</li>
                  <li>Technical Writing</li>
                  <li>Public Speaking</li>
                  <li>Project Management</li>
                  <li>Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Awards & Honors */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-scholar-blue mr-2" />
              <h2 className="text-2xl font-bold text-scholar-navy dark:text-white">
                Awards & Honors
              </h2>
            </div>
            
            <div className="ml-8 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white">
                  Outstanding Research Award
                </h3>
                <p className="text-scholar-gray dark:text-gray-300">
                  ACM SIGCOMM, 2022
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white">
                  Best Paper Award
                </h3>
                <p className="text-scholar-gray dark:text-gray-300">
                  IEEE International Conference on Distributed Computing Systems, 2021
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white">
                  Google Research Fellowship
                </h3>
                <p className="text-scholar-gray dark:text-gray-300">
                  2018-2020
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-scholar-navy dark:text-white">
                  ACM Student Research Competition, 1st Place
                </h3>
                <p className="text-scholar-gray dark:text-gray-300">
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
