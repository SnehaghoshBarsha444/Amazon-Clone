import React, { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";
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

    right?.addEventListener("click", function(event) {
      const content = document.querySelector(".slide-carousel");
      content.scrollLeft += 1100;
      event.preventDefault();
    });

    left?.addEventListener("click", function(event) {
      const content = document.querySelector(".slide-carousel");
      content.scrollLeft -= 1100;
      event.preventDefault();
    });
  }, []);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        {/* Carousel Implementation */}
        <div className="relative carousel">
          <h1 className="carousel-head">Upto 45 % off | Beds and mattresses</h1>
          <div className="left-btn"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="right-btn"><i className="fa-solid fa-chevron-right"></i></div>
          <ul className="slide-carousel">
            <li><img src="/amazon assets/bed1.png" className="slide-img" alt="bed1" /></li>
            <li><img src="/amazon assets/bed2.png" className="slide-img" alt="bed2" /></li>
            <li><img src="/amazon assets/bed3.png" className="slide-img" alt="bed3" /></li>
            <li><img src="/amazon assets/bed4.png" className="slide-img" alt="bed4" /></li>
            <li><img src="/amazon assets/bed5.png" className="slide-img" alt="bed5" /></li>
            <li><img src="/amazon assets/bed6.png" className="slide-img" alt="bed6" /></li>
            <li><img src="/amazon assets/bed7.png" className="slide-img" alt="bed7" /></li>
            <li><img src="/amazon assets/bed8.png" className="slide-img" alt="bed8" /></li>
            <li><img src="/amazon assets/bed9.png" className="slide-img" alt="bed9" /></li>
            <li><img src="/amazon assets/bed10.png" className="slide-img" alt="bed10" /></li>
            <li><img src="/amazon assets/bed11.png" className="slide-img" alt="bed11" /></li>
            <li><img src="/amazon assets/bed12.png" className="slide-img" alt="bed12" /></li>
            <li><img src="/amazon assets/bed13.png" className="slide-img" alt="bed13" /></li>
            <li><img src="/amazon assets/bed14.png" className="slide-img" alt="bed14" /></li>
            <li><img src="/amazon assets/bed16.png" className="slide-img" alt="bed16" /></li>
            <li><img src="/amazon assets/bed17.png" className="slide-img" alt="bed17" /></li>
            <li><img src="/amazon assets/bed18.png" className="slide-img" alt="bed18" /></li>
          </ul>
        </div>
        {/* Other Components */}
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
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
