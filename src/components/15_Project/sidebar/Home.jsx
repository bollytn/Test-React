import { FaBars } from "react-icons/fa";


export default function Home() {
    return (
        <main>
            <button className="sidebar-toggle">
                <FaBars />
            </button>
            <button type="button" class="btn">
                show modal
            </button>
        </main>
    )
}