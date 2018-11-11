import axios from "axios";

export const linksResolver = links => {
  return Promise.all(
    links.map(link => axios.get(link.url).then(({ data }) => data))
  );
};
