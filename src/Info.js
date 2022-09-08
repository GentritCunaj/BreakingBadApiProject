import React, { useState } from 'react'
import { useGlobalContext } from './context';
import Loading from './Loading'
import { useParams, Link } from 'react-router-dom'
const About = () => {
    const {id} = useParams()
    const [characters,setCharacters] = useState(null)
    const [loading,setLoading] = useState(false)
    React.useEffect(()=>{
        setLoading(true)
        async function getCharacter(){
            try {
                const response = await fetch(
                    `https://www.breakingbadapi.com/api/characters/${id}`
                )
                const data = await response.json()
                if (data){
                    const {
                        better_call_saul_appearance:bss,
                        img:image,
                        name,
                        nickname,
                        occupation:job,
                        portrayed:actor,
                        status

                    } = data[0]
                    const newCharacter = {
                        bss,image,name,nickname,job,actor,status
                    }
                    setCharacters(newCharacter)
                    
                }
                else {
                    setCharacters(null)
                }
                setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        }
        getCharacter()
    },[id])
    if (loading) {
        return <Loading/>
    }
    if (!characters){
        return <h2>No character to display</h2>
    }
    else {
        const {
            bss,image,name,nickname,job,actor,status
        } = characters
        return (
            <>
            <div className='hero_section-container'>
            
               <div className='hero_img-box'>
                <img src={image} alt={name}/>
               </div>
                
               <div className='hero_detail-box'>
               <div class="carousel-inner">
               <div class="hero_detail-container">
                    <h1>Name: {name}</h1>
                      
                    <h2>Nickname: {nickname}</h2>  
                
                 
                    <p>Better Call Saul Appearance: {bss?'Yes':'No'}</p>
                    
                    <p>Job/Jobs:</p>
                    <ul>
                    {job.map((j)=>{
                        return <li>{j}</li>
                    })}
                    </ul>
                    <p>
                        Portrayed by: {actor}
                    </p>
                    <p>
                        Status: {status === 'Dead'?'Dead':'Alive'}
                    </p>
                    <Link to='/'><button type='button' className='button-17'>Back Home</button></Link>
                    </div> 
                    </div>
               </div>
              
            </div>
            
            </>
        )
    }
    
}
export default About