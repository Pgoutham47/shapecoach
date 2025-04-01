
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WorkoutDay {
  day: number;
  focus: string;
  exercises: Exercise[];
  completed: boolean;
}

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  equipment?: string;
  instructions: string;
  videoId?: string;
}

const generateWorkoutData = (): WorkoutDay[] => {
  // Week 1 - Beginner level, full body, focus on form
  const week1: WorkoutDay[] = [
    {
      day: 1,
      focus: "Full Body Basics",
      completed: false,
      exercises: [
        {
          name: "Bodyweight Squats",
          sets: 3,
          reps: "10-12",
          instructions: "Stand with feet shoulder-width apart. Lower your body as if sitting in a chair. Keep chest up and knees behind toes.",
          videoId: "aclHkVaku9U"
        },
        {
          name: "Push-ups (Modified if needed)",
          sets: 3,
          reps: "8-10",
          instructions: "Start in plank position. Lower chest to floor while keeping body straight. Push back up. For modified version, keep knees on floor.",
          videoId: "IODxDxX7oi4"
        },
        {
          name: "Glute Bridges",
          sets: 3,
          reps: "12-15",
          instructions: "Lie on back with knees bent. Lift hips toward ceiling, squeezing glutes at the top. Lower slowly.",
          videoId: "wPM8icPu6H8"
        },
        {
          name: "Superman Holds",
          sets: 3,
          reps: "10 sec holds",
          instructions: "Lie face down with arms extended. Lift arms, chest, and legs off floor simultaneously. Hold, then lower.",
          videoId: "z6PJMT2y8GQ"
        }
      ]
    },
    {
      day: 2,
      focus: "Active Recovery",
      completed: false,
      exercises: [
        {
          name: "Walking",
          sets: 1,
          reps: "20-30 minutes",
          instructions: "Brisk walking outdoors or on treadmill. Focus on good posture and breathing.",
        },
        {
          name: "Gentle Stretching Routine",
          sets: 1,
          reps: "10-15 minutes",
          instructions: "Hold each stretch for 20-30 seconds. Include hamstrings, quads, chest, shoulders, and back stretches.",
          videoId: "sTxC3J3gQEU"
        }
      ]
    },
    {
      day: 3,
      focus: "Upper Body Focus",
      completed: false,
      exercises: [
        {
          name: "Resistance Band Rows",
          sets: 3,
          reps: "12-15",
          equipment: "Resistance band",
          instructions: "Secure band at chest height. Pull band toward body, squeezing shoulder blades together. Return slowly.",
          videoId: "xpzMr3nSOIE"
        },
        {
          name: "Wall Push-ups",
          sets: 3,
          reps: "12-15",
          instructions: "Stand facing wall with arms extended. Bend elbows to bring chest toward wall, then push back.",
          videoId: "EgU3CbtQTlw"
        },
        {
          name: "Resistance Band Chest Press",
          sets: 3,
          reps: "12-15",
          equipment: "Resistance band",
          instructions: "Wrap band around back, holding ends at chest. Push hands forward against resistance, then return.",
          videoId: "kcSAXJg9asQ"
        },
        {
          name: "Shoulder Taps",
          sets: 3,
          reps: "10 each side",
          instructions: "Start in plank position. Tap opposite shoulder with hand while maintaining stable position.",
          videoId: "gWHQpMUd7vw"
        }
      ]
    },
    {
      day: 4,
      focus: "Active Recovery",
      completed: false,
      exercises: [
        {
          name: "Walking",
          sets: 1,
          reps: "20-30 minutes",
          instructions: "Brisk walking outdoors or on treadmill. Focus on good posture and breathing.",
        },
        {
          name: "Gentle Stretching Routine",
          sets: 1,
          reps: "10-15 minutes",
          instructions: "Hold each stretch for 20-30 seconds. Include hamstrings, quads, chest, shoulders, and back stretches.",
          videoId: "sTxC3J3gQEU"
        }
      ]
    },
    {
      day: 5,
      focus: "Lower Body Focus",
      completed: false,
      exercises: [
        {
          name: "Bodyweight Lunges",
          sets: 3,
          reps: "10 each leg",
          instructions: "Step forward with one leg, lowering until both knees form 90° angles. Push back to starting position. Repeat with other leg.",
          videoId: "QOVaHwm-Q6U"
        },
        {
          name: "Resistance Band Leg Press",
          sets: 3,
          reps: "12-15",
          equipment: "Resistance band",
          instructions: "Lie on back. Wrap band around feet and hold ends. Push feet away, then return.",
          videoId: "nLiwUK75PQA"
        },
        {
          name: "Calf Raises",
          sets: 3,
          reps: "15-20",
          instructions: "Stand with feet hip-width apart. Rise onto toes, then lower heels back down.",
          videoId: "gwLzBJYoWlI"
        },
        {
          name: "Glute Kickbacks",
          sets: 3,
          reps: "12 each leg",
          instructions: "On hands and knees, kick one leg back and up while keeping knee bent. Focus on using glute muscles.",
          videoId: "pn2EZz15AIM"
        }
      ]
    },
    {
      day: 6,
      focus: "Full Body & Core",
      completed: false,
      exercises: [
        {
          name: "Bird-dog",
          sets: 3,
          reps: "8-10 each side",
          instructions: "On hands and knees, extend opposite arm and leg simultaneously. Hold briefly, then return and switch sides.",
          videoId: "wiFNA3sqjCA"
        },
        {
          name: "Resistance Band Lateral Walks",
          sets: 3,
          reps: "10 steps each direction",
          equipment: "Resistance band",
          instructions: "Place band above knees. Step sideways while maintaining tension in the band.",
          videoId: "mOxhVIIx7rA"
        },
        {
          name: "Plank",
          sets: 3,
          reps: "20-30 sec holds",
          instructions: "Hold position with body straight, supported by forearms and toes. Keep core engaged.",
          videoId: "ASdvN_XEl_c"
        },
        {
          name: "Standing Resistance Band Rotations",
          sets: 3,
          reps: "10-12 each side",
          equipment: "Resistance band",
          instructions: "Secure band at chest height. Hold with both hands and rotate torso away from anchor point.",
          videoId: "I53xviMcSA0"
        }
      ]
    },
    {
      day: 7,
      focus: "Rest Day",
      completed: false,
      exercises: [
        {
          name: "Complete Rest",
          sets: 0,
          reps: "N/A",
          instructions: "Take a full rest day. Focus on quality sleep and recovery.",
        }
      ]
    }
  ];

  return [...week1, ...week1, ...week1, ...week1].map((day, idx) => ({
    ...day,
    day: idx + 1
  }));
};

