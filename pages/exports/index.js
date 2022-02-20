import { useRouter } from "next/router"
import { useEffect } from "react"


const Export =()=>{
    const router = useRouter()
    useEffect(()=>{
        router.push('/')
    },[])
    return (
        <div>
            Nothing here
        </div>
    )
}

export default Export;