import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { EffectFade, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mb-5">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-[70vh] bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            <div className="text-center ">
              <h2 className="text-white md:text-2xl lg:text-3xl text-xl font-bold">
                Explore The World of Street Food Delights
              </h2>
              <p className="text-white hidden md:flex lg:w-200 md:w-100 w-80 mx-auto">
                unleash your taste buds with vibrant street food from bustling
                markets around the globe. From savory tacos to sizzling barbecue
                and exotic stir-fried delicacies, each bite tells a strory of
                culture and flavor. Whether its a cozy corner stall or a lively
                food bazaar there s always an adventure waiting in very dish
              </p>
              <label className="input mt-6 ">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[70vh] bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="text-center ">
              <h2 className="text-white md:text-2xl lg:text-3xl text-xl font-bold">
                Flavors Of The Night
              </h2>
              <p className="text-white hidden md:flex lg:w-200 md:w-100 w-80 mx-auto">
                Dive into the bustlife of street food vendors offering a variety
                of dishes made fresh made fresh before your eyes. From siZzling
                grills to steaming post, explore the vibrant energy and
                mouthwatering creations that make every evening a celebration of
                taste.
              </p>
              <label className="input mt-6 ">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[70vh] bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="text-center ">
              <h2 className="text-white md:text-2xl lg:text-3xl text-xl font-bold">
                Savor The Magic Of Street Food
              </h2>
              <p className="text-white hidden md:flex lg:w-200 md:w-100 w-80 mx-auto">
                Discover the heart and soul of culinary traditions at vibrant
                street food stalls. Each Dish, crafted with passion and local
                ingredients, invites you to experience authentic flavors and
                unforgettable moments.
              </p>
              <label className="input mt-6 ">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
