import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  // Giả lập số lượng sản phẩm
  const cartItemCount = 3;

  return (
    <header>
      <div className="container nav-wrapper">
        {/* --- THAY ĐỔI Ở ĐÂY: Dùng thẻ img để hiển thị logo --- */}
        <a href="/" className="logo">
          <img
            src="/logo.png" // Đường dẫn tuyệt đối từ thư mục public
            alt="VNB Sports Logo"
            style={{ height: "50px", width: "auto", objectFit: "contain" }} // Điều chỉnh chiều cao phù hợp
          />
        </a>
        {/* ---------------------------------------------------- */}

        {/* Menu (Giữ nguyên) */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/products">Vợt cầu lông</a>
            </li>
            <li>
              <a href="/shoes">Giày</a>
            </li>
            <li>
              <a href="/contact">Liên hệ</a>
            </li>
          </ul>
        </nav>

        {/* Actions (Giữ nguyên) */}
        <div className="header-actions">
          {/* ... code icon giỏ hàng giữ nguyên ... */}
          <button className="icon-btn">
            <FaSearch size={20} />
          </button>
          <button className="icon-btn" style={{ position: "relative" }}>
            <FaShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#000",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
