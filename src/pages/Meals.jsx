import MealCard from "../components/MealCard";
import useMeals from "../hooks/useMeals";

 

const Meals = () => {
    const {meals, loading} = useMeals()
    if(loading){
        return "Loading..."
    }
    return (
        <div className="mx-auto md:w-[90%] lg:w-[70%] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
           {
            meals.map(meal => <MealCard key={meal._id} item={meal}></MealCard>)
           }
        </div>
        </div>
    );
};

export default Meals;