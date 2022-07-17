import Header from "./components/html/header";
import Center from "./components/html/center";
import image from "./assets/images/nature.webp";
import "./assets/css/header.css";

export default function App() {
  return (
    <div className="container">
      <img src={image} alt="images" style={{ width: "100%",height:"100vh", opacity: "90%" }} />
      <div className="top_left">
        <h1>
          <b>slides</b>
        </h1>
      </div>
      <div className="top_right">
        <Header />
      </div>
      <div className="centered">
        <Center />
      </div>
    </div>
  );
}
