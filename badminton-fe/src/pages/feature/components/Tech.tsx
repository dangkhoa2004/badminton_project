import { motion } from "framer-motion";
import React from "react";

export interface TechFeature {
  icon: React.ComponentType<{ size?: string | number; color?: string }>;
  title: string;
  desc: string;
}

interface TechProps {
  features: TechFeature[];
}

const styles = {
  section: { padding: "6rem 1.5rem" },
  sectionTitle: {
    textAlign: "center" as const,
    fontSize: "2.25rem",
    fontWeight: 900,
    marginBottom: "3.5rem",
  },
  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2.5rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  techCard: {
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
    borderRadius: "2rem",
    boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    transition: "transform 0.3s ease",
  },
  icon: { color: "#2563eb", marginBottom: "1.25rem", fontSize: "2.5rem" },
  title: { fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem" },
  desc: { color: "#4b5563", lineHeight: 1.5 },
};

export default function Tech({ features }: TechProps) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Công nghệ vượt trội</h2>
      <div style={styles.techGrid}>
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12, scale: 1.02 }}
            style={styles.techCard}
          >
            <f.icon size={42} style={styles.icon} />
            <h3 style={styles.title}>{f.title}</h3>
            <p style={styles.desc}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
