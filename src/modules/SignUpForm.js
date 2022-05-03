import React, { useState, useEffect } from "react";

import { Row, Col } from "../components/styleComponents/Grid";

import useFetchData from "../hooks/useFetchData";
import FormElements from "../components/formElements/FormElements";

import Form from "../components/styleComponents/Form";
import Box from "../components/styleComponents/Box";
import Text from "../components/styleComponents/Text";
import Input from "../components/styleComponents/Input";

import ErrorMessage from "../components/formElements/Error";

import { uiValidationPattern } from "../constants/commonConstants";

const SignUpForm = () => {
	const { data } = useFetchData();

	const [errorMessage, setError] = useState("");
	const [sections, setData] = useState({});

	useEffect(() => {
		const { sections } = data;
		if (sections) {
			setData(sections);
		}
	}, [data]);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!event.target.checkValidity()) {
			setError(uiValidationPattern.FORM_ERROR);
			return;
		}
		setError("");
	};
	return (
		<Row alignItems="center" justifyContent="center">
			<Col sm={12} md={6} xl={4}>
				<Box
					backgroundColor="white"
					border="2px solid"
					borderColor={`${!errorMessage ? "border" : "alert"}`}
					padding="md"
					margin="md"
					shadow="md">
					<Form noValidate onSubmit={handleSubmit}>
						<Col sm={12}>
							<Text fontSize="md">{data?.validation?.schema?.title}</Text>
						</Col>
						<Col sm={12}>
							{sections[0]?.fields.map((field) => (
								<FormElements
									key={field.name}
									field={field}
									validation={data?.validation}
								/>
							))}
						</Col>
						<Col sm={12}>
							<Input
								type="submit"
								value="Submit"
								data-testid="submit-element"
								backgroundColor="background"
								color="white"
							/>
							<ErrorMessage errorMessage={errorMessage} />
						</Col>
					</Form>
				</Box>
			</Col>
		</Row>
	);
};

export default SignUpForm;
