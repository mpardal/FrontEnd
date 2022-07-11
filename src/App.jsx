import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";
import Galerie from "./pages/Galerie"
import Home from "./pages/Home"
import Price from "./pages/Price"
import Contact from "./pages/Contact"
import Solo from "./pages/Solo"
import Duo from "./pages/Duo"
import Famille from "./pages/Famille"
import Fois from "./pages/Fois"
import Bebe from "./pages/Bebe"
import Event from "./pages/Event"
import Facebook from "../public/image/icon-facebook.svg"
import Instagram from "../public/image/icon-instagram.svg"

function App() {
    return (

        <BrowserRouter>
            <nav  className="bg-black text-white p-3 text-xs sm:flex sm:justify-between sm:text-xl md:pl-10 lg:pl-20">
                <div className="flex sm:justify-between">
                <Link to="/" className="mx-3 lg:mx-10">Accueil</Link>
                <Link to="/Galerie" className="mx-3 lg:mx-10">Galerie</Link>
                <Link to="/Price" className="mx-3 lg:mx-10">Tarifs & prestations</Link>
                <Link to="/Contact" className="mx-3 lg:mx-10">Contact</Link>
                </div>
                <div className="flex mt-5 justify-end text-xs sm:mt-0">
                <Link to="/" onClick={() => alert("Le lien n'est pas encore actif")} className="mx-3 lg:mx-10"><img src={Facebook} alt="facebook"/></Link>
                <Link to="/" onClick={() => alert("Le lien n'est pas encore actif")} className="mx-3 lg:mx-10"><img src={Instagram} alt="facebook"/></Link>
                </div>
            </nav>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="galerie" element={<Galerie />} />
                    <Route path="price" element={<Price />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="solo" element={<Solo />} />
                    <Route path="duo" element={<Duo />} />
                    <Route path="famille" element={<Famille />} />
                    <Route path="fois" element={<Fois />} />
                    <Route path="bebe" element={<Bebe />} />
                    <Route path="event" element={<Event />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
