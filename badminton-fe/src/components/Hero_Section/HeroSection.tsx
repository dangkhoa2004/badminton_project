import { FaArrowRight, FaShoppingBag } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      {/* --- CSS Animation Styles --- */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          
          .btn-hero:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(49, 130, 206, 0.4) !important;
          }
        `}
      </style>

      {/* --- BACKGROUND IMAGE --- */}
      <div style={styles.backgroundImage}></div>

      {/* --- GRADIENT OVERLAY --- */}
      {/* Tạo lớp phủ gradient từ đen đậm sang trong suốt để làm nổi bật chữ bên trái */}
      <div style={styles.overlay}></div>

      <div className="container" style={styles.container}>
        <div style={styles.contentWrapper}>
          {/* Tagline nhỏ phía trên */}
          <p className="animate-fade-up" style={styles.tagline}>
            <span style={styles.accentLine}></span>
            PHÁ VỠ MỌI GIỚI HẠN
          </p>

          {/* Tiêu đề chính */}
          <h1 className="animate-fade-up delay-1" style={styles.title}>
            ĐẲNG CẤP <br />
            <span style={styles.highlightText}>TỪNG CÚ ĐÁNH</span>
          </h1>

          {/* Mô tả */}
          <p className="animate-fade-up delay-2" style={styles.description}>
            Khám phá bộ sưu tập vợt, giày và phụ kiện cầu lông cao cấp. Nâng tầm
            trận đấu của bạn với trang bị chuyên nghiệp chuẩn quốc tế.
          </p>

          {/* Nút bấm hành động */}
          <div
            className="animate-fade-up delay-3"
            style={{ marginTop: "32px" }}
          >
            <button className="btn-hero" style={styles.button}>
              <FaShoppingBag style={{ marginRight: "10px" }} />
              MUA SẮM NGAY
              <FaArrowRight style={{ marginLeft: "10px", fontSize: "14px" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- STYLES ---
const styles = {
heroSection: {
    position: 'relative' as const, // BẮT BUỘC PHẢI CÓ
    height: '85vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    color: 'white',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    // Xóa background-color nếu có để tránh che mất ảnh
  },
  backgroundImage: {
    position: 'absolute' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `url('/banner.png')`, // Đảm bảo file nằm trong thư mục public
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0, // SỬA: Đổi từ -2 thành 0
  },
  overlay: {
    position: 'absolute' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(75deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 100%)',
    zIndex: 1, // SỬA: Đổi từ -1 thành 1 (nằm đè lên ảnh)
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative' as const,
    zIndex: 2, // SỬA: Đảm bảo nội dung nổi lên trên cùng
  },
  contentWrapper: {
    maxWidth: "650px", // Giới hạn độ rộng của khối chữ để dễ đọc
  },
  tagline: {
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase" as const,
    letterSpacing: "4px",
    color: "#63b3ed", // Màu xanh dương sáng (Accent color)
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    opacity: 0, // Để animation lo việc hiển thị
  },
  accentLine: {
    display: "inline-block",
    width: "40px",
    height: "2px",
    backgroundColor: "#63b3ed",
    marginRight: "12px",
  },
  title: {
    fontSize: "clamp(40px, 5vw, 64px)", // Responsive font size (tối thiểu 40, tối đa 64)
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "24px",
    opacity: 0,
    textShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  highlightText: {
    color: "transparent",
    // Hiệu ứng chữ Gradient (Màu trắng chuyển sang xanh nhạt)
    backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a0aec0 100%)",
    WebkitBackgroundClip: "text",
    display: "inline-block",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#e2e8f0", // Màu xám trắng dịu mắt
    marginBottom: "32px",
    maxWidth: "90%",
    opacity: 0,
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    padding: "16px 36px",
    fontSize: "16px",
    fontWeight: "700",
    color: "white",
    backgroundColor: "#3182ce",
    backgroundImage: "linear-gradient(90deg, #3182ce 0%, #2b6cb0 100%)",
    border: "none",
    borderRadius: "50px", // Pill shape
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(49, 130, 206, 0.3)",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
  },
};

export default HeroSection;
