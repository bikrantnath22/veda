import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Consultation main index ${index + 1}`,
    description:
      "Personalized guidance to help you navigate your spiritual journey.",
    imageUrl: "https://picsum.photos/500/300",
  }));

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center ">Our Services</h2>
      </div>

      <div className="px-10 py-8 ">
        <Slider {...settings} className="">
          {items.map((item) => (
            <div className="p-4" key={item}>
              <div
                key={item.id}
                className="flex flex-row bg-white rounded-lg shadow-sm"
              >
                <div className="w-[50%]">
                  <img
                    src={item.imageUrl}
                    alt={`Item ${item.id}`}
                    className="rounded-s-md shadow-md md:h-64 h-32 w-full"
                  />
                </div>
                <div className="md:p-4 p-2 flex flex-col w-[50%]">
                  <div className="flex-1">
                    <h3 className="md:text-xl text-md font-semibold mb-2 truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm truncate md:text-base sm:whitespace-normal sm:overflow-visible">{item.description}</p>
                  </div>
                  <div className="flex justify-center w-full">
                    <button className="w-full bg-violet-800 rounded-full text-sm text-white md:h-11 md:font-bold">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CustomArrows;
