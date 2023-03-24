// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./faculties.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import Faculty from "./Faculty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Loader from "../../Shared/Loader";

const Faculties = () => {
  const url = `http://localhost:1337/api/new-committes?populate=*`;
  // const [faculty, setFaculty] = useState([]);
  const { loading, error, data } = useFetch(url);
  // console.log(data);

  
  if (error) {
    return <p>Error</p>;
  }

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setFaculty(data.data)
  //     });
  // },[]);

  return (
    <div
      id="faculties"
      className="section__padding faculties__section flex flex-col justify-center items-center"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-row justify-center items-center text-xl  mb-16">
            <div className="gradient__bar w-2/5"></div>
            <h1
              className="container__heading font-bold text-center px-6 uppercase"
              style={{
                color: "var(--color-subtext)",
              }}
            >
              Executive Committee 23
            </h1>
            <div className="gradient__bar w-2/5"></div>
          </div>

          <div className="container faculties__container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={4}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {data.data.map((data) => (
                <SwiperSlide>
                  <Faculty key={Math.random()} c_data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Link
            to="/see_more_committee"
            className="text-center see__more__button shadow-sm"
          >
            See More <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
        </>
      )}
    </div>
  );
};

export default Faculties;
