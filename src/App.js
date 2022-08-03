import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
        <Home />
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
