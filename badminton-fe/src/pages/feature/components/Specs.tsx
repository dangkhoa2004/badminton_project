import { FaRulerHorizontal } from "react-icons/fa";

export interface Spec {
  spec: string;
  value: string;
}

interface SpecsProps {
  specs: Spec[];
}

const styles = {
  section: { padding: "6rem 1.5rem" },
  title: {
    textAlign: "center" as const,
    fontSize: "2.25rem",
    fontWeight: 900,
    marginBottom: "3rem",
  },
  container: {
    maxWidth: "640px",
    margin: "0 auto",
    background: "white",
    borderRadius: "2rem",
    boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5rem",
    transition: "background 0.3s ease",
  },
  spec: { color: "#6b7280", fontWeight: 500 },
  value: { fontWeight: 700 },
};

export default function Specs({ specs }: SpecsProps) {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>
        <FaRulerHorizontal style={{ marginRight: "0.5rem" }} /> Thông số kỹ
        thuật
      </h2>
      <div style={styles.container}>
        {specs.map((s, i) => (
          <div
            key={i}
            style={styles.row}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f8fafc")}
            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
          >
            <span style={styles.spec}>{s.spec}</span>
            <span style={styles.value}>{s.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
