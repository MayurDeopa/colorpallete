

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
    for(let i=0 , o =0;i<str.length/6;i++,o+=6){
        arr[i]=getCOlorObject(hash.concat(str.substr(o,6)),i)
    }
    return arr
}

export const generateUrlFromArray =(arr)=>{
    let url ='/generator/'
    let colorString= ""
    for(let i=0;i<arr.length;i++){
        colorString += arr[i].color.substr(1)
    }
    url += colorString
    return url
}

export const  hexToRgb=(hex)=> {
    console.log(hex)
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Return the result as an object
    return { r: r, g: g, b: b };
}

export const rgbToHex=(r, g, b)=> {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
export const getSimilarColor = (color1Hex,color2Hex)=>{
    const {r:r1,g:g1,b:b1} = hexToRgb(color1Hex)
    const {r:r2,g:g2,b:b2} = hexToRgb(color2Hex)

    let rMid = Math.round((r1 + r2) / 2);
    let gMid = Math.round((g1 + g2) / 2);
    let bMid = Math.round((b1 + b2) / 2);

    return getCOlorObject(rgbToHex(rMid, gMid, bMid),Math.floor(Math.random()*1000));
}
