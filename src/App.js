import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pagecontent from "./components/Pagecontent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Pagecontent />

      <Footer />
    </div>
  );
}

export default App;
