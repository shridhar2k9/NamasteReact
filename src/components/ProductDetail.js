import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useProductDetail from "../utils/useProductdetail";
import useInternetStatus from "../utils/useInternetStatus";

const ProductDetail = () => {
  const { productId } = useParams();

  const { product } = useProductDetail(productId);
  const onlineStatus = useInternetStatus();

  if (product === null) return <Shimmer />;

  if(onlineStatus === false) return <h1>🔴 You are offline. Please check your internet connection.</h1>;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        {/* Image Section */}
        <div className="product-detail-image">
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-images-gallery">
            {product.images && product.images.map((img, index) => (
              <img key={index} src={img} alt={`${product.title}-${index}`} />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          
          <div className="product-rating">
            <span className="rating-score">{product.rating} ⭐</span>
            <span className="availability-status">{product.availabilityStatus}</span>
          </div>

          <p className="product-category">Category: <strong>{product.category}</strong></p>
          <p className="product-brand">Brand: <strong>{product.brand}</strong></p>
          <p className="product-sku">SKU: <strong>{product.sku}</strong></p>

          <div className="product-pricing">
            <div className="price-section">
              <span className="original-price">${product.price}</span>
              <span className="discount">-{product.discountPercentage}%</span>
            </div>
            <span className="final-price">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-meta">
            <div className="meta-item">
              <strong>Stock:</strong> {product.stock} units
            </div>
            <div className="meta-item">
              <strong>Weight:</strong> {product.weight} kg
            </div>
            <div className="meta-item">
              <strong>Dimensions:</strong> {product.dimensions.width}cm × {product.dimensions.height}cm × {product.dimensions.depth}cm
            </div>
          </div>

          <div className="product-policies">
            <div className="policy-item">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </div>
            <div className="policy-item">
              <strong>Shipping:</strong> {product.shippingInformation}
            </div>
            <div className="policy-item">
              <strong>Return Policy:</strong> {product.returnPolicy}
            </div>
            <div className="policy-item">
              <strong>Min Order Qty:</strong> {product.minimumOrderQuantity}
            </div>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews ({product.reviews?.length || 0})</h2>
        <div className="reviews-list">
          {product.reviews && product.reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <span className="reviewer-name">{review.reviewerName}</span>
                <span className="review-rating">{review.rating} ⭐</span>
              </div>
              <p className="review-comment">{review.comment}</p>
              <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
