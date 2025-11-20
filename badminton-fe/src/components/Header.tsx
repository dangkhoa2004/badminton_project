const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          Hotline: 0909.123.456 | Miễn phí vận chuyển đơn hàng từ 500k
        </div>
      </div>
      <div className="header-main">
        <div className="container nav-container">
          <div className="logo">BADMINTON SHOP</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#">TRANG CHỦ</a></li>
              <li><a href="#">VỢT CẦU LÔNG</a></li>
              <li><a href="#">GIÀY</a></li>
              <li><a href="#">QUẦN ÁO</a></li>
              <li><a href="#">PHỤ KIỆN</a></li>
            </ul>
          </nav>
          <div>
            <button className="btn-primary" style={{padding: '8px 15px', fontSize: '0.9rem'}}>Giỏ hàng (0)</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;