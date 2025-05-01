import beginnerTricks from "../data/beginnerTricks.json";

const useBeginnerTrick = () => {
	const data = beginnerTricks;
	const loading = false;
	const error = null;

	return { data, loading, error };
};

export default useBeginnerTrick;
