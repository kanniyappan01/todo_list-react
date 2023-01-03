import React from 'react'

const UserTable = ({products,deleteItem,editProduct,setProduct}) => {
    const decrQuantity = (product)=>{
        setProduct(products.map((prod)=> prod.id === product.id ? {...product,qty:product.qty-1}:prod))
        if(product.qty <=1){
            deleteItem(product.id)
        }
    }
    const incrQuantity = (product)=>{
        setProduct(products.map((prod)=> prod.id === product.id ? {...product,qty:product.qty+1}:prod))
    }
  return (
    <div>
    <table cellSpacing={10} width="100%">
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.length >0? (
                products.map((product ,index)=>(
                    <tr key={product.id}>
                        <td>{index}</td>
                        <td>{product.productName}</td>
                        <td>₹ {product.price}</td>
                        <td>
                            <div className='qty-btn'>
                                <button onClick={()=>decrQuantity(product)} className='decr-btn btn' data-decr="decr">-</button>
                                <p>{product.qty}</p>
                                <button onClick={()=>incrQuantity(product)} className='incr-btn btn' data-incr="incr">+</button>
                            </div>
                        </td>
                        <td>
                            <button onClick={()=>editProduct(product)} className='edit-button button'>Edit</button>
                            <button onClick={()=>deleteItem(product.id)} className='delete-button button'>Delete</button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={5}>no user data</td>
                </tr>
            )}
            
        </tbody>
    </table>
    </div>
  )
}

export default UserTable