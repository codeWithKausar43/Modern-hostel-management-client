import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTItle from "../sheard/SectionTItle";
import useMeals from "../hooks/useMeals";
import MealCard from "./MealCard";

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
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>All Categorys</Tab>
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
