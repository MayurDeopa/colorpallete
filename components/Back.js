import { useRouter } from 'next/router';
import {BiArrowBack} from 'react-icons/bi'

const Back =()=>{
    const router = useRouter()
    const goBack=()=>{
        router.back()
    }

    return (
        <div onClick={goBack} className="back_btn">
            <BiArrowBack/>
        </div>
    )
}

export default Back;