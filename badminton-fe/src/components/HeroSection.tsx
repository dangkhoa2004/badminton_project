const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-tagline">PHÁ VỠ MỌI GIỚI HẠN</p>
          <h1 className="hero-title">ĐẲNG CẤP <br/> TỪNG CÚ ĐÁNH</h1>
          <p className="hero-desc">
            Khám phá bộ sưu tập vợt, giày và phụ kiện cầu lông cao cấp. Nâng tầm trận đấu của bạn.
          </p>
          <button className="btn-main">MUA SẮM NGAY</button>
        </div>
      </div>
      {/* Nếu có ảnh banner, có thể thêm vào đây, ví dụ: */}
      {/* <img src="/path/to/your/racket-banner.png" alt="Badminton gear" style={{position: 'absolute', right: '10%', bottom: '0', height: '100%', objectFit: 'cover', zIndex: 1}}/> */}
      {/* Bạn có thể tự thay đổi ảnh placeholder.co bằng ảnh thật của mình */}
      <img 
        src="https://placehold.co/800x600/1a1a1a/ffffff?text=Premium+Rackets" 
        alt="Racket Banner" 
        style={{
          position: 'absolute',
          right: '0', /* Đẩy ảnh sang phải */
          bottom: '0',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: 'grayscale(100%) brightness(1.2)' /* Hiệu ứng ảnh xám */
        }}
      />
    </section>
  );
};

export default HeroSection;