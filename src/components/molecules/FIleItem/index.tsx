import { ProgressBar } from '../../atoms/ProgressBar';
import * as S from './styles';

type FIleItemProps = {
  name: string;
  percentProgress: number;
  onClickDelete?: () => void;
}

export const FIleItem = ({
  name,
  percentProgress,
  onClickDelete
}:FIleItemProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.FileName>
          {name}
        </S.FileName>
        {onClickDelete &&
          <S.Delete onClick={onClickDelete}>X</S.Delete>
        }
      </S.Header>
      <ProgressBar 
        percentProgress={percentProgress}
      />
      <S.ProgressStatus>
        {percentProgress}%
      </S.ProgressStatus>
    </S.Container>
  )
}