import React from "react";
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
  console.log(productData);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        {/* Carousel Implementation */}
        <div className="relative">
          <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={3000}>
            <div><img src="/amazon assets/bed1.png" alt="bed1" /></div>
            <div><img src="/amazon assets/bed2.png" alt="bed2" /></div>
            <div><img src="/amazon assets/bed3.png" alt="bed3" /></div>
            <div><img src="/amazon assets/bed4.png" alt="bed4" /></div>
            <div><img src="/amazon assets/bed5.png" alt="bed5" /></div>
            <div><img src="/amazon assets/bed6.png" alt="bed6" /></div>
            <div><img src="/amazon assets/bed7.png" alt="bed7" /></div>
            <div><img src="/amazon assets/bed8.png" alt="bed8" /></div>
            <div><img src="/amazon assets/bed9.png" alt="bed9" /></div>
            <div><img src="/amazon assets/bed10.png" alt="bed10" /></div>
            <div><img src="/amazon assets/bed11.png" alt="bed11" /></div>
            <div><img src="/amazon assets/bed12.png" alt="bed12" /></div>
            <div><img src="/amazon assets/bed13.png" alt="bed13" /></div>
            <div><img src="/amazon assets/bed14.png" alt="bed14" /></div>
            <div><img src="/amazon assets/bed16.png" alt="bed16" /></div>
            <div><img src="/amazon assets/bed17.png" alt="bed17" /></div>
            <div><img src="/amazon assets/bed18.png" alt="bed18" /></div>
          </Carousel>
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
