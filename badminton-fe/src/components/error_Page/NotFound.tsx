// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
// Bỏ import useRouteError nếu không muốn dùng thông tin lỗi chi tiết
// import { useRouteError } from "react-router-dom"; 

const NotFound = () => {
  // XÓA hoặc Comment dòng này để không in lỗi đỏ ra Console nữa
  // const error: any = useRouteError();
  // console.error(error); 

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Ôi hỏng! Cầu bay ra ngoài sân rồi.</h2>
        
        <p style={styles.description}>
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          {/* XÓA dòng hiển thị lỗi kỹ thuật dưới đây nếu bạn muốn giao diện sạch sẽ */}
          {/* <br /> {error?.statusText || error?.message} */}
        </p>

        <Link to="/" style={styles.button}>
          Quay về Trang Chủ
        </Link>
      </div>
    </div>
  );
};

// ... (Giữ nguyên phần styles bên dưới)
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center" as const,
  },
  content: {
    maxWidth: "600px",
    padding: "40px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  errorCode: {
    fontSize: "120px",
    margin: "0",
    fontWeight: "900",
    color: "#e2e8f0", 
    lineHeight: "1",
  },
  title: {
    fontSize: "24px",
    color: "#2d3748",
    marginTop: "-20px", 
    marginBottom: "16px",
    fontWeight: "bold",
  },
  description: {
    color: "#718096",
    marginBottom: "32px",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#3182ce",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "600",
    transition: "background 0.3s",
  },
};

export default NotFound;