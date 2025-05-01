import { useState, useEffect } from "react";
import useBeginnerTrick from "./useBeginnerTrick";

export default function useTrickData() {
	const { data, loading } = useBeginnerTrick();
	const [trickList, setTrickList] = useState([]);

	useEffect(() => {
		if (!loading && data) {
			const tricks = data.map((item) => item.trick);
			setTrickList(tricks);
		}
	}, [loading, data]);

	return [trickList, setTrickList];
}
