import './wdyr';


import ReactDOM from "react-dom/client";
import App from "./App";
import '@/styles';
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./router";

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App router={router}/>
);
