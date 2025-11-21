import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  // Giả lập số lượng sản phẩm
  const cartItemCount = 3;

  return (
    <header style={styles.header}>
      {/* --- CSS Hover Styles --- */}
      <style>
        {`
          .nav-link-hover:hover {
            color: #3182ce !important; /* Primary Accent Blue */
            transform: translateY(-2px);
          }
          .icon-btn-hover:hover {
            color: #3182ce !important;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="container nav-wrapper" style={styles.navWrapper}>
        {/* --- LOGO --- */}
        <a href="/" style={styles.logoLink}>
          <img
            src="/logo.png" // Đường dẫn tuyệt đối từ thư mục public
            alt="VNB Sports Logo"
            style={styles.logoImg}
          />
        </a>

        {/* --- MENU --- */}
        <nav>
          <ul className="nav-links" style={styles.navLinks}>
            <li style={styles.navItem}>
              <a href="/" style={styles.navLink} className="nav-link-hover">
                Shop
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="/products" style={styles.navLink} className="nav-link-hover">
                Vợt cầu lông
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="/shoes" style={styles.navLink} className="nav-link-hover">
                Giày
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="/contact" style={styles.navLink} className="nav-link-hover">
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>

        {/* --- ACTIONS --- */}
        <div style={styles.headerActions}>
          <button className="icon-btn icon-btn-hover" style={styles.iconBtn}>
            <FaSearch size={20} />
          </button>
          
          <button className="icon-btn icon-btn-hover" style={{ ...styles.iconBtn, position: "relative" as const }}>
            <FaShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span style={styles.cartBadge}>
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// --- STYLES ---
const styles = {
  header: {
    // Background và Shadow để Header nổi bật
    backgroundColor: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    position: 'sticky' as const, // Giữ header cố định
    top: 0,
    zIndex: 100, // Đảm bảo header luôn ở trên cùng
    transition: 'all 0.3s ease',
  },
  navWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  logoLink: {
    display: 'block',
  },
  logoImg: {
    height: "45px", // Chiều cao hơi giảm xuống để trông tinh tế hơn
    width: "auto",
    objectFit: "contain" as const,
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '30px',
  },
  navItem: {
    // Để giữ vị trí cho hover effect
    transition: 'all 0.3s ease',
  },
  navLink: {
    color: '#4a5568', // Màu chữ xám đen
    textDecoration: 'none',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    fontSize: '15px',
    transition: 'color 0.3s ease, transform 0.3s ease',
    display: 'inline-block',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  iconBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#2d3748',
    padding: '8px',
    transition: 'all 0.3s ease',
  },
  cartBadge: {
    position: "absolute" as const,
    top: "-5px",
    right: "-5px",
    backgroundColor: "#3182ce", // Màu xanh chủ đạo
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    boxShadow: '0 2px 5px rgba(49, 130, 206, 0.5)',
  },
};

export default Header;