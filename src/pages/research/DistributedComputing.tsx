import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Braces, Cloud, Network, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DistributedComputing() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50">
              <Braces className="w-3 h-3 mr-2" /> Systems Research
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Distributed Computing Paradigms
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Investigating novel approaches to distributed computing in heterogeneous environments, focusing on scalability, fault tolerance, and efficient resource utilization across diverse computing platforms.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Research Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  This research explores innovative paradigms for distributed computing systems that can operate efficiently across heterogeneous environments. We investigate novel architectures, protocols, and algorithms that enable seamless computation distribution while maintaining system reliability and performance.
                </p>
                <p>
                  As computing environments become increasingly diverse—spanning cloud, edge, and IoT devices—traditional distributed computing approaches face new challenges. Our work addresses these by developing adaptive frameworks that can dynamically optimize workload distribution based on resource availability, network conditions, and application requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Areas Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Key Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Network className="h-6 w-6" />
                  </div>
                  <CardTitle>Heterogeneous Systems</CardTitle>
                  <CardDescription>
                    Developing frameworks for seamless integration and coordination across diverse computing platforms and architectures.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <CardTitle>Resource Optimization</CardTitle>
                  <CardDescription>
                    Intelligent workload distribution and resource allocation algorithms for maximizing system efficiency.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Fault Tolerance</CardTitle>
                  <CardDescription>
                    Building resilient systems with self-healing capabilities and automated failure recovery mechanisms.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <CardTitle>Edge-Cloud Continuum</CardTitle>
                  <CardDescription>
                    Exploring hybrid architectures that leverage both edge computing and cloud resources for optimal performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Methodologies Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Research Methodologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Simulation-based performance analysis and modeling",
                    "Consensus algorithms for distributed coordination",
                    "Container orchestration and microservices architectures",
                    "Load balancing strategies for heterogeneous environments",
                    "Real-world deployment and benchmarking studies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Progress Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700 shadow-lg bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30">
              <CardHeader>
                <CardTitle className="text-2xl">Current Status & Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Progress</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">60%</span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  Currently in the prototype development phase with initial simulation results showing promising scalability characteristics. Working on refining load balancing algorithms and preparing for real-world deployment testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              <Link to="/research">View All Research</Link>
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
