import React,{useState} from 'react'

const EditUserForm = ({curentProduct,setEditing,updateProduct}) => {
    const [data,setData]=useState(curentProduct)

    const handleInputChange =(event)=>{
        const {name,value} = event.target;

        setData({...data,[name]:value})
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!(data.productName&&data.price)){
            return;
        }else{
            updateProduct(data.id,data)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <div><input type="text" onChange={handleInputChange} name="productName" value={data.productName}/></div>
        <label>Quantity</label>
        <div><input type="text" onChange={handleInputChange} name="price" value={data.price}/></div>
        <button >update Product</button>
        <button onClick={()=>setEditing(false)}>Cancel</button>
   </form>
  )
}

export default EditUserForm