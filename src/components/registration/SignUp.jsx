import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { authPost } from "../../store/authSlice/authThunk";
import { useNavigate } from "react-router";
import { Snowfall } from "react-snowfall";

const StyledBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	// marginTop: 100, // Updated marginTop
	maxWidth: 500,
	margin: "100px auto",
	borderRadius: 10,
	padding: 16, // equivalent to theme.spacing(2)
	// backgroundColor: "#fff", // using plain color instead of theme
	boxShadow: "0 3px 6px rgba(0,0,0,0.6)", // Custom shadow
	backdropFilter: "blur(10px)",
});

const StyledTextField = styled(TextField)({
	// marginTop: 16, // equivalent to theme.spacing(2)
	// boxShadow: "0px 0px 0.7rem blue",
});

const StyledButton = styled(Button)({
	marginTop: 16, // equivalent to theme.spacing(2)
	boxShadow: "0px 0px 0.7rem blue",
});

const SignUp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handlerName = (e) => setName(e.target.value);
	const handlerEmail = (e) => setEmail(e.target.value);
	const handlerPassword = (e) => setPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newDate = {
			name,
			email,
			password,
		};
		dispatch(authPost({ newDate, navigate }));
		setName("");
		setEmail("");
		setPassword("");
	};

	return (
		<StyledBox component="form" onSubmit={handleSubmit}>
			<Typography
				sx={{
					fontFamily: "monospace",
					fontSize: 30,
					fontWeight: 700,
					color: "black",
					textAlign: "center",
					textShadow: "0px 0px 10px blue",
				}}>
				Registration
			</Typography>
			
			<StyledTextField
				label="Имя пользователя"
				value={name}
				onChange={handlerName}
				margin="normal"
				fullWidth
				required
			/>
			<StyledTextField
				label="Почта"
				type="email"
				value={email}
				onChange={handlerEmail}
				margin="normal"
				fullWidth
				required
			/>
			<StyledTextField
				label="Пароль"
				type="password"
				value={password}
				onChange={handlerPassword}
				margin="normal"
				fullWidth
				required
			/>
			<StyledButton type="submit" variant="contained" color="primary">
				Sign Up
			</StyledButton>
		</StyledBox>
	);
};

export default SignUp;