const workoutData = generateWorkoutData();

const WorkoutPlan = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [activeWeek, setActiveWeek] = useState("week1");

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
    setExpandedExercise(null);
  };

  const toggleExercise = (index: number) => {
    setExpandedExercise(expandedExercise === index ? null : index);
  };

  const markCompleted = (dayIndex: number) => {
    workoutData[dayIndex - 1].completed = !workoutData[dayIndex - 1].completed;
    // In a real app, this would update state and persist the change
  };

  const weekTabs = {
    week1: { label: "Week 1", days: workoutData.slice(0, 7) },
    week2: { label: "Week 2", days: workoutData.slice(7, 14) },
    week3: { label: "Week 3", days: workoutData.slice(14, 21) },
    week4: { label: "Week 4", days: workoutData.slice(21, 28) },
    week5: { label: "Week 5", days: workoutData.slice(28) },
  };

  return (
    <>
      <div className="mb-4">
        <Tabs defaultValue="week1" value={activeWeek} onValueChange={setActiveWeek}>
          <TabsList className="bg-brand-blue/50 border border-white/10">
            {Object.entries(weekTabs).map(([key, { label }]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        {weekTabs[activeWeek as keyof typeof weekTabs].days.map((workout) => (
          <Card key={workout.day} className={`bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden ${workout.completed ? 'border-green-500 border-opacity-50' : ''}`}>
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleDay(workout.day)}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${workout.completed ? 'bg-green-500/20 text-green-400' : 'bg-brand-yellow/20 text-brand-yellow'} flex items-center justify-center font-semibold`}>
                  {workout.completed ? <CheckCircle size={20} /> : workout.day}
                </div>
                <div>
                  <h3 className="font-semibold text-white">Day {workout.day}: {workout.focus}</h3>
                  <p className="text-sm text-gray-400">{workout.exercises.length} exercises</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className={`border-${workout.completed ? 'green-500' : 'white/10'} text-${workout.completed ? 'green-400' : 'white'} hover:bg-${workout.completed ? 'green-500/10' : 'white/5'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    markCompleted(workout.day);
                  }}
                >
                  {workout.completed ? "Completed" : "Mark Complete"}
                </Button>
                {expandedDay === workout.day ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
            </div>
            
            {expandedDay === workout.day && (
              <CardContent className="pb-4 pt-0 border-t border-white/10">
                <div className="space-y-3">
                  {workout.exercises.map((exercise, index) => (
                    <div key={index} className="bg-white/5 rounded-md overflow-hidden">
                      <div
                        className="p-3 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleExercise(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow text-sm">
                            {exercise.videoId ? <PlayCircle size={18} /> : index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{exercise.name}</h4>
                            <p className="text-xs text-gray-400">
                              {exercise.sets} sets × {exercise.reps} {exercise.equipment && `• ${exercise.equipment}`}
                            </p>
                          </div>
                        </div>
                        {expandedExercise === index ? (
                          <ChevronUp className="text-white h-4 w-4" />
                        ) : (
                          <ChevronDown className="text-white h-4 w-4" />
                        )}
                      </div>
                      
                      {expandedExercise === index && (
                        <div className="p-3 pt-0 border-t border-white/5">
                          <p className="text-sm text-gray-300 mb-3">{exercise.instructions}</p>
                          {exercise.videoId && (
                            <div className="aspect-video bg-black/30 rounded flex items-center justify-center">
                              <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                                <PlayCircle className="mr-2 h-4 w-4" />
                                Watch Tutorial
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default WorkoutPlan;
