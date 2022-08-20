import * as S from './styles';

type FileUploadAreaProps = {
  onChange: (files: FileList | null) => void;
};

export const FileUploadArea = (
  {
    onChange
  }: FileUploadAreaProps
) => {

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.files);
  }

  return (
    <S.Container>
      <S.FileInput 
        type="file"
        onChange={handleOnChange}
      />
      <S.Text>Click to upload</S.Text>
    </S.Container>
  )
}