import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <SearchForm />
        <h2 className="text-white header-title ls-2">
          Welcome to Hary Cafe
        </h2>
        <p className="text-white my-3 ls-1">
          We take pride in presenting the finest collection of culinary delights
          to meet your needs. With our commitment to delivering high-quality
          products and the best customer service, Hary Cafe stands as the
          preferred destination for connoisseurs of Quality Dining! Feel the
          essence of our dedication as we bring you a culinary experience like
          no other.
        </p>
      </div>
    </header>
  );
};

export default Header;
