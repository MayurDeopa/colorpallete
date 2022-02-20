import { useRouter } from "next/router"
import styles from '../../styles/Generator.module.css'
import { getColorsFromString } from "../../actions/generateColors"
import { BiCopy,BiBookmark,BiShare } from "react-icons/bi"
import { useContext, useState } from "react"
import { ColorContext } from "../_app"


const ExportedColor=()=>{
    const [colors,setColors] = useState()
    const router = useRouter()
    const {id} = router.query
    const {saved} = useContext(ColorContext)
    const[savedColors,setSavedColors] = saved
    const save=()=>{
        let temp = savedColors
        temp.push(getColorsFromString(id))
        setSavedColors(temp)
        localStorage.setItem('saved',JSON.stringify(temp))
    }
    const share =()=>{
        const url = ('http://localhost:3000/exports/'+router.query.id)
        navigator.clipboard.writeText(url)
        console.log(url)
    }
    
    if(id){
        const colors = getColorsFromString(id)
        return(
            <div className="page_wrapper">
                <div className = {styles.container}>
                <div className={styles.header}>
                    <button onClick={save} ><BiBookmark/></button>
                    <button onClick={share}><BiShare/></button>
                </div>
                <div className={styles.generator}>
                {colors.map((c)=>{
                    return (
                        <div style={{
                            backgroundColor :c.color,
                            
                        }}
                            className={styles.color}
                        >
                            <div className={styles.icons} onClick={()=>navigator.clipboard.writeText(c.color)}>
                                <BiCopy/>
                            </div>
                            <p style={{
                                fontWeight:"bold"
                            }}>
                                {c.color}
                            </p>
                        </div>
                    )
                })}
                </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                Loading
            </div>
        )
    }
}

export default ExportedColor;