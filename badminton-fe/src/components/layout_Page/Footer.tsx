import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* --- CSS Hover Styles --- */}
      <style>
        {`
          .footer-link-hover:hover {
            color: #63b3ed !important; /* Accent color on link hover */
          }
          .social-icon-hover:hover {
            color: #63b3ed !important;
            transform: translateY(-2px);
          }
        `}
      </style>
      
      <div className="container" style={styles.container}>
        <div className="footer-grid" style={styles.footerGrid}>
          {/* Cột 1: VỀ CHÚNG TÔI */}
          <div style={styles.column}>
            <h4 style={styles.heading}>VỀ CHÚNG TÔI</h4>
            <p style={{marginBottom: '15px'}}>Badminton Shop là điểm đến hàng đầu cho những người đam mê cầu lông. Chúng tôi cam kết mang đến sản phẩm chính hãng với dịch vụ tốt nhất.</p>
            <p><strong>Hotline:</strong> <a href="tel:19001000" style={styles.contactLink}>1900 1000</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@badmintonshop.vn" style={styles.contactLink}>info@badmintonshop.vn</a></p>
          </div>
          
          {/* Cột 2: HỖ TRỢ KHÁCH HÀNG */}
          <div style={styles.column}>
            <h4 style={styles.heading}>HỖ TRỢ KHÁCH HÀNG</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Hướng dẫn mua hàng</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Chính sách giao hàng</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Chính sách đổi trả</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          
          {/* Cột 3: LIÊN KẾT NHANH */}
          <div style={styles.column}>
            <h4 style={styles.heading}>LIÊN KẾT NHANH</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Sản phẩm mới</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Thương hiệu</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Khuyến mãi</a></li>
              <li style={styles.li}><a href="#" style={styles.link} className="footer-link-hover">Tin tức</a></li>
            </ul>
          </div>
          
          {/* Cột 4: ĐỊA CHỈ & MẠNG XÃ HỘI */}
          <div style={styles.column}>
            <h4 style={styles.heading}>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <p style={{marginBottom: '15px'}}>Tòa nhà ABC, Đường XYZ, Quận 1, TP. Hồ Chí Minh</p>
            <p style={{marginTop: '15px'}}>Theo dõi chúng tôi:</p>
            <div style={styles.socialContainer}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <FaFacebookSquare style={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <FaInstagram style={styles.socialIcon} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-hover">
                <FaYoutube style={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom (Copyright) */}
        <div className="footer-bottom" style={styles.footerBottom}>
          <p>&copy; {currentYear} Badminton Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- STYLES ---
const styles = {
  footer: {
    // Nền Dark Mode chuyên nghiệp
    backgroundColor: '#1a202c', 
    color: '#cbd5e0', 
    padding: '60px 0 20px',
    fontSize: '15px',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  container: {
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // Responsive grid
    gap: '30px',
    marginBottom: '40px',
  },
  column: {
    // Căn chỉnh nội dung cột
  },
  heading: {
    fontSize: '17px',
    fontWeight: '800',
    color: '#63b3ed', // Màu Accent (Xanh sáng)
    textTransform: 'uppercase' as const,
    marginBottom: '25px',
    letterSpacing: '1px',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  li: {
    marginBottom: '10px',
  },
  link: {
    color: '#cbd5e0',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  contactLink: {
    color: '#cbd5e0',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  socialContainer: {
    display: 'flex',
    gap: '15px',
    marginTop: '15px',
  },
  socialIcon: {
    fontSize: '28px',
    color: '#a0aec0',
    transition: 'all 0.3s ease',
  },
  footerBottom: {
    textAlign: 'center' as const,
    paddingTop: '20px',
    marginTop: '20px',
    borderTop: '1px solid #2d3748', // Đường phân cách mỏng
    fontSize: '14px',
    color: '#718096',
  },
};

export default Footer;