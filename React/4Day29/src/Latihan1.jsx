import { useState } from "react";
import Children from "./Latihan3Props.jsx";

export default function Latihan1() {
  const [ojol, setOjol] = useState({
    nama: "fahmi hidayat",
    rating: "⭐",
  });

  const tambahRating = () => {
    const ratingBaru = ojol.rating + "⭐";
    if (ratingBaru === "⭐⭐⭐⭐⭐⭐") {
      return;
    }
    const ojolBaru = {
      ...ojol,
      rating: ratingBaru,
    };
    setOjol(ojolBaru);
  };

  return (
    <div>
      <div>{ojol.nama}</div>
      <div>{ojol.rating}</div>
      <button onClick={tambahRating}>Tambah Rating</button>
      <Children
        valueLatihan={{
        nama: "fahmi hidayat",
        rating: "⭐"
        }}
/>

    </div>
  );
}
