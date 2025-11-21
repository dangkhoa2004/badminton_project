import { Link } from "react-router-dom";

interface FinalCTAProps {
  link: string;
  text: string;
}

const styles = {
  section: { padding: "5rem 1.5rem", textAlign: "center" as const, background: "linear-gradient(to right, #2563eb, #1e40af)", color: "white" },
  title: { fontSize: "2.25rem", fontWeight: 900, marginBottom: "2rem" },
  button: { display: "inline-block", padding: "1.25rem 3rem", borderRadius: "9999px", fontWeight: 700, background: "white", color: "#1e40af", boxShadow: "0 20px 30px rgba(0,0,0,0.2)", textDecoration: "none", transition: "transform 0.3s ease" },
};

export default function FinalCTA({ link, text }: FinalCTAProps) {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{text}</h2>
      <Link to={link} style={styles.button}>
        Mua ngay hôm nay
      </Link>
    </section>
  );
}
