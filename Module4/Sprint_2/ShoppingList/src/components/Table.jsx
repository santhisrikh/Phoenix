import React from "react";
import TableItem from "./TableItem";
import "./table.module.css";

const Table = ({ data, filterItem, sortBy, handleDelete }) => {
	// console.log(filtered);
	return (
		<table className = "table table-striped table-bordered">
			<thead>
				<tr>
					<th>S.no</th>
					<th>Item</th>
					<th>Price</th>
					<th>Qty.</th>
					<th>Category</th>
					<th>Discount Applicable</th>
					<th>Discounted Price</th>
					<th>Final Price</th>
				</tr>
			</thead>
			<tbody>
				{data
					.filter((item) => item.category == filterItem || filterItem == "all")
					.sort((a, b) => {
						if (sortBy == null) {
							return 0;
						} else if (sortBy == "asc") {
							return a.price - b.price;
						} else {
							return b.price - a.price;
						}
					})
					.map((item, index) => {
						return (
							<TableItem key={item.id} item={item} index={index + 1} handleDelete={handleDelete} />
						);
					})}
			</tbody>
		</table>
	);
};

export default Table;
