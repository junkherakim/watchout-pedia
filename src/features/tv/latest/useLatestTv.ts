import { useQuery } from 'react-query';
import { latestApi } from '../../../apis/tvApi';
import { AxiosResponse, AxiosError } from 'axios';
import { TVDetail } from '../../../types';


const useLatestTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi);
  }

export default useLatestTv;