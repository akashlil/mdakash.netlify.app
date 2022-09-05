import useSWR from "swr";

const swrFetchData = (url) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  return data;
};

export default swrFetchData;
