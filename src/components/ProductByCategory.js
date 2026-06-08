import React from "react";

const ProductByCategory = ({toggleAccordion}) => {
  return (
    <div>
      <button className="w-full flex justify-between items-center p-4 text-left focus:outline-none" onClick={toggleAccordion}>
        <svg
                className={`w-5 h-5 transform transition-transform duration-200`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
      </button>
    
    </div>
  );
};

export default ProductByCategory;
