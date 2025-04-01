
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bell, Lock, User, Shield, LogOut } from "lucide-react";

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [workoutReminders, setWorkoutReminders] = useState(true);
  const [mealReminders, setMealReminders] = useState(true);
  const [progressReports, setProgressReports] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  
  const { toast } = useToast();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification Preferences Saved",
      description: "Your notification settings have been updated.",
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy settings have been successfully updated.",
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
                Settings
              </h1>
              <p className="text-gray-300">
                Manage your account preferences and settings
              </p>
            </div>
            
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="bg-brand-blue/50 border border-white/10 w-full justify-start mb-8">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Privacy
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Profile Information</CardTitle>
                    <CardDescription className="text-gray-400">
                      Update your personal details and profile information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile} className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/2 space-y-2">
                          <Label htmlFor="firstName" className="text-white">First Name</Label>
                          <Input 
                            id="firstName" 
                            defaultValue="Tarun" 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                          />
                        </div>
                        <div className="w-full md:w-1/2 space-y-2">
                          <Label htmlFor="lastName" className="text-white">Last Name</Label>
                          <Input 
                            id="lastName" 
                            defaultValue="Singh" 
                            className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          defaultValue="tarun@example.com" 
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          defaultValue="+1 (555) 123-4567" 
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-white">Bio</Label>
                        <textarea 
                          id="bio" 
                          defaultValue="Software engineer focused on improving health and fitness."
                          className="w-full min-h-[100px] rounded-md bg-white/5 border border-white/10 text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <Button type="submit" className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                        Save Changes
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Notification Preferences</CardTitle>
                    <CardDescription className="text-gray-400">
                      Customize how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="emailNotifications" className="text-white">Email Notifications</Label>
                            <p className="text-gray-400 text-sm">Receive weekly summaries and important updates</p>
                          </div>
                          <Switch 
                            id="emailNotifications" 
                            checked={emailNotifications} 
                            onCheckedChange={setEmailNotifications}
                            className="data-[state=checked]:bg-brand-yellow"
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="workoutReminders" className="text-white">Workout Reminders</Label>
                            <p className="text-gray-400 text-sm">Get notifications before scheduled workouts</p>
                          </div>
                          <Switch 
                            id="workoutReminders" 
                            checked={workoutReminders} 
                            onCheckedChange={setWorkoutReminders}
                            className="data-[state=checked]:bg-brand-yellow"
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="mealReminders" className="text-white">Meal Reminders</Label>
                            <p className="text-gray-400 text-sm">Get notifications for meal tracking</p>
                          </div>
                          <Switch 
                            id="mealReminders" 
                            checked={mealReminders} 
                            onCheckedChange={setMealReminders}
                            className="data-[state=checked]:bg-brand-yellow"
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="progressReports" className="text-white">Progress Reports</Label>
                            <p className="text-gray-400 text-sm">Receive weekly progress updates and insights</p>
                          </div>
                          <Switch 
                            id="progressReports" 
                            checked={progressReports} 
                            onCheckedChange={setProgressReports}
                            className="data-[state=checked]:bg-brand-yellow"
                          />
                        </div>
                      </div>
                      
                      <Button onClick={handleSaveNotifications} className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                        Save Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">Change Password</CardTitle>
                    <CardDescription className="text-gray-400">
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                        <Input 
                          id="currentPassword" 
                          type="password" 
                          placeholder="Enter your current password" 
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-white">New Password</Label>
                        <Input 
                          id="newPassword" 
                          type="password" 
                          placeholder="Enter your new password" 
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password" 
                          placeholder="Confirm your new password" 
                          className="bg-white/5 border-white/10 text-white focus-visible:ring-brand-yellow" 
                        />
                      </div>
                      
                      <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                        Update Password
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                    <CardDescription className="text-gray-400">
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to sign in.
                      </p>
                      
                      <Button className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                        Enable Two-Factor Authentication
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Privacy Settings</CardTitle>
                    <CardDescription className="text-gray-400">
                      Control how your data is used and shared
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="dataSharing" className="text-white">Data Sharing for AI Improvement</Label>
                            <p className="text-gray-400 text-sm">Allow anonymous usage data to improve our AI coaching</p>
                          </div>
                          <Switch 
                            id="dataSharing" 
                            checked={dataSharing} 
                            onCheckedChange={setDataSharing}
                            className="data-[state=checked]:bg-brand-yellow"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Your Data</h3>
                        <div className="space-y-2">
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 w-full justify-start">
                            Download Your Data
                          </Button>
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 w-full justify-start">
                            Delete Your Account
                          </Button>
                        </div>
                      </div>
                      
                      <Button onClick={handleSavePrivacy} className="bg-brand-yellow hover:bg-amber-500 text-brand-blue font-semibold">
                        Save Privacy Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
