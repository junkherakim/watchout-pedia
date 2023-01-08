import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/tvApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, TVDetail } from '../../../types';


const useOnTheAirTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', popularApi);
  }

export default useOnTheAirTv;