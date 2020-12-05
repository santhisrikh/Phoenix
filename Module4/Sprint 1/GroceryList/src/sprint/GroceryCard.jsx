import React from "react";
import AddProduct from "./AddQty";
import styles from "./GroceryCard.module.css"

const GroceryCard =({item}) =>{
    //Destructure the item object property	
		const { product_name, image_url, price, description,is_available } = item;
		return (
			<div className = {styles.card}>
				<div>
					<img src={image_url} alt='logo' />
				</div>
				<div className= {styles.card_body}>
					<h2>{product_name}</h2>
					<p>{description}</p>
					<p>Price :{price}</p>
                    {/* ternary operator to check is_availabe is true or false and change the style accordingly */}
					<button
						style= {is_available ? { backgroundColor: "green" } : { backgroundColor: "red" }}
					>
						{is_available ? "InStock" : "Out of Stock"}
					</button>
				</div>
				<div style={{ margin: "25px" }}>
                    {/* add or reduce the quantity component */}
					<AddProduct />
				</div>
			</div>
		);
	}
export default GroceryCard;
