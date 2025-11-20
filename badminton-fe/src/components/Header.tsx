import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  // Giả lập số lượng sản phẩm trong giỏ hàng
  const cartItemCount = 3; 

  return (
    <header>
      <div className="container nav-wrapper">
        {/* Logo */}
        <a href="#" className="logo">BAD<span>MINTON</span></a>

        {/* Menu */}
        <nav>
          <ul className="nav-links">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Vợt cầu lông</a></li>
            <li><a href="#">Giày</a></li>
            <li><a href="#">Thương hiệu</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
           <button className="icon-btn">
              <FaSearch size={20} />
           </button>
           <button className="icon-btn" style={{position: 'relative'}}>
              <FaShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  backgroundColor: '#000', // Đen
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
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