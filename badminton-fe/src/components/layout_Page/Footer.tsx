const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>VỀ CHÚNG TÔI</h4>
            <p style={{marginBottom: '15px'}}>Badminton Shop là điểm đến hàng đầu cho những người đam mê cầu lông. Chúng tôi cam kết mang đến sản phẩm chính hãng với dịch vụ tốt nhất.</p>
            <p><strong>Hotline:</strong> 1900 1000</p>
            <p><strong>Email:</strong> info@badmintonshop.vn</p>
          </div>
          <div>
            <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            <ul>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div>
            <h4>LIÊN KẾT NHANH</h4>
            <ul>
              <li><a href="#">Sản phẩm mới</a></li>
              <li><a href="#">Thương hiệu</a></li>
              <li><a href="#">Khuyến mãi</a></li>
              <li><a href="#">Tin tức</a></li>
            </ul>
          </div>
          <div>
            <h4>ĐỊA CHỈ</h4>
            <p>Tòa nhà ABC, Đường XYZ, Quận 1, TP. Hồ Chí Minh</p>
            <p style={{marginTop: '15px'}}>Theo dõi chúng tôi:</p>
            {/* Các icon mạng xã hội có thể thêm vào đây */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Badminton Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;