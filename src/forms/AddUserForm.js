import React, { useState } from 'react'

const AddUserForm = ({addProduct,products}) => {
    const initialFormState = {id:null,productName:"",price:"",qty:null}
    const [data,setData]=useState(initialFormState)

    const handleInputChange =(event)=>{
        const {name,value} = event.target;

        setData({...data,[name]:value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!(data.productName&&data.price)){
            return;
        }else{
            addProduct(data)
            setData(initialFormState)
        }
    }

  return (
   <form onSubmit={handleSubmit}>
        <label>Name</label>
        <div><input type="text" onChange={handleInputChange} name="productName" value={data.productName}/></div>
        <label>Price</label><br/>
        <div><input type="number" onChange={handleInputChange} name="price" value={data.price}/></div>
        <button>Add Product</button>
   </form>
  )
}

export default AddUserForm