import * as S from './styles';

type InputFileAreaProps = {
  onChange: (files: FileList | null) => void;
  multiple?: boolean;
};

export const InputFileArea = (
  {
    onChange,
    multiple
  }: InputFileAreaProps
) => {

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.files);
  }

  return (
    <S.Container>
      <S.FileInput 
        type="file"
        multiple={multiple}
        onChange={handleOnChange}
      />
      <S.Text>Click to upload</S.Text>
    </S.Container>
  )
}