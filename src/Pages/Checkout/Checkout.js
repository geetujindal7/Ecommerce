import React, { useContext, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { context } from '../../Constant';
import './Checkout.css'
import '../Login/Login.css'

function Checkout() {

const [submitting, setSubmitting] = useState(false)

    const name = useRef()
    const street = useRef()
    const city = useRef()
    const state = useRef()
    const pincode = useRef()
    const mobile = useRef()

    let location = useLocation();
console.log(location)
const values = location.state;
console.log(values)

const contex = useContext(context)
console.log(contex.items)

const handleSubmit = async (e) => {
e.preventDefault();

const namei = name.current.value
const streeti = street.current.value
const cityi = city.current.value
const statei = state.current.value
const pincodei = pincode.current.value
const mobilei = mobile.current.value

const a = {
    name: namei,
    street:streeti,
    city: cityi,
    state: statei,
    pincode: pincodei,
    mobile: mobilei
}

 await fetch('https://ecommerce-first-bd205-default-rtdb.firebaseio.com/orders.json', {
   method: 'POST',
   body: JSON.stringify({
     user : a,
     orderedItems: contex.items
   })
 })
setSubmitting(true) 
contex.clearItem();
}


  return (
  <>
   {submitting ? <p className='submitted'>Your Order has been Submitted!! Please wait for your order to be dispatched.</p> : ( <div className='container_checkout'>
        <form onSubmit={handleSubmit}>
        <div className='labelValues'>
    <label  htmlFor='username'>
            Name
        </label>
    </div>
        <input ref={name} type="text"  required className='inputValues'></input>
        <div className='labelValues'>
    <label  htmlFor='username'>
            Street
        </label>
    </div>
        <input ref={street} type="text"  required className='inputValues'></input>

        <div className='labelValues'>
    <label  htmlFor='username'>
            City
        </label>
    </div>
        <input ref={city} type="text"  required className='inputValues'></input>

        <div className='labelValues'>
    <label  htmlFor='username'>
            State
        </label>
    </div>
        <input ref={state} type="text"  required className='inputValues'></input>

        <div className='labelValues'>
    <label  htmlFor='username'>
            Pin Code
        </label>
    </div>
        <input ref={pincode} type="number"  required className='inputValues'></input>

        <div className='labelValues'>
    <label  htmlFor='username'>
            Mobile Number
        </label>
    </div>
        <input ref={mobile} type="number"  required className='inputValues'></input>

       <div>
       <button className='button_submit' type='submit'>Submit</button>
       </div>
        </form>
    </div>)}
    </>
  ) 
}

export default Checkout