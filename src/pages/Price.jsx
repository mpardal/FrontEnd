import React from "react";
import { useNavigate } from "react-router-dom"
import {useState, useEffect} from "react";


function Price() {
    const onNavigateClick = useNavigate()

    return (
        <div className="bg-gray-200 flex items-center pt-5 lg:pt-10 lg:text-xl">
            <table className="table-auto text-center w-screen border-collapse">
                <thead>
                <tr className="bg-gray-400">
                    <th className="p-5 border border-slate-400">Nom de la prestation</th>
                    <th className="p-5 border border-slate-400">Tarif de la prestation</th>
                    <th className="p-5 border border-slate-400">Détail de la prestation</th>
                </tr>
                </thead>
                <tbody>
                <tr onClick={() => onNavigateClick("/solo")}>
                    <td className="p-5 border border-slate-400">"Juste moi"</td>
                    <td className="p-5 border border-slate-400">130 euros</td>
                    <td className="p-5 border border-slate-400">Séance pour une personne, en extérieur ou en studio</td>
                </tr>
                <tr onClick={() => onNavigateClick("/duo")}>
                    <td className="p-5 border border-slate-400">"Pour deux"</td>
                    <td className="p-5 border border-slate-400">195 euros</td>
                    <td className="p-5 border border-slate-400">Pour deux personnes, en extérieur ou en studio</td>
                </tr>
                <tr onClick={() => onNavigateClick("/famille")}>
                    <td className="p-5 border border-slate-400">"Famille"</td>
                    <td className="p-5 border border-slate-400">220 euros</td>
                    <td className="p-5 border border-slate-400">Pour la famille ou les amis jusqu’à 4 personnes, en
                        extérieur ou en studio. <br/> 30 euros en supplément par personne au-delà de 4 (hormis enfant
                        jusqu’à 2 ans)
                    </td>
                </tr>
                <tr onClick={() => onNavigateClick("/fois")}>
                    <td className="p-5 border border-slate-400">"Il était une fois"</td>
                    <td className="p-5 border border-slate-400">160 euros</td>
                    <td className="p-5 border border-slate-400">Photo de grossesse (À votre domicile, en extérieur ou en
                        studio)
                    </td>
                </tr>
                <tr onClick={() => onNavigateClick("/bebe")}>
                    <td className="p-5 border border-slate-400">"Mon bébé"</td>
                    <td className="p-5 border border-slate-400">100 euros</td>
                    <td className="p-5 border border-slate-400">Photo d'enfant jusqu'à 3 ans (photo à domicile)</td>
                </tr>
                <tr onClick={() => onNavigateClick("/event")}>
                    <td className="p-5 border border-slate-400">"J'immortalise l'événement"</td>
                    <td className="p-5 border border-slate-400">sur mesure</td>
                    <td className="p-5 border border-slate-400">Prestation de mariage ou baptême sur mesure</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Price