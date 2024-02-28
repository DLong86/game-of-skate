import { useState, useEffect } from "react";
import useEasyTrick from "./useEasyTrick";

export default function useTrickData() {
  const { data, loading } = useEasyTrick();
  const [trickList, setTrickList] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      const tricks = data.map((item) => item.trick);
      setTrickList(tricks);
    }
  }, [loading, data]);

  return [trickList, setTrickList];
}
