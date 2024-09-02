import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext , useGlobalContext} from "./context";

export default function Home() {
    const {openModal,openSidebar} = useContext(AppContext)
    // const datas = useGlobalContext()
    
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button type="button" className="btn" onClick={openModal}>
                show modal
            </button>
        </main>
    )
}