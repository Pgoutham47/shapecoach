
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, User, Brain, Clock, BarChart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue">
      <Navbar />
      
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Redefining Fitness Through Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ShapeCoach combines cutting-edge AI with proven fitness principles to deliver personalized coaching that adapts to your unique journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/features">
                <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                  Explore Features
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-brand-yellow/20 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMHRlY2h8ZW58MHx8MHx8fDA%3D" 
              alt="Fitness technology" 
              className="rounded-xl w-full h-auto relative z-10 object-cover shadow-xl"
            />
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300">
            To democratize access to high-quality fitness coaching through artificial intelligence, making personalized guidance accessible to everyone regardless of location or budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="bg-brand-yellow/20 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-brand-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">For Everyone</h3>
              <p className="text-gray-300">
                We believe fitness should be inclusive. Our platform adapts to all experience levels, physical capabilities, and goals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="bg-green-500/20 p-3 rounded-full w-fit mb-4">
                <Brain className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">
                Our advanced algorithms create truly personalized plans that adapt in real-time based on your progress and feedback.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="bg-blue-500/20 p-3 rounded-full w-fit mb-4">
                <BarChart className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data-Driven</h3>
              <p className="text-gray-300">
                We leverage data science to track progress, identify patterns, and optimize your fitness journey for maximum results.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                ShapeCoach was founded in 2021 by a team of fitness professionals and AI specialists who saw a gap in the market for truly personalized fitness coaching.
              </p>
              <p className="text-gray-300 mb-4">
                Traditional fitness apps offered cookie-cutter solutions, while personal trainers were expensive and limited by geography. We set out to combine the best of both worlds: the personalization of a dedicated coach with the accessibility of technology.
              </p>
              <p className="text-gray-300">
                Today, ShapeCoach serves users in over 30 countries, helping people from all walks of life achieve their fitness goals through custom AI coaching.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww" 
                alt="AI and data analysis" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYWRzaG90fGVufDB8fDB8fHww",
                bio: "Former fitness coach with a passion for making expert guidance accessible to everyone."
              },
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
                bio: "AI specialist with 10+ years experience in machine learning and adaptive algorithms."
              },
              {
                name: "Marcus Johnson",
                role: "Head of Fitness Science",
                image: "https://images.unsplash.com/photo-1556157382-97eda2f9e861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
                bio: "Certified strength coach with a PhD in Exercise Physiology from Stanford."
              },
              {
                name: "Leila Patel",
                role: "Nutrition Director",
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhlYWRzaG90fGVufDB8fDB8fHww",
                bio: "Registered Dietitian with expertise in sports nutrition and metabolic health."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-brand-yellow mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-brand-yellow/10 border border-brand-yellow rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Why Choose ShapeCoach?
            </h2>
            <p className="text-xl text-gray-300">
              We're not just another fitness app. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Truly Personalized",
                description: "Our AI adapts to your unique body, preferences, and progress for truly custom guidance."
              },
              {
                title: "Science-Backed",
                description: "All workout and nutrition plans are based on peer-reviewed research and fitness science."
              },
              {
                title: "Always Available",
                description: "Get coaching and answers 24/7, whenever and wherever you need guidance."
              },
              {
                title: "Continuous Improvement",
                description: "Our platform keeps learning from your data to provide better recommendations over time."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/signup">
              <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold text-lg px-8 py-3">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
