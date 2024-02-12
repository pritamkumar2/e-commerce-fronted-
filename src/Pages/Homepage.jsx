import React, { useState, useEffect } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [watches, setWatches] = useState([]);
  const [tshirts, setTshirts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [womenTops, setWomenTops] = useState([]);
  const [womenJeans, setWomenJeans] = useState([]);
  const [mensJeans, setMensJeans] = useState([]);
  const [womenDresses, setWomenDresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://localhost:5454/api/products");
        let allProducts = response.data.content;
        const totalPages = response.data.totalPages;

        for (let page = 2; page <= totalPages; page++) {
          response = await axios.get(
            `http://localhost:5454/api/products?pageNumber=${page}`
          );
          allProducts = allProducts.concat(response.data.content);
        }

        setProducts(allProducts);
  
        const menShoes = allProducts.filter(
          (product) => product.category.name === "Shoes"
        );
        const tshirtProducts = allProducts.filter(
          (product) => product.category.name === "t-shirts"
        );
        const watchProducts = allProducts.filter(
          (product) => product.category.name === "Watch"
        );
        const womenTops = allProducts.filter(
          (product) => product.category.name === "top"
        );
        const womenJeans = allProducts.filter(
          (product) => product.category.name === "women_jeans"
        );
        const mensJeans = allProducts.filter(
          (product) => product.category.name === "men_jeans"
        );
        const womenDresses = allProducts.filter(
          (product) => product.category.name === "women_dress"
        );

        setShoes(menShoes);
        setTshirts(tshirtProducts);
        setWatches(watchProducts);
        setWomenTops(womenTops);
        setWomenJeans(womenJeans);
        setMensJeans(mensJeans);
        setWomenDresses(womenDresses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="  mt-24 ">
      <HomeCarousel images={homeCarouselData} />
      <div className="space-y-10 py-20">
        {watches.length > 0 && (
          <HomeProductSection data={watches} section={"Men's Watches"} />
        )}
        {shoes.length > 0 && (
          <HomeProductSection data={shoes} section={"Men's Shoes"} />
        )}
        {tshirts.length > 0 && (
          <HomeProductSection data={tshirts} section={"Men's T-shirts"} />
        )}
        {womenTops.length > 0 && (
          <HomeProductSection data={womenTops} section={"Women's Tops"} />
        )}
        {womenJeans.length > 0 && (
          <HomeProductSection data={womenJeans} section={"Women's Jeans"} />
        )}
        {mensJeans.length > 0 && (
          <HomeProductSection data={mensJeans} section={"Men's Jeans"} />
        )}
        {womenDresses.length > 0 && (
          <HomeProductSection data={womenDresses} section={"Women's Dresses"} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
