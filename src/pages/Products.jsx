import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="page-content">
        <h2 className="page-title">Products</h2>
        <div className="products-loading">
          <div className="loader-ring" />
          <p>Loading products...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="page-content">
        <h2 className="page-title">Products</h2>
        <div className="products-error glass-panel">
          <span className="error-icon">⚠</span>
          <p>{error}</p>
        </div>
      </div>
    );

  return (
    <div className="page-content">
      <h2 className="page-title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card glass-panel btn-glow">
            <div className="product-card-image-wrap">
              <img src={product.image} alt={product.title} className="product-card-image" />
            </div>
            <div className="product-card-body">
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-price">AED {product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
