import Head from "next/head"
import Link from "next/link"
import { useContext, useEffect } from "react"
import styles from '../styles/Saved.module.css'
import { ColorContext } from "./_app"
import {BiX} from 'react-icons/bi'

const Saved = ()=>{
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
                                <p className={styles.title}>{i}</p>
                                <div className={styles.delete} onClick={()=>deletePalette(p)}><BiX/></div>
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