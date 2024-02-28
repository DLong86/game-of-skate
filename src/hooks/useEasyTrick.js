import easyTricks from "../data/easyTricks.json";

const useEasyTrick = () => {
  const data = easyTricks;
  const loading = false;
  const error = null;

  return { data, loading, error };
};

export default useEasyTrick;
