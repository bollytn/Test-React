import { useState } from 'react'
import Modal from './Modal'
import './style.css'
export default function Forms() {
    const [loadinput, setLoadinput] = useState({
        nom: "",
        prenom: "",
        email: "",
        isEmployer: false,
        salaire: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit succes');

    }

    return (
        <div className='grp'>
            <form id='form'>
                <h1 className='titre-form'>Formulaire</h1>
                <hr />
                <label >Nom:</label>
                <input type="text" value={loadinput.nom} onChange={(e) => {
                    setLoadinput({ ...loadinput, nom: e.target.value })
                }} required />
                <label >Prénom:</label>
                <input type="text" value={loadinput.prenom} onChange={(e) => {
                    setLoadinput({ ...loadinput, prenom: e.target.value })
                }} required />
                <label >Email:</label>
                <input type="email" required value={loadinput.email} onChange={(e) => {
                    setLoadinput({ ...loadinput, email: e.target.value })
                }} />
                <label >Vous etes employer ?</label>
                <input type="checkbox" value={loadinput.isEmployer} onChange={(e) => {
                    setLoadinput({ ...loadinput, isEmployer: e.target.checked })
                }} />
                <label>Salaire :</label>
                <select value={loadinput.salaire} onChange={(e) => {
                    setLoadinput({ ...loadinput, salaire: e.target.value })
                }}>
                    <option value="1000">1000Dt</option>
                    <option value="2000">2000Dt</option>
                </select>
                <input type="submit" value="Envoyer" disabled={
                    loadinput.nom === '' || loadinput.prenom === '' || loadinput.email === ''} onClick={handleSubmit} />

            </form>
            {/* <Modal /> */}
        </div>
    )
}