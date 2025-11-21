import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* CSS Animation Style Block */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .floating-element {
            animation: float 4s ease-in-out infinite;
          }
          .btn-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15) !important;
          }
        `}
      </style>

      <div style={styles.card}>
        {/* Phần hình ảnh minh họa quả cầu bay (SVG Inline) */}
        <div className="floating-element" style={styles.illustrationBox}>
          {/* Chữ 404 khổng lồ làm nền */}
          <h1 style={styles.errorCodeBackground}>404</h1>

          {/* Icon Cầu lông đơn giản bằng SVG */}
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3182ce"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 10px 10px rgba(49, 130, 206, 0.2))",
            }}
          >
            <path
              d="M12 2C12 2 16 7 16 12C16 14.7614 13.7614 17 11 17C8.23858 17 6 14.7614 6 12C6 7 10 2 12 2Z"
              fill="white"
              strokeWidth="2"
            />
            <path d="M11 17V22" strokeWidth="2" />
            <path d="M9 22H13" strokeWidth="2" />
            <line x1="6" y1="12" x2="16" y2="12" stroke="#e2e8f0" />
            <line x1="7" y1="9" x2="15" y2="9" stroke="#e2e8f0" />
            <line x1="8" y1="6" x2="14" y2="6" stroke="#e2e8f0" />
          </svg>
        </div>

        <h2 style={styles.title}>Ôi hỏng! Cầu bay ra ngoài sân rồi.</h2>

        <p style={styles.description}>
          Có vẻ như đường cầu này hơi mạnh tay. <br />
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị trọng tài bắt lỗi.
        </p>

        <div style={styles.buttonGroup}>
          {/* Nút Quay lại */}
          <button
            className="btn-hover"
            onClick={() => navigate(-1)}
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            <FaArrowLeft style={{ marginRight: "8px" }} /> Quay lại
          </button>

          {/* Nút Về trang chủ */}
          <Link
            className="btn-hover"
            to="/"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            <FaHome style={{ marginRight: "8px" }} /> Về Trang Chủ
          </Link>
        </div>
      </div>

      {/* Footer nhỏ trang trí */}
      <div style={styles.footerText}>Error Code: 404_BADMINTON_OUT</div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    // Nền Gradient xanh nhẹ hiện đại
    background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: "20px",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    padding: "50px 40px",
    borderRadius: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Hiệu ứng kính mờ nhẹ
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    textAlign: "center" as const,
    position: "relative" as const,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.8)",
  },
  illustrationBox: {
    position: "relative" as const,
    height: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  errorCodeBackground: {
    position: "absolute" as const,
    fontSize: "180px",
    fontWeight: "900",
    color: "#f1f5f9", // Màu chữ chìm rất nhạt
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
    zIndex: 1,
    userSelect: "none" as const,
  },
  title: {
    fontSize: "28px",
    color: "#2d3748",
    fontWeight: "800",
    marginBottom: "12px",
    position: "relative" as const,
    zIndex: 2,
  },
  description: {
    color: "#718096",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "32px",
    position: "relative" as const,
    zIndex: 2,
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    position: "relative" as const,
    zIndex: 2,
    flexWrap: "wrap" as const, // Để không bị vỡ trên mobile
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 28px",
    borderRadius: "50px", // Bo tròn kiểu Pill Shape
    fontWeight: "600",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  },
  primaryButton: {
    backgroundColor: "#3182ce",
    color: "white",
    background: "linear-gradient(90deg, #3182ce 0%, #4299e1 100%)", // Gradient cho nút
  },
  secondaryButton: {
    backgroundColor: "white",
    color: "#4a5568",
    border: "1px solid #e2e8f0",
  },
  footerText: {
    marginTop: "30px",
    fontSize: "12px",
    color: "#a0aec0",
    letterSpacing: "1px",
    fontFamily: "monospace",
  },
};

export default NotFound;
