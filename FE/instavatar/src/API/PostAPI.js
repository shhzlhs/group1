import { api } from "./API";

const getAllPostAPI = () => {
  return api("GET", "posts", null);
};
export { getAllPostAPI };
