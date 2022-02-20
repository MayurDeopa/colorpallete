import { createContext, useEffect, useState } from 'react'
import Back from '../components/Back'
import '../styles/globals.css'

const ColorContext = createContext()

function MyApp({ Component, pageProps }) {
  const [savedColors,setSavedColors]  = useState([])
  useEffect(()=>{
    const store = localStorage.getItem('saved')
    if(store){
      setSavedColors(JSON.parse(store))
    }
    else{
      localStorage.setItem('saved',[])
    }
  },[])

  return (
    <div>
      <ColorContext.Provider value={{
        saved:[savedColors,setSavedColors]
      }}>
        <Back/>
      <Component {...pageProps} />
    </ColorContext.Provider>
    </div>
  )
}

export default MyApp;
export {ColorContext}
