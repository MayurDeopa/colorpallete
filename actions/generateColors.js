

const characters = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0]

const getRandomColor =()=>{
    let color = "#"
    for(let i =0;i<6;i++){
        let char = characters[Math.floor(Math.random()*(characters.length-1))]
        color = color.concat(char)
    }
    return color
}

export const getCOlorObject =(color,i)=>{
    return {
        id:i,
        color:color,
        isLocked:false
    }
}



export const generateColors =(arr)=>{
    let newArr =[];
    if(arr.length>0){
        for(let i=0;i<arr.length;i++){
            if(arr[i].isLocked){
                newArr.push(arr[i])
            }
            else{
                newArr.push(getCOlorObject(getRandomColor(),i))
            }
        }
        console.log(newArr)
        return newArr
    }
    else{
        for(let i =0;i<5;i++){
            newArr.push(getCOlorObject(getRandomColor(),i))
        }
        return newArr
    }
}

export const getColorsFromString=(str)=>{
    let arr =[]
    let hash ="#"
    for(let i=0 , o =0;i<=4;i++,o+=6){
        arr[i]=getCOlorObject(hash.concat(str.substr(o,6)),i)
    }
    return arr
}

export const generateUrlFromArray =(arr)=>{
    let url =process.env.DOMAIN || 'https://localhost:3000/exports/'
    let colorString= ""
    for(let i=0;i<arr.length;i++){
        colorString += arr[i].color.substr(1)
    }
    url += colorString
    return url
}