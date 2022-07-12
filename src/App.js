import "./styles/App.css";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import ProductMain from "./components/ProductMain";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ProductPage />
        {/* <ProductMain /> */}
      </div>
    </div>
  );
}

export default App;
