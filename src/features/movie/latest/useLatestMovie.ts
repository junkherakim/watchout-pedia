import { useQuery } from 'react-query';
import { latestApi } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { MovieDetail } from '../../../types';


const useLatestMovie = () => {
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);
  }

export default useLatestMovie;