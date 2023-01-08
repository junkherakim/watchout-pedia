import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/tvApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, TVDetail } from '../../../types';


const useTopRateTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRatedTv', topRatedApi);
  }

export default useTopRateTv;