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
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all group"
            >
              <a href="/resume_deepak_kumar.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV (PDF)
              </a>
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
                        Doctor of Philosophy in Information Technology
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          University of the Cumberlands, Williamsburg, United States
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Jan 2018 - Dec 2022
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    GPA: 3.7/4.0 • Completed 83 credits related to Information Technology
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Dissertation: "Factor related to adoption of IoT in Smart Home"
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Master of Science in Computer Science
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          San Francisco Bay University, Fremont, United States
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      May 2015 - Dec 2016
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    GPA: 3.8/4.0 • Completed 36 credits related to Computer Science
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
                        Data Engineer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Meta (Contract) - Menlo Park, CA
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Oct 2021 - Present
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Implemented data processing pipelines to clean, transform, and structure raw data, efficiently migrating a petabyte-scale dataset</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Spearheaded compliance initiatives, focusing on identifying violence and unethical content within user videos and reels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Created insightful dashboards utilizing Tableau and Unidash for stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Developed DAGs using Python, Java, SQL, APIs, Presto, Spark, and machine learning modules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Developed framework to detect fraud on Marketplace platform using Spark, TigerGraph Db, Kafka</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                      <span>Performed A/B testing, experimentation, curated & provided training data for LLM and other AI models</span>
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
                        Data Engineer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          i2Data Systems (Client: Lyft) - San Francisco, CA
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Mar 2020 - Oct 2021
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Conducted analysis of business requirements for booking, rides, and daily spend reporting for Accounting Team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Developed comprehensive data ingestion framework using Apache Airflow, Glue, EMR, Redshift, Athena, and Lambda on AWS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-500 dark:text-cyan-400 mr-2">•</span>
                      <span>Developed business reports & dashboard with KPIs using MODE and Tableau for near real-time data tracking</span>
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
                        Data Engineer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Facebook (Contract) - Menlo Park, CA
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Nov 2018 - Dec 2019
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span>Worked for video and feed data engineering team to develop & maintain efficient ETL process using big data stacks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span>Developed dashboard, executed data migration, compliances implementation and ad revenue calculation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span>Involved in backfill, migration, data infra resources real-time monitoring and on-call resources for Global Ops team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Hadoop Developer
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          Pro-Teck Consulting (Wells Fargo) - Fremont, CA
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Mar 2016 - Dec 2017
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">•</span>
                      <span>Designed and implemented data models, schemas, and storage solutions optimized for Hadoop environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">•</span>
                      <span>Created efficient and reliable code to process and analyze data, ensuring quality, integrity, and security standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">•</span>
                      <span>Collaborated with business stakeholders to translate requirements into technical solutions using Agile</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Associate IT Consultant
                      </h3>
                      <div className="flex items-center mt-2">
                        <Building className="h-4 w-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <p className="text-slate-700 dark:text-slate-300 font-medium">
                          ITC Infotech Ltd. - Bengaluru, India
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-sm px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Aug 2011 - Apr 2015
                    </div>
                  </div>
                  <ul className="mt-3 text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                      <span>Used Java, JSP, and Servlets framework for creating web-based applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                      <span>Developed UI using HTML, JavaScript, and JSP, and Business Logic using Business Objects, XML, and JDBC</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                      <span>Used MAVEN to build the project into WAR and EAR files and Clear Case for version controlling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                      <span>Developed testing framework using Java and Selenium for regression & cross platform testing</span>
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
                    Programming
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Python</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-200 dark:bg-purple-700 mr-2"></span>
                      <span>Java</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                    Databases
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>MySQL, PostgreSQL</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Oracle, MongoDB</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700 mr-2"></span>
                      <span>Hive</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    Big Data & Cloud
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>AWS, GCP, Docker</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Hadoop, Spark, Kafka</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Redshift, Presto</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-200 dark:bg-green-700 mr-2"></span>
                      <span>Airflow, Informatica</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                    Testing & Web
                  </h3>
                  <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>Selenium, Cucumber</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>TestNG, Pytest</span>
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-200 dark:bg-orange-700 mr-2"></span>
                      <span>HTML, CSS, NodeJS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications & Memberships */}
          <div className={`mb-16 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-2 mr-4">
                <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Awards, Certifications & Memberships
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Awards */}
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Awards</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Global Recognition Awards</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">September 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Judge, Globee® Awards for Business</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">October 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Advance SQL for Data Scientists</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">November 2018</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Introduction to Cloud Computing</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">November 2018</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Memberships */}
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden p-6 hover:shadow-lg transition-shadow md:col-span-2">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Professional Memberships</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300">Senior Member, IEEE, USA</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300">Member, SigmaXi, USA</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300">Member, International Association of Engineers, Hong Kong</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300">Program Committee Member: PyTorch Conference 2025 (The Linux Foundation)</p>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <Users className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-300">Guest Reviewer - MDPI, Springer Nature, IEEE, IOP</p>
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
