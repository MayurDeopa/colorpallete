import Head from "next/head"
import Link from "next/link"
import { useContext, useEffect } from "react"
import styles from '../styles/Saved.module.css'
import { ColorContext } from "./_app"
import {BiX,BiLinkExternal} from 'react-icons/bi'
import { useRouter } from "next/router"
import { generateUrlFromArray } from "../actions/generateColors"

const Saved = ()=>{

    const router = useRouter()
    const {saved} = useContext(ColorContext)
    const [savedColors,setSavedColors] = saved

    const deletePalette =(palette)=>{
        let temp = savedColors
        const temp2 = temp.filter((p)=>{
            return p!==palette
        })
        setSavedColors(temp2)
        localStorage.setItem('saved',JSON.stringify(temp2))
    }

    const viewPallete = (palette)=>{
        router.push(generateUrlFromArray(palette))
    }

    return (
        <div className="page_wrapper">
            <Head>
                <title>Saved</title>
            </Head>
            <div className={styles.saved}>
                {
                    savedColors.length>0
                    ?
                    savedColors.map((p,i)=>{
                        return(
                            <div key={i} className={styles.palette}>
                               <div className={styles.palette_header}>
                               <div className={styles.delete} onClick={()=>viewPallete(p)}><BiLinkExternal/></div>
                                <div className={styles.delete} onClick={()=>deletePalette(p)}><BiX/></div>
                             
                               </div>
                                <div className ={styles.palette_colors}>
                                    {p.map((c,i)=>{
                                        return (
                                            <div style={{
                                                backgroundColor:c.color,
                                            }} key={i} className={styles.color}>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                    :
                    <Link href='/generator'>
                        Start Searching
                    </Link>
                }
            </div>
        </div>
    )
}

export default Saved;