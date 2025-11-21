import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../../api/index";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  player_level?: string;
  play_style?: string;
  weight?: string;
}

// --- Component con: ProductCard ---
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      style={styles.card}
      className="card-hover-lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <div style={styles.cardImgBox}>
        <img src={product.image} alt={product.name} style={styles.cardImage} />
      </div>
      <div style={styles.cardInfo}>
        <h3 title={product.name} style={styles.productName}>
          {product.name}
        </h3>
        <span style={styles.price}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </span>

        <div style={styles.specsRow}>
          {product.play_style && <span style={styles.badge}>{product.play_style}</span>}
          {product.weight && <span style={styles.badge}>{product.weight}</span>}
          {product.player_level && <span style={styles.badge}>Trình độ: {product.player_level}</span>}
        </div>

        <motion.button
          style={styles.btnCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCartPlus style={{ marginRight: "8px" }} /> THÊM VÀO GIỎ
        </motion.button>
      </div>
    </motion.div>
  );
};

// --- Component chính: ProductList ---
const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi tải danh sách sản phẩm:", err));
  }, []);

  return (
    <div style={styles.container}>
      <style>
        {`
          .card-hover-lift:hover {
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }
        `}
      </style>

      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>KHÁM PHÁ BỘ SƯU TẬP</h2>
        <p style={styles.sectionSubtitle}>Những sản phẩm được yêu thích nhất</p>
      </div>

      <div style={styles.gridLayout}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionHeader: { textAlign: "center" as const, marginBottom: "50px" },
  sectionTitle: { fontSize: "32px", fontWeight: 900, color: "#2d3748", textTransform: "uppercase" as const, marginBottom: "8px" },
  sectionSubtitle: { fontSize: "16px", color: "#718096" },
  gridLayout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column" as const,
  },
  cardImgBox: { height: "280px", overflow: "hidden", borderBottom: "1px solid #f0f4f8", display: "flex", justifyContent: "center" as const, alignItems: "center" as const, backgroundColor: "white" },
  cardImage: { width: "100%", height: "100%", objectFit: "contain" as const, transition: "transform 0.5s ease" },
  cardInfo: { padding: "15px", display: "flex", flexDirection: "column" as const, flexGrow: 1 },
  productName: { fontSize: "17px", fontWeight: 600, color: "#2d3748", marginBottom: "10px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, minHeight: "40px" },
  price: { fontSize: "18px", fontWeight: 800, color: "#3182ce", marginBottom: "15px" },
  specsRow: { display: "flex", gap: "8px", marginBottom: "15px", flexWrap: "wrap" as const },
  badge: { fontSize: "12px", padding: "4px 8px", borderRadius: "4px", backgroundColor: "#f0f4f8", color: "#4a5568", fontWeight: 500 },
  btnCard: {
    marginTop: "auto",
    width: "100%",
    padding: "12px 0",
    border: "none",
    borderRadius: "6px",
    backgroundImage: "linear-gradient(90deg, #3182ce 0%, #2b6cb0 100%)",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
  },
};

export default ProductList;
