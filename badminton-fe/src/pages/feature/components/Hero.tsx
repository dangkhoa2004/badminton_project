import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

export interface Product {
  name: string;
  tagline: string;
  price: string;
  oldPrice: string;
  rating: number;
  sold: number;
  image: string;
  link: string;
}

interface HeroProps {
  product: Product;
}

const styles = {
  heroSection: {
    position: "relative" as const,
    overflow: "hidden" as const,
    background: "linear-gradient(to bottom right, #020617, #0f172a, #1e293b)",
    color: "white",
    padding: "7rem 1.5rem",
  },
  heroNoise: {
    position: "absolute" as const,
    inset: 0,
    backgroundImage: "url('/noise.png')",
    opacity: 0.1,
  },
  heroContainer: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3.5rem",
    alignItems: "center",
    position: "relative" as const,
  },
  badge: {
    display: "inline-block",
    marginBottom: "1rem",
    padding: "0.25rem 1rem",
    borderRadius: "9999px",
    backgroundColor: "rgba(59,130,246,0.2)",
    color: "#60a5fa",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
  },
  heroTitle: { fontSize: "3rem", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 },
  heroTagline: { color: "#d1d5db", fontSize: "1.125rem", marginBottom: "1.5rem", lineHeight: 1.6 },
  priceWrapper: { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" },
  price: { fontSize: "2.25rem", fontWeight: 800, color: "#f97316" },
  oldPrice: { textDecoration: "line-through", color: "#9ca3af", fontSize: "1.125rem" },
  rating: { display: "flex", alignItems: "center", gap: "0.5rem", color: "#facc15", marginBottom: "1.5rem" },
  ratingText: { color: "#d1d5db", fontSize: "0.875rem" },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 2.5rem",
    borderRadius: "9999px",
    background: "linear-gradient(to right, #2563eb, #1d4ed8)",
    fontWeight: 700,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    color: "white",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  heroImage: { maxHeight: "480px", margin: "0 auto", boxShadow: "0 25px 40px rgba(0,0,0,0.6)" },
};

export default function Hero({ product }: HeroProps) {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroNoise}></div>
      <div style={styles.heroContainer}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span style={styles.badge}>PREMIUM BADMINTON GEAR</span>
          <h1 style={styles.heroTitle}>{product.name}</h1>
          <p style={styles.heroTagline}>{product.tagline}</p>
          <div style={styles.priceWrapper}>
            <div style={styles.price}>{product.price}</div>
            <div style={styles.oldPrice}>{product.oldPrice}</div>
          </div>
          <div style={styles.rating}>
            {[...Array(5)].map((_, i) => (<FaStar key={i} />))}
            <span style={styles.ratingText}>{product.rating} / 5 • Đã bán {product.sold}</span>
          </div>
          <Link to={product.link} style={styles.ctaButton}>
            Đặt hàng ngay <FaArrowRight />
          </Link>
        </motion.div>
        <motion.img
          src={product.image}
          alt={product.name}
          style={styles.heroImage}
          initial={{ scale: 0.9, rotate: -5, opacity: 0 }}
          animate={{ scale: 1, rotate: 3, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
