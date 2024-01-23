import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterProvider from "./Context/Filter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
