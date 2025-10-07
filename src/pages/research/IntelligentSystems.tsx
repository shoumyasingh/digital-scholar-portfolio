import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Brain, Shield, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IntelligentSystems() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50">
              <Network className="w-3 h-3 mr-2" /> IoT Research
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Intelligent Systems for IoT Networks
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Exploring machine learning approaches for optimizing IoT network performance and security through adaptive algorithms and intelligent data processing.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Research Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  This research focuses on developing intelligent systems that can autonomously optimize IoT networks by leveraging machine learning algorithms. The goal is to create adaptive systems that can predict network congestion, detect security threats, and optimize resource allocation in real-time.
                </p>
                <p>
                  With the exponential growth of IoT devices, traditional network management approaches are becoming inadequate. Our research addresses these challenges by developing self-learning systems that can adapt to changing network conditions and emerging security threats.
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
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Security & Threat Detection</CardTitle>
                  <CardDescription>
                    ML-based anomaly detection systems for identifying and mitigating security threats in IoT networks.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Performance Optimization</CardTitle>
                  <CardDescription>
                    Intelligent algorithms for network traffic prediction and resource allocation optimization.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>
                    Using time-series analysis and deep learning for predicting network failures and maintenance needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle>Adaptive Learning</CardTitle>
                  <CardDescription>
                    Self-learning systems that continuously improve based on network behavior and feedback loops.
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
                    "Deep Reinforcement Learning for network optimization",
                    "Federated Learning for privacy-preserving IoT analytics",
                    "Edge Computing integration for real-time decision making",
                    "Ensemble methods for robust threat detection",
                    "Graph Neural Networks for network topology analysis"
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
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">85%</span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  Currently in the advanced testing phase with multiple pilot deployments showing promising results. Recent publications have demonstrated significant improvements in network efficiency and security threat detection rates.
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
