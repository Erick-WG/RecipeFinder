/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import EdamamApi from './EdamamApi'

function SearchBox () {
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState({})

    // searching with the api.
    useEffect(() =>{
        try {
            const app_id = '1bcdb8b5'
            const app_key = 'f6bd1c12813fbee76b3c3af17a95415d'

            const fetchData = async function (){
              const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}`)
              const responseData = JSON.stringify(response.data.hits)
                  setData(responseData)
                  window.alert(`Got some Data: ${data}`)
            };

            // fetching data if there's a searchQuery parameter.
            if (searchQuery){
              fetchData();
            }
        }
        catch (error){
            window.alert(`Error: ${error.message}`)
        }
        /* finally {
            data.forEach(data => setData({data: data}))
        } */

    },[data, searchQuery])

    // handling search state of the search box, handle change and handle submit.

    const handleSearch = (e) => {
        window.alert(`You are looking for: ${searchQuery}`)
        setSearchQuery(e.target.value)
    }



  return (
    <>
    {/* input field */}
    <input
      type="search"
      name="search"
      className="search-box"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search for something..."></input>

    {/* submit button. */}
    <button
      type="button"
      name="search-entered"
      onClick={handleSearch}>Search 🔍</button>

      {data != 0 && <div className="results-container">{data[0].recipe}</div>}
    </>
  )
}

export default SearchBox