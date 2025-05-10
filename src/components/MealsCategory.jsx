import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTItle from "../sheard/SectionTItle";
import useMeals from "../hooks/useMeals";
import MealCard from "./MealCard";
import '../css/tabs.css'
const MealsCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { meals, loading } = useMeals();
  if (loading) {
    return <p>Loading...</p>;
  }
  const breakfastMeals = meals.filter(
    (meals) => meals.category === "Breakfast"
  );
  const lunchMeals = meals.filter((meals) => meals.category === "Lunch");
  const dinnerMeals = meals.filter((meals) => meals.category === "Dinner");

  return (
    <div>
      <SectionTItle
        heading={"Meals by Category"}
        description={
          "Explore our wide variety of meals categorized to suit every taste and occasion. Whether you're looking for something classic, trendy, or seasonal, we've got you covered!"
        }
      ></SectionTItle>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

         <TabList className="flex flex-wrap justify-center gap-4 my-8">
          {["Breakfast", "Lunch", "Dinner", "All Categories"].map((label, i) => (
            <Tab
              key={i}
              className={`px-5 py-2.5 text-base md:text-lg font-semibold rounded-md border border-gray-300 text-gray-600 hover:bg-orange-100 hover:text-orange-600 cursor-pointer transition-all duration-200 ease-in-out ${
                tabIndex === i
                  ? "tab-selected"
                  : "data-[selected]:bg-orange-500 data-[selected]:text-white data-[selected]:border-orange-500 shadow-sm"
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
            {breakfastMeals.slice(0, 4).map((meal) => (
              <MealCard key={meal._id} item={meal}></MealCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
            {lunchMeals.slice(0, 4).map((meals) => (
              <MealCard key={meals._id} item={meals}></MealCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
            {dinnerMeals.slice(0, 4).map((meals) => (
              <MealCard key={meals._id} item={meals}></MealCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
            {meals.slice(0, 4).map((meals) => (
              <MealCard key={meals._id} item={meals}></MealCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsCategory;
