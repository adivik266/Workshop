import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      <button className=''>Button</button>
      <Navbar />
      <Header />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
