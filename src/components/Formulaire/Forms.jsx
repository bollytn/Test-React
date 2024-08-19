import Modal from './Modal'
import './style.css'
export default function Forms() {
    return (
        <div className='grp'>
            <form id='form'>
                <h1 className='titre-form'>Formulaire</h1>
                <hr />
                <label for="nom">Nom:</label>
                <input type="text" id="nom" name="nom" required />
                <label for="prenom">Prénom:</label>
                <input type="text" id="prenom" name="prenom" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label >Vous etes employer ?</label>
                <input type="checkbox" />
                <label>Salaire :</label>
                <select name="" id="">
                    <option value="">1000Dt</option>
                    <option value="">2000Dt</option>
                </select>
                <input type="submit" id='submit' value="Envoyer" />

            </form>
            <Modal />
        </div>
    )
}