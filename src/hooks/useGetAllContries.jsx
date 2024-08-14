import { useQuery } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axios';

const fetchAllContries = async (page = 1, pageSize = 10) => {
  const response = await axiosInstance.get('/all');
  const allCountries = response.data;
  return allCountries.slice((page - 1) * pageSize, page * pageSize);
};

const useGetAllContries = () => {
  return useInfiniteQuery(
    ['all-countries'],
    async ({ pageParam = 1 }) => {
      const pageSize = 10;
      const countries = await fetchAllContries(pageParam, pageSize);
      const hasMore = countries.length === pageSize;
      return {
        countries,
        nextPage: hasMore ? pageParam + 1 : undefined,
      };
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );
};

export default useGetAllContries;
