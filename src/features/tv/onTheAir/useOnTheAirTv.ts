import { useQuery } from 'react-query';
import { onTheAirApi } from '../../../apis/tvApi';
import { AxiosResponse, AxiosError } from 'axios';
import { ListResponse, TVDetail } from '../../../types';


const usePopularTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAirTv', onTheAirApi);
  }

export default usePopularTv;