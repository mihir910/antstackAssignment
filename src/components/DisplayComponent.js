import React from 'react';
import { useState } from 'react';

const initialValues = {
	name: "",
	designation: "",
	type: "",
	phoneNumber: "",
	skills: "",
	dateOfBirth: "",
};

export default function DisplayComponent()
{

	const [count, setCount] = useState(0);
	const [skillscount, setSkillsCount] = useState(0);

	const [values, setValues] = useState(initialValues);

	console.log("initialValues")
	console.log(values)
	console.log("here it is")
	const handleInputChange = (e) =>
	{
		const { name, value } = e.target;
		console.log(name);
		console.log(value);
		console.log([name])
		setValues({
			// ...values,
			[name]: value,
		});
	};

	function handleAddContact()
	{
		return setCount(count + 1);
	}

	function handleAddSkills()
	{
		return setSkillsCount(skillscount + 1);
	}

	const AddedElement = () =>
	<>
			<div className='row m-1'>
				<input type='text' value={values.type}
					onChange={handleInputChange} name='Type' placeholder='Type' className='mr-5'>
				</input>
				<input type='number' value={values.phoneNumber}
					onChange={handleInputChange} name='Phone Number' placeholder='Phone Number' ></input>
			</div>
		</>;

	const AddSkillsElement = () =>
		<>
			<div style={{ "marginLeft": "1%" }}>
				<input type='text' value={values.skills}
					onChange={handleInputChange} name='Skills' ></input>
			</div>
		</>;

	return (
		<div className='container p-2 mb-2 divContainer'>
			<div className='row p-3' style={{ "textAlign": "center" }} >
				<label className='pr-5'>Name</label>
				<input type='text' value={values.name}
					onChange={handleInputChange} name='Name' placeholder='Name'></input>
			</div>
			<div className='row p-3' style={{ "textAlign": "center" }} >
				<label className='pr-5'>Designation</label>
				<input type='text' value={values.company}
					onChange={handleInputChange} name='Designation' placeholder='Designation'></input>
			</div>
			<div className='row p-3' style={{ "textAlign": "center" }} >
				<label className='pr-5'>Contact Details</label>
				<AddedElement></AddedElement>
				{[...Array(count)].map((_, i) => <AddedElement key={i} />)}

				<div onClick={() => handleAddContact()}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
				</div>
			</div>
			<div className='row p-3' style={{ "textAlign": "center" }} >
				<label className='pr-5'>Skills</label>
				<AddSkillsElement></AddSkillsElement>
				{[...Array(skillscount)].map((_, j) => <AddSkillsElement key={j} />)}
				<div onClick={() => handleAddSkills()}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
				</div>
			</div>

			<div className='row p-3' style={{ "textAlign": "center" }} >
				<label className='pr-5'>Date Of Birth</label>
				<input type='date' value={values.dateOfBirth}
					onChange={handleInputChange} name='Date OF Birth' ></input>
			</div>
		</div>);
}
