import{useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <div>
      <Navbar />
      <div style={{display:"flex"}}>
        <Sidebar setPage={setPage} />
        <div style={{padding:"20px",width:"100%"}}></div>
        {page === "dashboard" && <Dashboard />}
        {page === "products" && <Products />}
        {page==="orders" && <Orders />}
      </div>
    </div>
  );
}

export default App;
