export default function Modal({ isVisible, errorMsg }) {
    if (isVisible) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h1 className="titre">formulaire envoyer par succes</h1>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}