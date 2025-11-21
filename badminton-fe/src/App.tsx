// src/App.tsx
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Header from './components/layout_Page/Header';
import Footer from './components/layout_Page/Footer';
import './App.css';

// Lưu ý: Xóa HeroSection và ProductList ở đây đi, ta sẽ chuyển nó sang trang Home
import HeroSection from './components/Hero_Section/HeroSection'; 
// import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* 2. Thay nội dung cứng bằng Outlet */}
      {/* Outlet là nơi Router sẽ "bơm" nội dung trang con vào (Home, Login, Booking...) */}
      <main style={{ minHeight: '80vh' }}> 
        <HeroSection/>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;