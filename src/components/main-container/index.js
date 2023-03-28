import Navbar from "./Navbar"
import Footer from "./footer"
import styles from "./MainContainer.module.css"
import { Main } from "next/document"

export default function MainContainer({children}){
    return(
        <>
        <Navbar />

        <div className = {styles.container}>{children}</div>

        <Footer />
        
        </>
    )
}