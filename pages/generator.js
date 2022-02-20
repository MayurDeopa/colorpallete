import { generateColors, generateUrlFromArray} from "../actions/generateColors"
import { useContext, useEffect, useState } from "react"
import Color from "../components/Color"
import styles from '../styles/Generator.module.css'
import Head from "next/head"
import { BiBookmark,BiColorFill ,BiShare} from "react-icons/bi"
import { ColorContext } from "./_app"
import { useRouter } from "next/router"

const Generator=()=>{
    const router = useRouter()
    const {saved} = useContext(ColorContext)
    const [savedColors,setSavedColors] = saved
    const [colors,setColors] = useState([])
    useEffect(()=>{
        setColors(generateColors(colors))
    },[])
    const handleChange =()=>{
        const palette = generateColors(colors)
        setColors(palette)
    }
    const save=()=>{
        let temp = savedColors
        temp.push(colors)
        setSavedColors(temp)
        localStorage.setItem('saved',JSON.stringify(temp))
    }
    const share =()=>{
        navigator.clipboard.writeText(generateUrlFromArray(colors))
        router.push(generateUrlFromArray(colors))
    }
    return (
        <div className="page_wrapper">
            <Head>
                <title>Generator</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.header}>
                    <button onClick={handleChange}><BiColorFill/></button>
                    <button onClick={save} ><BiBookmark/></button>
                    <button onClick={share}><BiShare/></button>
                </div>
                <div className={styles.generator}>
                    {colors?.map((c,i)=>{
                        return <Color key={i} color={c} changes={{
                            globalState:[colors,setColors]
                        }}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Generator;