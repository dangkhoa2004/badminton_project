import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  player_level?: string;
  play_style?: string;
  weight?: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container" style={{marginTop: '40px'}}>
      <div className="section-header">
        <h2 className="section-title">KHÁM PHÁ BỘ SƯU TẬP</h2>
        <p className="section-subtitle">Những sản phẩm được yêu thích nhất</p>
      </div>
      
      <div className="grid-layout">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;