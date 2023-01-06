import { useQuery } from 'react-query';
import { nowPlayingApi } from '../../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, MovieDetail } from '../../../types';


const useNowPlayingMovie = () => {
    return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
  }

export default useNowPlayingMovie;