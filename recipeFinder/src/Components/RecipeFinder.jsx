/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import propTypes from 'propTypes'

function EdamamApi({searchFor}) {
    const [data, setData] = useState({})
    
    useEffect(() =>{
        try {
            const app_id = '1bcdb8b5'
            const app_key = 'f6bd1c12813fbee76b3c3af17a95415d'
            const fetchData = async function (){
            const response = axios.get(`https://api.edamam.com/search?q=${searchFor}&app_id=${app_id}&app_key=${app_key}`)
                setData(response.data.hits)
                window.alert(`Got some Data: ${JSON.stringify(response.data[0][0])}`)
            };
            fetchData();
        }
        catch (error){
            window.alert(`Error: ${error.message}`)
        }
        /* finally {
            data.forEach(data => setData({data: data}))
        } */

    },[searchFor])

  return (
        /* {data.map(data => {
            return (
                <div className="card-container" key={data.recipe.uri}>
                    <div className='card'>
                        <img src={data.thumbnail}/>
                        <h2>{data.recipe.label}</h2>
                    </div>
                </div>
            )
        })} */
  null // remove this null.
  )
}

EdamamApi.propTypes = {
    searchFor: propTypes.string
}

export default EdamamApi