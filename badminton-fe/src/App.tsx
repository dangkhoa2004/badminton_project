import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;