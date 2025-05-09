 
import Banner from "../components/Banner";
import MealsCategory from "../components/MealsCategory";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto md:w-[90%] lg:w-[70%] mt-12">
        <MealsCategory></MealsCategory>
      </div>
    </div>
  );
};

export default Home;
