import CardContainer from './CardContainer'
import './index.css'
import Navbar from './Navbar'

export default function Cards () {
    // if(loading){
    //     return (
    //         <div className="loading">
    //             <h1>loading</h1>
    //         </div>
    //     )
    // }
    return (
        <>
        <main>
            <Navbar/>
            <CardContainer/>
        </main>
        </>
    )
}