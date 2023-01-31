import { useQuery } from 'react-query';
import { detailApi } from '../../apis/movieApi';

import { AxiosError, AxiosResponse } from 'axios';
import { MovieDetail } from '../../types';

const useMovieDetail = (query: string) => {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<MovieDetail>>(['movieDetail', query], queryFn);
}

export default useMovieDetail;
