import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
            <ul>
                <li className="navbar-logo">TuguLangit.</li>
                <li className="navbar-toggle"><a href="#" className="fa fa-bars" aria-label="Humburger Label"></a></li>
                <li className="navbar-links"><a href="#hero">Beranda</a></li>
                <li className="navbar-links"><a href="#tentang">Tentang</a></li>
                <li className="navbar-links"><a href="#kamar">Kamar</a></li>
                <li className="navbar-links"><a href="#fasilitas">Fasilitas</a></li>
                <li className="navbar-links"><a href="#destinasi">Destinasi</a></li>
                <li className="navbar-links"><a href="#kontak">Kontak</a></li>
                <li className="navbar-links"><button class="button-nav">Pesan Sekarang</button></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;