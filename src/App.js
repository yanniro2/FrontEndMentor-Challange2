import "./Style/main.css";
import barcode from "./Img/image-qr-code.png";
function App() {
  return (
    <div className="App">
      <div className="img">
        <img src={barcode} alt="Img" />
      </div>
      <h3>Improve your front-end skills by building projects</h3>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level.
      </p>
    </div>
  );
}

export default App;
