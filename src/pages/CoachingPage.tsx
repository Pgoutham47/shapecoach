
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Plus, FileText, Video, Image, ChevronRight, Activity, Dumbbell, Utensils } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: Date;
}

const CoachingPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content: "Hello Tarun! How can I assist with your fitness journey today?",
      timestamp: new Date(Date.now() - 60000),
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = [
        "I'd recommend focusing on progressive overload for your chest workouts. Try increasing weights by 5% or adding an extra rep each week.",
        "Your nutrition looks good! Maybe consider adding more protein sources like Greek yogurt or cottage cheese as snacks between meals.",
        "For your recovery days, light cardio like a 20-minute walk or gentle swimming can help with circulation and recovery.",
        "Remember to stay hydrated, especially before and during your workouts. Aim for at least 16oz of water about 30 minutes before exercise."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        content: randomResponse,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="min-h-screen bg-brand-blue">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 md:ml-64">
          <main className="p-6 h-screen flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-display font-bold text-white mb-2">
                AI Coaching
              </h1>
              <p className="text-gray-300">
                Get real-time fitness and nutrition guidance from your AI coach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              <div className="md:col-span-2 flex flex-col h-full">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 flex-1 flex flex-col">
                  <CardHeader className="bg-white/5 backdrop-blur-sm border-b border-white/10">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/placeholder.svg" alt="AI Coach" />
                        <AvatarFallback className="bg-brand-yellow text-brand-blue">AI</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-white">Your AI Coach</CardTitle>
                        <p className="text-gray-400 text-sm">Available 24/7</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 p-0 flex flex-col">
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div 
                              className={`max-w-[80%] rounded-lg p-3 ${
                                message.sender === "user" 
                                  ? "bg-brand-yellow text-brand-blue ml-auto" 
                                  : "bg-white/10 text-white"
                              }`}
                            >
                              <p>{message.content}</p>
                              <p className={`text-xs mt-1 ${
                                message.sender === "user" 
                                  ? "text-brand-blue/60" 
                                  : "text-gray-400"
                              }`}>
                                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    
                    <div className="p-4 border-t border-white/10">
                      <div className="flex mb-2">
                        <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white/10 text-white hover:bg-white/10 mr-2">
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Add attachment</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white/10 text-white hover:bg-white/10 mr-2">
                          <Image className="h-4 w-4" />
                          <span className="sr-only">Upload image</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white/10 text-white hover:bg-white/10 mr-2">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Upload document</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white/10 text-white hover:bg-white/10">
                          <Video className="h-4 w-4" />
                          <span className="sr-only">Record video</span>
                        </Button>
                      </div>
                      
                      <div className="flex">
                        <Input
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Ask your AI coach a question..."
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow"
                        />
                        <Button 
                          className="ml-2 bg-brand-yellow hover:bg-amber-500 text-brand-blue"
                          onClick={handleSendMessage}
                        >
                          <Send className="h-4 w-4" />
                          <span className="sr-only">Send message</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col space-y-6">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Coaching Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        { title: "Form Check", icon: <Activity className="h-4 w-4 text-brand-yellow" /> },
                        { title: "Workout Modifications", icon: <Dumbbell className="h-4 w-4 text-brand-yellow" /> },
                        { title: "Nutrition Advice", icon: <Utensils className="h-4 w-4 text-brand-yellow" /> },
                        { title: "Recovery Tips", icon: <Activity className="h-4 w-4 text-brand-yellow" /> },
                        { title: "Motivation Support", icon: <Activity className="h-4 w-4 text-brand-yellow" /> }
                      ].map((topic, index) => (
                        <li key={index}>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between border-white/10 text-white hover:bg-white/10 py-5"
                          >
                            <div className="flex items-center">
                              {topic.icon}
                              <span className="ml-2">{topic.title}</span>
                            </div>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        { title: "Your sleep quality can be improved", date: "2 days ago" },
                        { title: "Protein intake has been consistent", date: "5 days ago" },
                        { title: "Recovery rate is improving", date: "1 week ago" }
                      ].map((insight, index) => (
                        <li key={index} className="border-b border-white/10 last:border-0 pb-3 last:pb-0">
                          <p className="text-white font-medium">{insight.title}</p>
                          <p className="text-gray-400 text-sm">{insight.date}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;
