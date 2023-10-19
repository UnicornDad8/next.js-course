"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("click event")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
