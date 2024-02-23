import Store from "./components/Store"
import Stepper from "./components/Stepper"
import "./App.css"
import ProductDetails from "./components/OrderProduct";
function App() {

  const product ={
      id: 1,
      imageUrl: "/store.jpg",
      title: "General Practice Guide 3rd Edition",
      author: "Dr Amritesh Kumar",
      seller: "HCTM",
      price: 409,
    }
    // Add more products as needed
  
  return (
    <div className="order-shift">
      <h1 className="order-heading">Order Id : 2334@3dfk$</h1>
      <div className="main">
        <ProductDetails product={product}/>
        <Stepper />
      </div>
    </div>
  );
}

export default App
