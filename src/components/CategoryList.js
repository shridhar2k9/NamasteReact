import React, { useEffect, useState } from "react";
import ProductByCategory from "./ProductByCategory";

const CategoryList = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState({index:null,category:null});
  const [categoryProducts, setCategoryProducts] = useState([]);



  const getCategoryProducts = async(category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    setCategoryProducts(data);
  }

  useEffect(()=>{
    getCategoryProducts(openIndex.category);
  },[openIndex])

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold p-4 border-b">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="border-b">
              <span className="font-medium">{category}</span>
              {/* Here toggleAccordion was controlled by productByCategory using Level up state technique and productByCategory is Uncontrolled component */}
                <ProductByCategory  toggleAccordion={() => setOpenIndex({ index, category })} />
            {openIndex.index === index && (
              <div className="p-4 bg-gray-50 text-sm text-gray-600">
                {/* Replace this with category-specific content */}
                Products under {category} will be listed here...
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categoryProducts.products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Thumbnail */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-green-600 font-bold">
                ${product.price}
              </span>
              <span className="text-yellow-500 text-sm">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Brand & Category */}
            <div className="mt-2 text-xs text-gray-500">
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
            </div>

            {/* Stock & Availability */}
            <div className="mt-2 text-xs text-gray-500">
              <p>Stock: {product.stock}</p>
              <p>Status: {product.availabilityStatus}</p>
            </div>

            {/* Action Button */}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
