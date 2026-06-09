import { QRCodeCanvas } from "qrcode.react";

function Qr() {
  return (
    <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: "#f5f7fb"
      }}>
      <QRCodeCanvas
        value="https://my-cv-beta-navy.vercel.app/cv"
        size={200}
      />
    </div>
  );
}

export default Qr;