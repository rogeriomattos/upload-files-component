import * as S from './styles';

type ProgressBar = {
  percentProgress: number;
}

export const ProgressBar = ({
  percentProgress
}:ProgressBar) => {
  return (
    <S.Container>
      <S.ProgressIndicator 
        percentProgress={percentProgress}
      />
    </S.Container>
  )
}