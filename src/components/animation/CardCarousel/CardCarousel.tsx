"use client";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CardCarousel.scss";
import PlayingCard from "../../ui/PlayingCard/PlayingCard";
import CardRotation from "../CardRotation";
import { FC } from "react";
import { Bestseller } from "../../../../lib/types";

type BestsellerItem = Bestseller & { imageUrl: string | null };

interface CardCarouselProps {
  posts: BestsellerItem[];
}

// Тип стрелки для react-slick
interface ArrowProps {
  onClick?: () => void;
}

// Типизация продукта

// Данные о продуктах

// Стрелки
const CustomPrevArrow: FC<ArrowProps> = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <MdOutlineArrowCircleLeft />
  </div>
);

const CustomNextArrow: FC<ArrowProps> = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <MdOutlineArrowCircleRight />
  </div>
);

// Компонент
const CardCarousel: FC<CardCarouselProps> = ({ posts = [] }) => {
  // console.log("MESSAGE", posts);
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="card_carousel">
      <Slider {...settings}>
        {posts.map((product, index) => (
          <CardRotation key={product._id ?? index} delay={index * 0.5}>
            <PlayingCard
              title={product.title}
              img={product.imageUrl ?? ""}
              link={product.link ?? "#"}
            />
          </CardRotation>
        ))}
      </Slider>
    </section>
  );
};

export default CardCarousel;
