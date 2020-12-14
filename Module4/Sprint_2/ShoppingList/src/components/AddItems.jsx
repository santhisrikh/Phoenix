import React from "react";
import Table from "./Table";
import { v4 as uuidv4 } from "uuid";
import CategoryList from "./CategoryList";

class AddItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			itemName: "",
			price: "",
			qty: "",
			discountApplicable: false,
			data: [],
			filterItem: "all",
			sortMethod: null,
			categories: [],
			category: "",
		};
	}
	//On load make fetch request and get all categories
	componentDidMount() {
		fetch("https://mock-heroku-test.herokuapp.com/categories")
			.then((res) => res.json())
			.then((res) => {
				this.setState(
					{
						categories: res,
					},
					() => console.log(this.state.categories)
				);
			});
	}
	handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		let val = type === "checkbox" ? checked : value;
		this.setState({
			[name]: val,
			id: uuidv4(),
		});
	};
	//on submit add all item details to the data array
	handleSubmit = (e) => {
		e.preventDefault();
		const { data, ...payload } = this.state;
		this.setState({
			data: [...data, payload],
		});
	};
	//on change get the filter by target value and set the state
	handleFilter = (e) => {
		console.log(e.target.value);
		this.setState({
			filterItem: e.target.value,
		});
	};
	//on change get the sort by target value and set the  state
	handleSort = (e) => {
		this.setState({
			sortMethod: e.target.value,
		});
	};
	handleDelete = (id, e) => {
		let newData = this.state.data.filter((item) => item.id != id);
		this.setState({
			data: newData,
		});
	};

	render() {
		const { categories, itemName, price, discountApplicable, qty, data, category } = this.state;
		console.log(data);
		return (
			<div style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}>
				<h1 className='text-success'>Shopping List</h1>
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className='form-group my-2'>
							<input
								className='form-control'
								name='itemName'
								type='text'
								placeholder='enter name'
								value={itemName}
								onChange={this.handleChange}
							/>
						</div>
						<div className='form-group my-2'>
							<input
								className='form-control'
								name='price'
								type='number'
								placeholder='Enter Price'
								value={price}
								onChange={this.handleChange}
							/>
						</div>
						<div className='form-group form-check my-2'>
							Discount(5%) :
							<input
								name='discountApplicable'
								className='form-check-input'
								type='checkbox'
								checked={discountApplicable}
								onChange={this.handleChange}
							/>
						</div>
						<div style = {{display:'flex',margin:"2px"}}>
							<select value={category} name='category' onChange={this.handleChange}>
								<option>Select category</option>
								{categories && <CategoryList data={categories} />}
							</select>
							<div>
								<select value={qty} onChange={this.handleChange} name='qty'>
									<option value='select'>--select Qty--</option>
									{[1, 2, 3, 4, 5].map((a) => (
										<option key={a} value={a}>
											{a}
										</option>
									))}
								</select>
							</div>
						</div>
						<input type='submit'  className='btn btn-danger' value='submit' />
					</form>
				</div>
				<div style={{ width: "500px" }}>
					{data.length != 0 && (
						<div>
							<div>
								<select
									className='form-control my-2'
									onChange={this.handleFilter}
									value={this.state.filtered || ""}
								>
									<option value='filter'>--filterBy--</option>
									<option value='all'>All</option>
									{categories && <CategoryList data={categories} />}
								</select>
							</div>

							<div>
								<select
									className='form-control my-2'
									onChange={this.handleSort}
									value={this.state.sortMethod || ""}
								>
									<option value='sort'>--Sort price By--</option>
									<option value='asc'>asc</option>
									<option value='desc'>desc</option>
								</select>
							</div>
							<Table
								data={data}
								filterItem={this.state.filterItem}
								sortBy={this.state.sortMethod}
								handleDelete={this.handleDelete}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}
export default AddItems;
