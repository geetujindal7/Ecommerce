import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Items from '../../Component/Items/Items'
import '../Header/Header.css'

function Products() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://dummyjson.com/products`).then(data => {
            setData(data.data.products)
            setLoading(false)
        })
    }, [])

    console.log(data)
    return (

        <>
           {loading ? <>
               <h1 className='loading'>Loading...</h1>
           </> : ( <div style={{ display: 'flex', flexWrap: 'wrap', marginTop:"5%" }}>
                {
                    data.map((e,key) => {
                        return (
                            <div key={key}>
                            <Items key={data.id} data={e} />
                            </div>
                        )
                    }
                    )
                }
            </div>)}
        </>

    )
}

export default Products