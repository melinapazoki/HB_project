import { useState, useEffect } from "react";
import config from "../config";

const useFetchData = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			fetchFormData();
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const fetchFormData = () => {
		return fetch(config.API_URL)
			.then((response) => response.json())
			.then((data) => setData(data));
	};
	return { data, loading };
};

export default useFetchData;
