// Higher Order Component - A function that takes a component as an argument and returns a new component with enhanced functionality.
const FeatureProduct = (Product) => {
    return (props)=>{
        return (
            <div className="feature-product">
                <label>Featured Beauty Product</label>
                <Product {...props}/>
            </div>
        )
    }

}

export default FeatureProduct;