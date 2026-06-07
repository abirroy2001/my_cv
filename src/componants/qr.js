import { QRCodeCanvas } from "qrcode.react";

function Qr() {
  return (
    <div>
      <QRCodeCanvas
        value="https://your-domain.vercel.app/cv"
        size={200}
      />
    </div>
  );
}

export default Qr;