
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Calendar, Video, ArrowRight, Send, Clock, CheckCircle2 } from "lucide-react";

const CoachingPage = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message sent",
      description: "Your coach will respond to your message soon.",
    });
    
    setMessage("");
  };
  
  const handleBookSession = () => {
    toast({
      title: "Session Booked",
      description: "Your coaching session has been scheduled.",
    });
  };
  
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                AI Coaching
              </h1>
              <p className="text-gray-300">
                Get personalized guidance and support from your AI coach
              </p>
            </div>
            
            <Tabs defaultValue="chat" className="w-full">
              <TabsList className="bg-brand-blue/50 border border-white/10 w-full justify-start mb-8">
                <TabsTrigger
                  value="chat"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat
                </TabsTrigger>
                <TabsTrigger
                  value="sessions"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Sessions
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Resources
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="chat">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-[600px] flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-white">Chat with Your AI Coach</CardTitle>
                        <CardDescription className="text-gray-400">
                          Ask questions, get feedback, and track your progress
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex-1 overflow-y-auto space-y-4">
                        {/* AI Coach Message */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">
                            C
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-white">
                              Hi Tarun! How's your workout routine going this week? I noticed you've completed 3 out of 5 scheduled workouts. Is there anything specific you need help with?
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">Today, 9:32 AM</span>
                          </div>
                        </div>
                        
                        {/* User Message */}
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-brand-yellow/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-white">
                              I've been feeling a bit tired after the last few workouts. Should I adjust my routine or nutrition?
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">Today, 9:35 AM</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                            T
                          </div>
                        </div>
                        
                        {/* AI Coach Message */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">
                            C
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-white">
                              That's a great observation about your energy levels. Let's look at a few factors:
                            </p>
                            <ol className="list-decimal text-white ml-4 space-y-1 my-2">
                              <li>Make sure you're getting enough sleep (7-9 hours)</li>
                              <li>Check if you're consuming enough carbs for energy</li>
                              <li>Consider adding a rest day between intense workout days</li>
                            </ol>
                            <p className="text-white">
                              I've adjusted your plan with an extra recovery day this week. How does that sound?
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">Today, 9:38 AM</span>
                          </div>
                        </div>
                        
                        {/* User Message */}
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-brand-yellow/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-white">
                              That sounds perfect. I think I've been pushing too hard without enough recovery. Could you also suggest some good pre-workout snacks for energy?
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">Today, 9:40 AM</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                            T
                          </div>
                        </div>
                        
                        {/* AI Coach Message */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold">
                            C
                          </div>
                          <div className="bg-white/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-white">
                              Absolutely! Here are some quick pre-workout snack ideas (30-60 mins before):
                            </p>
                            <ul className="list-disc text-white ml-4 space-y-1 my-2">
                              <li>Banana with a tablespoon of almond butter</li>
                              <li>Greek yogurt with berries and a drizzle of honey</li>
                              <li>Whole grain toast with avocado</li>
                              <li>Smoothie with fruit, protein, and a small amount of oats</li>
                            </ul>
                            <p className="text-white">
                              I'll send you a more detailed nutrition guide to help with energy levels throughout the day.
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">Today, 9:42 AM</span>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="border-t border-white/10 p-4">
                        <div className="flex w-full items-center gap-2">
                          <Input
                            placeholder="Type your message..."
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSendMessage();
                              }
                            }}
                          />
                          <Button 
                            onClick={handleSendMessage}
                            className="bg-brand-yellow hover:bg-amber-500 text-brand-blue"
                          >
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send message</span>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white">Coach's Recommendations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-white/10 p-2 rounded-full">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Increase Protein Intake</h4>
                            <p className="text-gray-400 text-sm">Aim for 1.8g per kg of body weight</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-white/10 p-2 rounded-full">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Add Recovery Sessions</h4>
                            <p className="text-gray-400 text-sm">Yoga or light stretching on rest days</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-white/10 p-2 rounded-full">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Focus on Sleep Quality</h4>
                            <p className="text-gray-400 text-sm">Aim for 7-8 hours of quality sleep</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white">Next Session</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-brand-yellow" />
                              <span className="text-white">Friday, May 26</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-brand-yellow" />
                              <span className="text-white">3:00 PM</span>
                            </div>
                          </div>
                          
                          <div className="bg-white/10 p-3 rounded-lg">
                            <h4 className="text-white font-medium">Monthly Progress Review</h4>
                            <p className="text-gray-400 text-sm mt-1">We'll review your progress and adjust your plan for next month.</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                          Join Video Call
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sessions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-medium">Monthly Progress Review</h3>
                          <div className="bg-brand-yellow/20 text-brand-yellow text-xs px-2 py-1 rounded-full">
                            Video Call
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 text-sm mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>May 26, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>3:00 PM</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Review of your monthly progress and plan adjustment for next month.
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue">
                            Join Call
                          </Button>
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-medium">Nutrition Consultation</h3>
                          <div className="bg-green-500/20 text-green-500 text-xs px-2 py-1 rounded-full">
                            Chat Session
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 text-sm mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>June 2, 2023</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>4:30 PM</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                          Detailed discussion about your nutritional needs and meal planning.
                        </p>
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 mt-4">
                          Reschedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Book a Session</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-white font-medium">Session Type</h3>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/10 hover:bg-white/20 border-2 border-white/10 rounded-lg p-3 cursor-pointer transition-colors">
                              <div className="flex flex-col items-center">
                                <Video className="h-6 w-6 text-brand-yellow mb-2" />
                                <span className="text-white text-center">Video Call</span>
                                <span className="text-xs text-gray-400 text-center">Face-to-face guidance</span>
                              </div>
                            </div>
                            <div className="bg-white/10 hover:bg-white/20 border-2 border-white/10 rounded-lg p-3 cursor-pointer transition-colors">
                              <div className="flex flex-col items-center">
                                <MessageSquare className="h-6 w-6 text-green-500 mb-2" />
                                <span className="text-white text-center">Chat Session</span>
                                <span className="text-xs text-gray-400 text-center">Text-based coaching</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-white font-medium">Available Times</h3>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              "10:00 AM", "11:30 AM", "1:00 PM", 
                              "2:30 PM", "4:00 PM", "5:30 PM"
                            ].map((time, index) => (
                              <div 
                                key={index} 
                                className="bg-white/10 hover:bg-brand-yellow/20 border border-white/10 rounded-lg p-2 text-center cursor-pointer transition-colors"
                              >
                                <span className="text-white">{time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-white font-medium">Focus Area</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              "Workout Form", "Nutrition", 
                              "Recovery", "Progress Review"
                            ].map((area, index) => (
                              <div 
                                key={index} 
                                className="bg-white/10 hover:bg-brand-yellow/20 border border-white/10 rounded-lg p-2 text-center cursor-pointer transition-colors"
                              >
                                <span className="text-white">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          onClick={handleBookSession}
                          className="w-full bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold"
                        >
                          Book Session
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 mt-6">
                  <CardHeader>
                    <CardTitle className="text-white">Past Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { 
                          title: "Initial Assessment", 
                          type: "Video Call",
                          date: "April 15, 2023",
                          time: "2:00 PM",
                          notes: "Comprehensive assessment of fitness level, goals, and dietary preferences. Set up initial workout plan and nutrition guidelines."
                        },
                        { 
                          title: "Workout Form Check", 
                          type: "Video Call",
                          date: "April 28, 2023",
                          time: "3:30 PM",
                          notes: "Reviewed form for squat, deadlift, and bench press. Identified and corrected form issues. Provided cues for proper execution."
                        },
                        { 
                          title: "Bi-weekly Check-in", 
                          type: "Chat Session",
                          date: "May 12, 2023",
                          time: "4:00 PM",
                          notes: "Discussed progress and challenges. Adjusted workout intensity and added variety to prevent plateaus."
                        }
                      ].map((session, index) => (
                        <div key={index} className="bg-white/10 p-4 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-medium">{session.title}</h3>
                            <div className={`${
                              session.type === "Video Call" 
                                ? "bg-brand-yellow/20 text-brand-yellow" 
                                : "bg-green-500/20 text-green-500"
                              } text-xs px-2 py-1 rounded-full`}
                            >
                              {session.type}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-gray-300 text-sm mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{session.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{session.time}</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {session.notes}
                          </p>
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 mt-3">
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Proper Squat Form",
                      category: "Exercise Technique",
                      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXR8ZW58MHx8MHx8fDA%3D",
                      description: "Learn the proper form and technique for squats to maximize results and prevent injury."
                    },
                    {
                      title: "Nutrition for Muscle Gain",
                      category: "Nutrition",
                      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0cml0aW9ufGVufDB8fDB8fHww",
                      description: "Comprehensive guide to nutrition principles for building muscle and strength."
                    },
                    {
                      title: "Recovery Techniques",
                      category: "Recovery",
                      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZXRjaGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                      description: "Effective strategies to enhance recovery between workouts and prevent overtraining."
                    },
                    {
                      title: "Progressive Overload",
                      category: "Training Principles",
                      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VpZ2h0JTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
                      description: "Understanding and implementing progressive overload for continuous improvement."
                    },
                    {
                      title: "Sleep Optimization",
                      category: "Lifestyle",
                      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xlZXB8ZW58MHx8MHx8fDA%3D",
                      description: "How to optimize sleep for better recovery, performance, and overall health."
                    },
                    {
                      title: "Meal Prep Fundamentals",
                      category: "Nutrition",
                      image: "https://images.unsplash.com/photo-1532465614-6cc8d45f647f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVhbCUyMHByZXB8ZW58MHx8MHx8fDA%3D",
                      description: "Step-by-step guide to efficient meal preparation for fitness success."
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="bg-white/20 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                          {resource.category}
                        </div>
                        <h3 className="text-white font-medium">{resource.title}</h3>
                        <p className="text-gray-400 text-sm mt-2">{resource.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-brand-yellow/20 hover:bg-brand-yellow/30 text-brand-yellow border border-brand-yellow/30">
                          View Resource
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
