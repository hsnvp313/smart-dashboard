import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  const [page, setPage] = useState("dashboard");
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-body">
        <Sidebar setPage={setPage} page={page} />
        <main className="app-main">
          {page === "dashboard" && <Dashboard />}
          {page === "products" && <Products />}
          {page === "orders" && <Orders />}
        </main>
      </div>
    </div>
  );
}

export default App;
