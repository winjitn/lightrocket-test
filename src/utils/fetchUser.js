import axios from "axios";

export default async (props) => {
  if (!props.user.statusCode) {
    try {
      const res = await axios.get(`/prod?user=${props.match.params.user}`);
      props.setUser(res.data);
    } catch (err) {
      props.setError(err);
    }
  }
};
