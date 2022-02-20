import { useContext, useState } from 'react'
import {BiCopy,BiLock,BiLockOpen,BiBookmark } from 'react-icons/bi'
import { ColorContext } from '../pages/_app'
import styles from '../styles/Generator.module.css'

const Color = ({color,changes})=>{
    const {saved} = useContext(ColorContext)
    const [colors,setColors] = changes.globalState
    const [locked,setLocked] = useState(false)
    const lock = ()=>{
        setLocked(true)
        setColors(colors.map((x)=>x.id===color.id?{...x,isLocked:true}:x))
    }
    const unlock =()=>{
        setLocked(false)
        setColors(colors.map((x)=>x.id===color.id?{...x,isLocked:false}:x))
    }    

    return (
        <div style={{
            backgroundColor :color.color,
            
        }}
            className={styles.color}
        >
            <div className={styles.icons} onClick={()=>navigator.clipboard.writeText(color.color)}>
                <BiCopy/>
            </div>
            {
                locked
                ?
                <div onClick={unlock} className={styles.icons}>
                    <BiLock/>
                </div>
                :
                <div onClick={lock} className={styles.icons}>
                    <BiLockOpen/>
                </div>
            }
            <p style={{
                fontWeight:"bold"
            }}>
                {color.color}
            </p>
        </div>
    )
}

export default Color;