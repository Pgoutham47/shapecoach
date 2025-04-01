
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

interface MealPlan {
  day: string;
  meals: Meal[];
}

interface Meal {
  time: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  preparation?: string;
}

const generateNutritionData = (): { [key: string]: MealPlan[] } => {
  // Sample vegetarian meal plan
  const weekday: MealPlan = {
    day: "Weekday",
    meals: [
      {
        time: "6:30 AM",
        name: "Morning Hydration",
        description: "Start your day with proper hydration to kickstart metabolism",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0,
        ingredients: [
          "1 glass warm water with a tablespoon of chia seeds",
          "1 teaspoon of honey (optional)"
        ],
        preparation: "Soak chia seeds in warm water for 10 minutes before drinking."
      },
      {
        time: "8:00 AM",
        name: "Protein-Packed Breakfast",
        description: "High-protein breakfast to fuel your morning and prevent mid-day cravings",
        calories: 380,
        protein: 22,
        carbs: 45,
        fat: 12,
        ingredients: [
          "2 egg omelette with spinach and tomatoes",
          "1/2 cup oats cooked with low-fat milk",
          "1 tablespoon of flaxseeds",
          "1/4 cup mixed berries"
        ],
        preparation: "Cook oats with low-fat milk. Prepare omelette with spinach and tomatoes. Top oats with flaxseeds and berries."
      },
      {
        time: "10:30 AM",
        name: "Mid-Morning Snack",
        description: "Balanced snack to maintain energy levels",
        calories: 150,
        protein: 5,
        carbs: 20,
        fat: 6,
        ingredients: [
          "1 medium apple",
          "15g (approx. 10) almonds",
          "Green tea (unsweetened)"
        ]
      },
      {
        time: "1:00 PM",
        name: "Balanced Lunch",
        description: "Complex carbohydrates and protein to fuel your afternoon",
        calories: 450,
        protein: 18,
        carbs: 65,
        fat: 10,
        ingredients: [
          "1 cup brown rice",
          "1/2 cup lentil curry",
          "1 cup mixed vegetables (carrots, peas, beans)",
          "1 small bowl vegetable salad with lemon dressing"
        ],
        preparation: "Cook brown rice. Prepare lentil curry with minimal oil. Steam vegetables or sauté with minimal oil. Dress salad with fresh lemon juice and a pinch of salt."
      },
      {
        time: "4:30 PM",
        name: "Energizing Snack",
        description: "Pre-workout nutrition to fuel exercise performance",
        calories: 200,
        protein: 12,
        carbs: 25,
        fat: 5,
        ingredients: [
          "1 medium banana",
          "1 cup low-fat yogurt",
          "1 tablespoon honey",
          "Cinnamon (to taste)"
        ],
        preparation: "Mix yogurt with honey and cinnamon. Enjoy with banana."
      },
      {
        time: "7:30 PM",
        name: "Light Dinner",
        description: "Easy-to-digest evening meal rich in nutrients",
        calories: 380,
        protein: 20,
        carbs: 40,
        fat: 15,
        ingredients: [
          "2 whole wheat rotis",
          "1/2 cup mixed vegetable curry",
          "1 cup paneer bhurji (Indian cottage cheese scramble)",
          "1 small bowl cucumber raita"
        ],
        preparation: "Prepare rotis with whole wheat flour. Cook vegetable curry using minimal oil. Prepare paneer bhurji using low-fat paneer. Make raita with low-fat yogurt."
      },
      {
        time: "9:00 PM",
        name: "Evening Herbal Tea",
        description: "Caffeine-free beverage to promote relaxation and sleep",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        ingredients: [
          "1 cup chamomile tea or turmeric milk (no sugar)"
        ],
        preparation: "Steep chamomile tea or prepare turmeric milk with a pinch of turmeric in warm milk (preferably plant-based)."
      }
    ]
  };

  const weekend: MealPlan = {
    day: "Weekend",
    meals: [
      {
        time: "7:00 AM",
        name: "Morning Hydration",
        description: "Start your day with proper hydration to kickstart metabolism",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0,
        ingredients: [
          "1 glass warm water with a tablespoon of chia seeds",
          "1 teaspoon of honey (optional)"
        ]
      },
      {
        time: "8:30 AM",
        name: "Weekend Breakfast",
        description: "Hearty weekend breakfast with balanced macronutrients",
        calories: 420,
        protein: 25,
        carbs: 50,
        fat: 15,
        ingredients: [
          "2 small vegetable stuffed parathas",
          "1/2 cup paneer bhurji",
          "1 cup low-fat yogurt",
          "1 small bowl mixed fruit"
        ],
        preparation: "Prepare vegetable stuffed parathas with minimal oil. Cook paneer bhurji using low-fat paneer. Serve with yogurt and fresh fruit salad."
      },
      {
        time: "11:00 AM",
        name: "Mid-Morning Snack",
        description: "Light snack to maintain energy levels",
        calories: 180,
        protein: 6,
        carbs: 25,
        fat: 7,
        ingredients: [
          "1 medium fruit (apple, pear, or orange)",
          "1 small handful of mixed nuts",
          "Green tea (unsweetened)"
        ]
      },
      {
        time: "1:30 PM",
        name: "Weekend Lunch",
        description: "Slightly indulgent but balanced weekend meal",
        calories: 550,
        protein: 25,
        carbs: 70,
        fat: 15,
        ingredients: [
          "1 cup vegetable pulao",
          "1 cup rajma (kidney bean curry)",
          "2 pieces tandoori mushroom or paneer tikka",
          "1 small bowl mixed vegetable raita",
          "1 small piece of jaggery (optional)"
        ],
        preparation: "Prepare vegetable pulao with aromatic spices and minimal oil. Cook rajma with tomatoes, onions, and spices. Make tandoori mushroom or paneer tikka in oven or air fryer. Prepare raita with low-fat yogurt and mixed vegetables."
      },
      {
        time: "4:30 PM",
        name: "Afternoon Snack",
        description: "Balanced snack to curb evening cravings",
        calories: 220,
        protein: 10,
        carbs: 30,
        fat: 6,
        ingredients: [
          "1 cup sprouts chat",
          "1 small handful of roasted chana",
          "Fresh lemon juice and spices to taste",
          "Herbal tea (optional)"
        ],
        preparation: "Mix sprouted moong beans with chopped vegetables, roasted chana, lemon juice, and spices."
      },
      {
        time: "7:30 PM",
        name: "Light Dinner",
        description: "Balanced and satisfying evening meal",
        calories: 420,
        protein: 22,
        carbs: 45,
        fat: 18,
        ingredients: [
          "2 multigrain rotis",
          "1/2 cup palak paneer (spinach and cottage cheese curry)",
          "1 cup vegetable soup",
          "1 small bowl cucumber salad"
        ],
        preparation: "Prepare multigrain rotis. Cook palak paneer with fresh spinach and paneer. Make clear vegetable soup. Prepare cucumber salad with lemon dressing."
      },
      {
        time: "9:30 PM",
        name: "Evening Herbal Tea",
        description: "Caffeine-free beverage to promote relaxation and sleep",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        ingredients: [
          "1 cup chamomile tea or turmeric milk (no sugar)"
        ]
      }
    ]
  };

  const cheatDay: MealPlan = {
    day: "Cheat Day (Once a Week)",
    meals: [
      {
        time: "7:00 AM",
        name: "Morning Hydration",
        description: "Start your day with proper hydration",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0,
        ingredients: [
          "1 glass warm water with a tablespoon of chia seeds",
          "1 teaspoon of honey (optional)"
        ]
      },
      {
        time: "8:30 AM",
        name: "Breakfast",
        description: "Balanced breakfast before indulgence",
        calories: 380,
        protein: 20,
        carbs: 45,
        fat: 12,
        ingredients: [
          "2 egg omelette with vegetables",
          "1 slice whole grain toast with avocado",
          "1 cup fruit salad",
          "1 cup green tea"
        ]
      },
      {
        time: "12:30 PM",
        name: "Lunch/Cheat Meal",
        description: "Enjoy your preferred meal in moderation",
        calories: 750,
        protein: 25,
        carbs: 90,
        fat: 30,
        ingredients: [
          "Moderate portion of preferred food (e.g., vegetable biryani)",
          "Small piece of dessert (e.g., small slice of chocolate cake)",
          "1 glass fresh lime water or buttermilk"
        ],
        preparation: "Enjoy your meal mindfully and without guilt. Try to control portion size even while indulging."
      },
      {
        time: "4:00 PM",
        name: "Afternoon Snack",
        description: "Light snack to balance the earlier indulgence",
        calories: 120,
        protein: 5,
        carbs: 15,
        fat: 5,
        ingredients: [
          "1 cup mixed fruit",
          "1 cup green tea or herbal tea"
        ]
      },
      {
        time: "7:30 PM",
        name: "Light Dinner",
        description: "Light dinner to balance the day's calories",
        calories: 300,
        protein: 18,
        carbs: 30,
        fat: 10,
        ingredients: [
          "1 cup clear vegetable soup",
          "1 medium bowl of salad with olive oil dressing",
          "1/2 cup grilled paneer or tofu"
        ],
        preparation: "Prepare clear vegetable soup with minimal salt. Make a large salad with variety of vegetables. Grill paneer or tofu with minimal oil and spices."
      },
      {
        time: "9:30 PM",
        name: "Detox Drink",
        description: "Helps with digestion after a cheat day",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0,
        ingredients: [
          "1 cup warm water with lemon and a pinch of cinnamon"
        ]
      }
    ]
  };

  return {
    daily: Array(7).fill(weekday),
    weekly: [
      { ...weekday, day: "Monday" },
      { ...weekday, day: "Tuesday" },
      { ...weekday, day: "Wednesday" },
      { ...weekday, day: "Thursday" },
      { ...weekday, day: "Friday" },
      { ...weekend, day: "Saturday" },
      { ...cheatDay, day: "Sunday" },
    ]
  };
};

