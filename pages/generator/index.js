import { generateColors, generateUrlFromArray} from "../../actions/generateColors"
import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

const Generator=()=>{
    const router = useRouter()

    useEffect(()=>{
        router.push(generateUrlFromArray(generateColors([])))
    },[])
    
    return (
        <div className="page_wrapper">
            <Head>
                <title>Generator</title>
            </Head>
        </div>
    )
}

export default Generator;