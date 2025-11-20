const HeroSection = () => {
  return (
    <section 
      className="hero-section"
      style={{
        // Sử dụng ảnh từ thư mục public làm nền
        backgroundImage: `url('/banner.png')`,
        // Các thuộc tính CSS để ảnh nền hiển thị đẹp
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative', // Để lớp phủ overlay định vị theo section này
      }}
    >
      {/* --- LỚP PHỦ TỐI MÀU (Overlay) --- */}
      {/* Giúp làm tối ảnh banner để chữ trắng nổi bật hơn */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Màu đen với độ trong suốt 60%
        zIndex: 1
      }}></div>

      <div className="container">
        <div className="hero-content" style={{position: 'relative', zIndex: 2}}>
          <p className="hero-tagline">PHÁ VỠ MỌI GIỚI HẠN</p>
          <h1 className="hero-title">ĐẲNG CẤP <br/> TỪNG CÚ ĐÁNH</h1>
          <p className="hero-desc">
            Khám phá bộ sưu tập vợt, giày và phụ kiện cầu lông cao cấp. 
            Nâng tầm trận đấu của bạn với trang bị chuyên nghiệp.
          </p>
          <button className="btn-main">MUA SẮM NGAY</button>
        </div>
      </div>
      
      {/* Bỏ thẻ <img> cũ đi vì chúng ta đã dùng background-image */}
    </section>
  );
};

export default HeroSection;