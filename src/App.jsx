import React from "react";
import "./App.css";

import foto1 from "./assets/foto1.jpeg";
import foto2 from "./assets/foto2.jpeg";

export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="title-with-ribbon">
        Hai inii akuu <span className="ribbon"></span>
      </h1>

      <div className="biodata-container">
        <div className="bio-text">
          <p>Nama lengkap saya <strong>Livia Arinda Savarasaya</strong></p>
          <p>Saya sering dipanggil <strong>Piaa</strong> atau <strong>Viaa</strong></p>
          <p>Saya sekolah di <strong>SMKN 8 Malang</strong>.</p>
          <p>Hobi saya adalah:</p>
          <ul>
            <li>Mendengarkan Musik</li>
            <li>Melukis</li>
            <li>Bercerita</li>
          </ul>
        </div>
      </div>

      <div className="image-row">
        <div className="image-card">
          <img src={foto1} alt="Foto Saya 1" />
          <div className="star">★</div>
        </div>
        <div className="image-card">
          <img src={foto2} alt="Foto Saya 2" />
          <div className="star">★</div>
        </div>
      </div>

      <h1 className="title-with-ribbon">
        SOSIAL MEDIA <span className="ribbon"></span>
      </h1>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/lvarnda09"
          target="_blank"
          rel="noreferrer"
        >
          @lvarnda09
        </a>
      </p>
    </div>
  );
}
