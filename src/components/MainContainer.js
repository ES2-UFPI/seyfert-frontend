import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/MainContainer.module.css"
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