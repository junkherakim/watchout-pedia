import React from 'react';
import styled from '@emotion/styled';

import Slider from "../../../components/Slider";
import useNowPlayingMovie from './useNowPlayingMovie';
import Card from '../../../components/Card';

const Base = styled.div`
    //margin-top: 60px;
    margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const NowPlayngSection: React.FC = () => {
  const { data, isLoading } = useNowPlayingMovie();

  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
      <Title>Now Playing</Title>
      { 
        isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {
              data.data.results.map(movie => (
                <Card 
                  key={movie.id}
                  linklUrl={`/movie/${movie.id}`}
                  title={movie.title}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
                  voteAverage={movie.vote_average}
                  year={getYear(movie.release_date)}
                />
              ))
            }
          </Slider>
        )
      } 
    </Base>
  )
}

export default NowPlayngSection;

