import React from 'react'
import './Icons.css'
import { NavLink } from 'react-router-dom'

function Icons() {
    return (
        <>
            <div className='Icons_container'>
                <div className='Icons_card'>
                    <NavLink to="/" style={{textDecoration: 'none'}} >
                        <h2>Product</h2>
                    </NavLink>
                </div>
                <div className='Icons_card'>
                    <NavLink  to="/cart" style={{textDecoration: 'none', color:"black"}} >
                        <h2>Cart</h2>
                    </NavLink>

                </div>

            </div>
        </>
    )
}

export default Icons