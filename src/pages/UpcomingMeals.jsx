import MealCard from "../components/MealCard";
import useMeals from "../hooks/useMeals";

 

const UpcomingMeals = () => {
    const {meals, loading} = useMeals()
    const upcoming = meals.map(meal => meal.category === "Upcoming")
    if(loading){
        return "Loading.."
    }
    return (
        <div className="mx-auto md:w-[90%] lg:w-[70%] mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
                {
                    upcoming.map(meal => <MealCard key={meal._id} item={meal}></MealCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingMeals;