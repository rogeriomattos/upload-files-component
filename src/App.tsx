import * as S from './AppStyles';
import { AsyncUploadFiles } from './components/organisms/AsyncUploadFiles';

function App() {
  const onUpload = (
    file: File, 
    onUploadProgress: (progressEvent: any) => any, 
    onUploadFailed: () => void
  ) => {

  }

  return (
    <S.Container>
      <AsyncUploadFiles 
        onUploadRequest={onUpload}
      />      
    </S.Container>
  );
}

export default App;
