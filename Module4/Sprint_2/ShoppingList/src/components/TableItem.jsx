import React from 'react';

const TableItem = ({item,index,handleDelete}) => {
    console.log(item)
    let finalPrice = item.qty*item.price
    let discountedPrice = 0
    if(item.discountApplicable){
        discountedPrice = (0.05*item.price*item.qty).toFixed(2)
        finalPrice = (item.qty*item.price-discountedPrice).toFixed(2)
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{item.itemName}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
            <td>{item.discountApplicable?"YES":"NO"}</td>
            <td>{discountedPrice}</td>
            <td>{finalPrice}</td>
            <td><button onClick = {(e)=>handleDelete(item.id,e)}>Delete</button></td>
        </tr>
    );
};

export default TableItem;