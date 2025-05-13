 
import Banner from "../components/Banner";
import EffortlessDiningSolutions from "../components/EffortlessDiningSolutions";
import MealsCategory from "../components/MealsCategory";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto md:w-[90%] lg:w-[70%] my-12">
        <MealsCategory></MealsCategory>
        <EffortlessDiningSolutions></EffortlessDiningSolutions>
      </div>
    </div>
  );
};

export default Home;
