import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Eye, Smartphone, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AdaptiveUI() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50">
              <Lightbulb className="w-3 h-3 mr-2" /> HCI Research
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Adaptive User Interfaces
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Research on context-aware interfaces that adapt to user preferences, behavior patterns, and environmental factors to provide personalized and intuitive user experiences.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Research Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  This research investigates how interfaces can dynamically adapt to individual users and contexts, creating more intuitive and personalized experiences. We explore machine learning techniques to understand user behavior and preferences, developing systems that can predict user needs and adjust accordingly.
                </p>
                <p>
                  The challenge lies in creating adaptive systems that are both responsive and non-intrusive, balancing automation with user control. Our work focuses on developing frameworks and methodologies that enable seamless adaptation while maintaining user agency and trust.
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
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>User Behavior Modeling</CardTitle>
                  <CardDescription>
                    Creating comprehensive models of user interaction patterns and preferences using machine learning techniques.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <CardTitle>Context-Aware Systems</CardTitle>
                  <CardDescription>
                    Developing interfaces that respond to environmental factors such as location, time, device capabilities, and ambient conditions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Personalization Algorithms</CardTitle>
                  <CardDescription>
                    Implementing intelligent algorithms that learn from user interactions to provide increasingly tailored experiences.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-2">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle>Accessibility & Inclusion</CardTitle>
                  <CardDescription>
                    Ensuring adaptive interfaces accommodate diverse user needs and abilities through inclusive design principles.
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
                    "User-centered design with iterative prototyping and testing",
                    "A/B testing and multivariate analysis for adaptation strategies",
                    "Natural language processing for intent recognition",
                    "Computer vision for gesture and emotion recognition",
                    "Longitudinal studies to evaluate long-term adaptation effectiveness"
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
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">70%</span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  Currently conducting extensive user studies with multiple adaptive interface prototypes. Early results show significant improvements in user satisfaction and task completion rates compared to static interfaces.
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
