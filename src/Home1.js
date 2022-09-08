import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from './context';

const Home = () => {
    const {characters,loading} = useGlobalContext()
    if (loading) {
        return <Loading/>
    }
    return (
                
     <main className='main-class'> 
        {characters.map((item)=>{
            const {name,image,actor,id} = item;
            return (  
            <> 
            <figure className='snip1218'>
            <div className='image'>
                <img src={image} alt={name}/>
            </div>
            <figcaption>
                <h3>{name}</h3>
                <p>Played by: </p><h4>{actor}</h4> 
                <form  action={`info/${id}`}>
                <input  className='button-17' type='submit' value="Visit character"></input>
                </form>
            </figcaption>
           
            </figure>
            </>
            )
        })}

       </main>  
    
    )
}
export default Home;