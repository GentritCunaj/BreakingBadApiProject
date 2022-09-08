import React, {useState,useContext,useReducer,useEffect,Component} from 'react';

const AppContext = React.createContext()
// Find all of the objects with the word "dog" in the title and return only a few fields per record

const url = 'https://www.breakingbadapi.com/api/characters?name='
const AppProvider = ({children})=> {
    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState('')
    const [characters,setCharacters] = useState([])
    const [random,setRandom] = useState([1,2,3,4,5,6,7,8,9,10])
    const [dataLength,setDataLength] = useState(null)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data)
            const slicedData = []
            setDataLength(data.length)
            for (const el of random){
                slicedData.push(...data.slice(el-1,el))
            }
           
            if (slicedData) {
                const newCharacters= slicedData.map((person)=>{
                   const {char_id,name,img,portrayed,occupation,nickname} = person
                   return {id:char_id,name,image:img,actor:portrayed,job:occupation,nickname}
                })
                setCharacters(newCharacters)
                
            }
            else {
                setCharacters([])
            }
            setLoading(false)
        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
       
    }
    useEffect(()=>{
        fetchData()
    },[random,searchTerm])
    return <AppContext.Provider value = {{
        loading,setCharacters,characters,setRandom,dataLength,setSearchTerm,searchTerm
    }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}