import React from "react";
import "./Website.css"; // Import CSS
import ProductCard from "./productCard"; // Import ProductCard

const Website = () => {
  // Array of product details
  const products = [
    {
      imgSrc: "image1.jpg",
      title: "Men's Sneakers",
      shortDescription: "Stylish and breathable running shoes.",
      fullDescription:
        "Walking is a great form of exercise with many health benefits, but wearing the right shoes is key to staying comfortable and injury-free.",
    },
    {
      imgSrc: "image2.jpg",
      title: "Vulcanize Shoes",
      shortDescription: "Luxury and sophistication combined.",
      fullDescription:
        "These shoes combine innovative design with high-quality materials, ensuring style and durability.",
    },
    {
      imgSrc: "image3.jpg",
      title: "Breathable Running Footwear",
      shortDescription: "Enhance your lifestyle with this top-notch product.",
      fullDescription:
        "Make your audience imagine how your shoes will make them feel or how they will enhance their lives.",
    },
    {
      imgSrc: "image4.jpg",
      title: "Graphic Tee",
      shortDescription: "Short Sleeve Graphic Tee Animal Casual.",
      fullDescription:
        "Expect superior material, durability, and comfort, as well as a unique design.",
    },
    {
      imgSrc: "image5.jpg",
      title: "Varsity Jacket",
      shortDescription: "Stylish and warm jackets for all seasons.",
      fullDescription:
        "Step into the season with confidence and style with our premium jackets.",
    },
    {
      imgSrc: "image6.jpg",
      title: "Graphic Kangaroo Pocket Hoodie",
      shortDescription: "Designed to make your life easier.",
      fullDescription:
        "Stay cozy, casual, and effortlessly stylish with our ultra-soft hoodies.",
    },
    {
      imgSrc: "image7.jpg",
      title: "Relaxed Fit Cargo Pants",
      shortDescription: "Perfect for comfort and functionality.",
      fullDescription:
        "Gear up for any adventure with our durable and stylish cargo pants.",
    },
    {
      imgSrc: "image8.jpg",
      title: "Ripstop Wide Cargo Pant",
      shortDescription: "Experience ultimate quality and utility.",
      fullDescription:
        "Engineered for both style and utility, our cargo pants offer the ideal blend of rugged durability and everyday comfort.",
    },
  ];

  return (
    <div id="content">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">My Website</div>
        <ul className="nav-links">
          <li>
            <a href="#home" id="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="About">
              About
            </a>
          </li>
          <li>
            <a href="#services" id="Services">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" id="Contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Our Amazing Products</h1>
        <p>Explore our wide range of products with detailed descriptions.</p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <section className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              shortDescription={product.shortDescription}
              fullDescription={product.fullDescription}
            />
          ))}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Website;
