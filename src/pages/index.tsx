import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderBottom from "@/components/header/HeaderBottom";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  useEffect(() => {
    const right = document.querySelector(".right-btn");
    const left = document.querySelector(".left-btn");

    const handleRightClick = (event: Event) => {
      const content = document.querySelector(".slide-carousel") as HTMLElement;
      if (content) content.scrollLeft += 1100;
      event.preventDefault();
    };

    const handleLeftClick = (event: Event) => {
      const content = document.querySelector(".slide-carousel") as HTMLElement;
      if (content) content.scrollLeft -= 1100;
      event.preventDefault();
    };

    right?.addEventListener("click", handleRightClick);
    left?.addEventListener("click", handleLeftClick);

    return () => {
      right?.removeEventListener("click", handleRightClick);
      left?.removeEventListener("click", handleLeftClick);
    };
  }, []);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        {/* Carousel Section */}
        <div className="relative carousel">
          <h1 className="carousel-head">Upto 45% off | Beds and mattresses</h1>
          <button className="left-btn absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="right-btn absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <ul className="slide-carousel flex overflow-x-auto scroll-smooth space-x-4">
            {Array.from({ length: 18 }, (_, i) => (
              <li key={i} className="flex-shrink-0">
                <img
                  src={`/amazon assets/bed${i + 1}.png`}
                  className="slide-img w-64 h-64 object-cover"
                  alt={`bed${i + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* Other Components */}
        <div className="relative md:mt-10 lgl:mt-20 xl:mt-40 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const productData = await res.json();
  return { props: { productData } };
};
