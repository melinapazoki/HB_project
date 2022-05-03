import { useState, useEffect } from "react";
import givenData from "../data/data.json";

const useFetchData = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setData(givenData);
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return { data, loading };
};

export default useFetchData;
