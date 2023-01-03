import { useState } from 'react';
import './App.css';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

function App() {
  const userData = [
    {id:1,productName:'apple',price:175,qty:1},
    {id:2,productName:'orange',price:250,qty:1},
    {id:3,productName:'banana',price:60,qty:1},
  ];
  const [products,setProduct]=useState(userData);
  const [editing,setEditing]=useState(false);
  const [id,setId] = useState(4)

  const addProduct = (prod)=>{
    const isProductExist = products.find((item)=>item.productName === prod.productName)
    if(isProductExist){
      setProduct(products.map((item)=> item.productName === prod.productName ? {...isProductExist,qty:isProductExist.qty+1}:item))
    }else{
      setId(id+1)
      prod.id = id;
      setProduct([...products,{...prod,qty:1}])
    }
  }
  const deleteItem = (id)=>{
    setProduct(products.filter((prod)=>prod.id !== id))
  }
  const initialFormState = {id:null,productName:"",price:"",qty:null};
  const [curentProduct,setCurentProduct] = useState(initialFormState);

  const editProduct = (product)=>{
    setEditing(true)
    setCurentProduct({id:product.id,productName:product.productName,price:product.price,qty:product.qty})
  }
  const updateProduct = (id,updateProduct)=>{
    setEditing(false)
    setProduct(products.map((product)=> (product.id === id ? updateProduct:product)))
  }
  return (
    <>
      <div className="header">
        <h1>Todo-app</h1>
      </div>
      <div className='container'>
        <div className='form-container'>
          {
            editing? (<div className='edit-product'>
                        <h2>Edit Product</h2>
                        <EditUserForm setEditing={setEditing} curentProduct={curentProduct} updateProduct={updateProduct}/>
                      </div>):(<div className='add-product'>
                      <h2>Add product</h2>
                      <AddUserForm addProduct={addProduct} products={products}/>
                      </div>)
          }
          
        </div>
        <div className='list-container'>
          <h2>View product</h2>
          <UserTable products={products} deleteItem={deleteItem} editProduct={editProduct} setProduct={setProduct}/>
        </div>
      </div>
    </>
  );
}

export default App;
