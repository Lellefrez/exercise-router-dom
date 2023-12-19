import { useEffect } from "react"
import { useState } from "react"
import "./Countries.scss"
export default (()=>{
    const [countries, setcountries] = useState([])
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then((obj) => {
            setcountries(obj);
            console.log(obj);
        })
        .catch(error => console.log(error))
    }, [])

    

    return(
        <>
        <h1>COUNTRIES</h1>
        <ul className="map-List">
            {countries.map((country,i)=>{
                return (
                   <> 
                    <div key={`${country.name.common}${i}`}> 
                    
                    <div className="Cover-glag-info">
                        <h2>
                        {country.name.common}  
                    </h2>
                           <figure className="flag">
                            <img src={countries[i].flags.svg} alt={`Bandiera di ${i}`}/>
                         </figure>
                         <div className="Info-Countries">
                             <p>
                            Population: {countries[i].population}
                         </p>
                         <p>Regione: {countries[i].region}</p>
                         <p>Capitale:{countries[i].capital}</p>
                         </div>
                    </div>
                      
                        
                        </div>
                   </>
                 
                )
            })}
        </ul>
        </>
    )
})