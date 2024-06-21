import { useState } from 'react'
import {BiCopy,BiLock,BiLockOpen,BiX,BiPlus } from 'react-icons/bi'
import styles from '../styles/Generator.module.css'
import { getSimilarColor,generateUrlFromArray } from '../actions/generateColors'
import { useRouter } from 'next/router'

const Color = ({color,changes,index})=>{
    const router = useRouter()
    const [colors,setColors] = changes.globalState
    const [locked,setLocked] = useState(false)

    const [isExpansionOpen,toggleExpansion] = useState(false)
    
    const lock = ()=>{
        setLocked(true)
        setColors(colors.map((x)=>x.id===color.id?{...x,isLocked:true}:x))
    }
    const unlock =()=>{
        setLocked(false)
        setColors(colors.map((x)=>x.id===color.id?{...x,isLocked:false}:x))
    }    
    
    const handleExpand = (index1,index2)=>{
        const tempArr = []
        let tempIndex = 0
        let newArrayIndex = 0
        while (newArrayIndex<colors.length + 1) {
            if(newArrayIndex===index2){
                tempArr[newArrayIndex] = getSimilarColor(colors[index1].color,colors[index2].color)
                newArrayIndex++
            }
            else{
                tempArr[newArrayIndex] = colors[tempIndex]
                newArrayIndex++
                tempIndex++
            }
        }
        setColors(tempArr)
        router.push(generateUrlFromArray(tempArr))
    }

    const handleClose = (color)=>{
        const newColors = colors.filter((c)=>c.id!==color.id)
        setColors(newColors)
        router.push(generateUrlFromArray(newColors))
    }

    return (
        <div style={{
            backgroundColor :color.color,
            
        }}
            className={styles.color}
        >
            {index!==0 && (
                <div className={styles.expand} onMouseEnter={()=>toggleExpansion(true)} onMouseLeave={()=>toggleExpansion(false)}>
                    {isExpansionOpen && (
                        <div className={styles.expand_icon} style={{color:'black'}} onClick={()=>handleExpand(index-1,index)}>
                            <BiPlus color='black'/>
                        </div>
                    )}
                </div>
            )}
             <div className={styles.icons} onClick={()=>handleClose(color)}>
                <BiX/>
            </div>
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