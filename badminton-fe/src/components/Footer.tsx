const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>VỀ CHÚNG TÔI</h3>
            <p>Chuyên cung cấp vợt cầu lông, giày, quần áo chính hãng với giá tốt nhất thị trường. Cam kết chất lượng 100%.</p>
          </div>
          <div>
            <h3>CHÍNH SÁCH</h3>
            <ul>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo hành</li>
              <li>Hướng dẫn thanh toán</li>
              <li>Kiểm tra đơn hàng</li>
            </ul>
          </div>
          <div>
            <h3>LIÊN HỆ</h3>
            <ul>
              <li>Địa chỉ: 123 Cầu Giấy, Hà Nội</li>
              <li>Email: support@badminton.vn</li>
              <li>Hotline: 1900 1000</li>
            </ul>
          </div>
        </div>
        <hr style={{borderColor: '#334155', margin: '20px 0'}} />
        <div style={{textAlign: 'center', fontSize: '0.9rem'}}>
          © 2024 Badminton Shop All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;