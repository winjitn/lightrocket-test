import axios from "axios";

export default async (userName, setError, setUser) => {
  try {
    const res = await axios.get(`/prod?user=${userName}`);
    setUser(res.data);
  } catch (err) {
    setError(err);
  }
};
