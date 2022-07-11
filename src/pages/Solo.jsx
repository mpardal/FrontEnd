import React from "react";

function Solo() {

    const valueText = 'Bonjour,\n' +
        'Je souhaiterai réserver une séance photo pour la prestation "Juste Moi".\n' +
        'Merci par avance'

    return (
        <div className="bg-gray-200 h-screen pt-10">
            <form
                action="https://formspree.io/f/xyyoapwl"
                method="POST"
                className="flex flex-col text-center"
            >
                <label className="m-3">
                    Votre adresse mail: <br/>
                    <input type="email" name="email" className="w-1/2 mx-auto border border-slate-400 m-1"/>
                </label>
                <label className="m-3">
                    Votre numéro de téléphone: <br/>
                    <input type="tel" name="tel" className="w-1/2 mx-auto border border-slate-400 m-1" minLength="10" required/>
                </label>
                <label className="m-3">
                    Votre commentaire: <br/>
                    <textarea defaultValue={valueText} name="message" className="p-1 w-1/2 mx-auto border border-slate-400 m-1" />
                </label>
                <button type="submit" className="mt-5 w-1/3 mx-auto border border-slate-400 text-white bg-gray-300">Envoyer</button>
            </form>
        </div>
    )
}

export default Solo