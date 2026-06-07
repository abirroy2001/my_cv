import { QRCodeCanvas } from "qrcode.react";

function Qr() {
  return (
    <div>
      <QRCodeCanvas
        value="https://my-cv-beta-navy.vercel.app/cv"
        size={200}
      />
    </div>
  );
}

export default Qr;