const nutritionData = generateNutritionData();

const NutritionPlan = () => {
  const [expandedDay, setExpandedDay] = useState<string | null>("Weekday");
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null);
  const [activeView, setActiveView] = useState("daily");

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
    setExpandedMeal(null);
  };

  const toggleMeal = (index: number) => {
    setExpandedMeal(expandedMeal === index ? null : index);
  };

  return (
    <>
      <div className="mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="text-brand-yellow h-5 w-5 mt-0.5" />
          <div>
            <h3 className="text-white font-medium mb-1">Nutrition Plan Notes</h3>
            <p className="text-gray-300 text-sm">This vegetarian plan is designed specifically for your goals and preferences. Calorie intake is approximately 1,800-2,000 calories on weekdays and slightly higher on weekends. Adjust portion sizes as needed based on your hunger levels and activity.</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <Tabs defaultValue="daily" value={activeView} onValueChange={setActiveView}>
          <TabsList className="bg-brand-blue/50 border border-white/10">
            <TabsTrigger
              value="daily"
              className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
            >
              Daily Pattern
            </TabsTrigger>
            <TabsTrigger
              value="weekly"
              className="data-[state=active]:bg-brand-yellow data-[state=active]:text-brand-blue"
            >
              Weekly Plan
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <TabsContent value="daily" className="mt-0 space-y-4">
        {nutritionData.daily[0].day && (
          <Card key={nutritionData.daily[0].day} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleDay(nutritionData.daily[0].day)}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                    <path d="M2 20h20"></path>
                    <path d="M14 12v.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{nutritionData.daily[0].day} Meal Plan</h3>
                  <p className="text-sm text-gray-400">{nutritionData.daily[0].meals.length} meals • Approx. 1,800 calories</p>
                </div>
              </div>
              <div>
                {expandedDay === nutritionData.daily[0].day ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
            </div>
            
            {expandedDay === nutritionData.daily[0].day && (
              <CardContent className="pb-4 pt-0 border-t border-white/10">
                <div className="space-y-3">
                  {nutritionData.daily[0].meals.map((meal, index) => (
                    <div key={index} className="bg-white/5 rounded-md overflow-hidden">
                      <div
                        className="p-3 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleMeal(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow text-sm">
                            {meal.time.split(" ")[0]}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{meal.name}</h4>
                            <p className="text-xs text-gray-400">
                              {meal.time} • {meal.calories} cal • {meal.protein}g protein • {meal.carbs}g carbs • {meal.fat}g fat
                            </p>
                          </div>
                        </div>
                        {expandedMeal === index ? (
                          <ChevronUp className="text-white h-4 w-4" />
                        ) : (
                          <ChevronDown className="text-white h-4 w-4" />
                        )}
                      </div>
                      
                      {expandedMeal === index && (
                        <div className="p-3 pt-0 border-t border-white/5">
                          <p className="text-sm text-gray-300 mb-3">{meal.description}</p>
                          
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-white mb-1">Ingredients</h5>
                            <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                              {meal.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {meal.preparation && (
                            <div>
                              <h5 className="text-sm font-medium text-white mb-1">Preparation</h5>
                              <p className="text-sm text-gray-300">{meal.preparation}</p>
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
        )}
      </TabsContent>

      <TabsContent value="weekly" className="mt-0 space-y-4">
        {nutritionData.weekly.map((dayPlan) => (
          <Card key={dayPlan.day} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleDay(dayPlan.day)}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${dayPlan.day === "Sunday" ? "bg-brand-yellow/40" : "bg-brand-yellow/20"} text-brand-yellow flex items-center justify-center font-semibold`}>
                  {dayPlan.day.substring(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{dayPlan.day}</h3>
                  <p className="text-sm text-gray-400">
                    {dayPlan.day === "Sunday" ? "Cheat Day • Flexible meal plan" : `${dayPlan.meals.length} meals • Standard plan`}
                  </p>
                </div>
              </div>
              <div>
                {expandedDay === dayPlan.day ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
            </div>
            
            {expandedDay === dayPlan.day && (
              <CardContent className="pb-4 pt-0 border-t border-white/10">
                <div className="space-y-3">
                  {dayPlan.meals.map((meal, index) => (
                    <div key={index} className="bg-white/5 rounded-md overflow-hidden">
                      <div
                        className="p-3 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleMeal(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center text-brand-yellow text-sm">
                            {meal.time.split(" ")[0]}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{meal.name}</h4>
                            <p className="text-xs text-gray-400">
                              {meal.time} • {meal.calories} cal
                            </p>
                          </div>
                        </div>
                        {expandedMeal === index ? (
                          <ChevronUp className="text-white h-4 w-4" />
                        ) : (
                          <ChevronDown className="text-white h-4 w-4" />
                        )}
                      </div>
                      
                      {expandedMeal === index && (
                        <div className="p-3 pt-0 border-t border-white/5">
                          <p className="text-sm text-gray-300 mb-3">{meal.description}</p>
                          
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-white mb-1">Ingredients</h5>
                            <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                              {meal.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {meal.preparation && (
                            <div>
                              <h5 className="text-sm font-medium text-white mb-1">Preparation</h5>
                              <p className="text-sm text-gray-300">{meal.preparation}</p>
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
      </TabsContent>
    </>
  );
};

export default NutritionPlan;
