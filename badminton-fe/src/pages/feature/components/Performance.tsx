import { FaCheckDouble } from "react-icons/fa";

interface PerformanceProps {
  quote: string;
  author: string;
}

const styles = {
  section: { background: "#020617", color: "white", textAlign: "center" as const, padding: "6rem 1.5rem" },
  icon: { fontSize: "4rem", color: "#60a5fa", marginBottom: "2rem" },
  text: { fontSize: "1.5rem", fontStyle: "italic", maxWidth: "48rem", margin: "0 auto 1rem", lineHeight: 1.6 },
  author: { color: "#f97316", fontWeight: 700 },
};

export default function Performance({ quote, author }: PerformanceProps) {
  return (
    <section style={styles.section}>
      <FaCheckDouble style={styles.icon} />
      <p style={styles.text}>{quote}</p>
      <span style={styles.author}>{author}</span>
    </section>
  );
}
