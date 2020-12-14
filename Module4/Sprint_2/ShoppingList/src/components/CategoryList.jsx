import React from "react";

const CategoryList = ({ data }) => {
	console.log(data);
	return data.map((item) => {
		return (
			<option key={item.category_id} value={item.category_name}>
				{item.category_name}
			</option>
		);
	});
};

export default CategoryList;
