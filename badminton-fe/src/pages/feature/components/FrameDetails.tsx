import { motion } from "framer-motion";
import { FaHandRock, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface FrameDetail {
  title: string;
  desc: string;
  image: string;
  reverse: boolean;
  link: string;
}

interface FrameDetailsProps {
  details: FrameDetail[];
}

const styles = {
  section: { padding: "5rem 0", background: "linear-gradient(to bottom, #f1f5f9, #fff)" },
  container: { maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: "5rem" },
  row: (reverse: boolean) => ({ display: "flex", flexDirection: reverse ? "row-reverse" : "row", flexWrap: "wrap" as const, alignItems: "center", gap: "3rem" }),
  image: { flex: "1 1 50%", borderRadius: "2rem", boxShadow: "0 20px 30px rgba(0,0,0,0.2)", width: "100%" },
  text: { flex: "1 1 50%" },
  icon: { color: "#2563eb", fontSize: "2rem", marginBottom: "1rem" },
  title: { fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" },
  desc: { color: "#4b5563", marginBottom: "1.5rem", lineHeight: 1.6 },
  link: { color: "#2563eb", fontWeight: 600, textDecoration: "underline", display: "inline-flex", alignItems: "center" },
  arrow: { marginLeft: "0.5rem" },
};

export default function FrameDetails({ details }: FrameDetailsProps) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {details.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={styles.row(f.reverse)}>
            <img src={f.image} alt={f.title} style={styles.image} />
            <div style={styles.text}>
              <FaHandRock style={styles.icon} />
              <h3 style={styles.title}>{f.title}</h3>
              <p style={styles.desc}>{f.desc}</p>
              <Link to={f.link} style={styles.link}>
                Tìm hiểu thêm <FaArrowRight style={styles.arrow} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
