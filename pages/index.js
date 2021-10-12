import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/sidebar";
import Main from "../components/Mainbar";
import Navbar from "../components/navbar";
// import "styles/index.css";

export default function Home() {
  const sidebarStyle = {
    backgroundColor: "#2d373c",
    color: "white",
  };

  const mainbarStyle = {
    backgroundColor: "white",
  };

  return (
    <div className="container-fluid p-0  h-100 min-vh-100">
      {/* flex */}
      <div className="d-flex flex-column h-100 min-vh-100">
        {/* nav bar area */}
        <div className="row">
          <div>
            <Navbar />
          </div>
        </div>

        {/* main body with side bar */}
        <div className="row justify-content-center flex-grow-1">
          {/* side bar */}
          <div className="col-2" style={sidebarStyle}>
            <Sidebar />
          </div>

          <div className="col-10" style={mainbarStyle}>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
