import { useState } from "react"
import styles from './Navbar.module.scss'
export default function Navbar(){
    const [top, setTop] = useState(false)

    function setFixed(){
        if(window.scrollY >= 400){
            setTop(true)
        }else{
            setTop(false)
        }
    }

    // window.addEventListener('scroll', setFixed)
    return(
        <div class = {styles.navbar}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href='https://docs.google.com/document/d/1w91wFM6vUyKnK5_pqmfxo8gi9FYXzw8UyeeYklo5F34/edit#' target='_blank'>Resume</a>
        </div>

            
    )
}