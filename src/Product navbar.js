import React, { useState } from "react";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const loadContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div>
            <h1>Welcome to Our Website</h1>
            <p>
              This is the homepage. Here you can introduce your website and its
              purpose.
            </p>
          </div>
        );
      case "about":
        return (
          <div>
            <h1>About Us</h1>
            <p>
              Welcome to Our Amazing Products, your ultimate destination for
              discovering top-quality products that fit your style and needs.
              Our mission is to bring you the best in fashion, footwear,
              accessories, and more, all carefully selected to ensure
              exceptional value and satisfaction.
            </p>
          </div>
        );
      case "services":
        return (
          <div>
            <h1>Our Services</h1>
            <p>
              At Amazing Products, we offer more than just products—we provide a
              seamless shopping experience with services designed to make your
              journey easier and more enjoyable.
            </p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h1>Contact Us</h1>
            <p>Get in touch with us. We're here to help you.</p>
          </div>
        );
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div>
      {/* Navigation Links */}
      <nav className="nav-links">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("about");
          }}
        >
          About
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("services");
          }}
        >
          Services
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("contact");
          }}
        >
          Contact
        </a>
      </nav>

      {/* Content Section */}
      <div id="content">{loadContent()}</div>
    </div>
  );
};

export default Navigation;
