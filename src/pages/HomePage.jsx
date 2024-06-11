import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
	const { isAuth } = useSelector((state) => state.auth);
	console.log(isAuth);
	return <div>HomePage</div>;
};

export default HomePage;
