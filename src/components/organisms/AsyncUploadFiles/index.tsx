import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputFileArea } from '../../atoms/InputFileArea';
import { FIleItem } from '../../molecules/FIleItem';
import * as S from './styles';

type FileUpload = {
  uuid: string;
  name: string;
  percentProgress: number;
  file: File
}

type AsyncUploadFilesProps = {
  onUploadRequest: (
    file: File,
    onUploadProgress: (progressEvent: any) => any,
    onUploadFailed: () => void
  ) => void;
}

export const AsyncUploadFiles = ({
  onUploadRequest
}: AsyncUploadFilesProps):JSX.Element => {
  const [fileUploadList, setFileUploadList] = useState<FileUpload[]>([]);

  const onUploadProgress = (progressEvent:any, fileUuid:string):void => {
    const percentProgress = (progressEvent.loaded > 0)
      ? ((progressEvent.loaded * 100) / progressEvent.total) : 0;

    setFileUploadList(state => state.map((item):FileUpload => ((item.uuid === fileUuid)
      ? {
        ...item,
        percentProgress
      }
      : item)));
  };

  const onUploadFailed = (fileUuid: string): void => {
    setFileUploadList(state => state.filter(item => item.uuid !== fileUuid));
  };

  const onChangeInputFile = (fileList: FileList | null): void => {
    if (fileList !== null) {
      const newFiles = Array.from(fileList).map((file):FileUpload => ({
        uuid: uuidv4(),
        name: file.name,
        percentProgress: 0,
        file
      }));

      setFileUploadList(oldArray => [
        ...oldArray,
        ...newFiles
      ]);

      newFiles.forEach((fileUpload) => {
        onUploadRequest(
          fileUpload.file,
          progressEvent => onUploadProgress(progressEvent, fileUpload.uuid),
          () => onUploadFailed(fileUpload.uuid)
        );
      });
    }
  };

  return (
    <S.Container>
      <InputFileArea
        onChange={onChangeInputFile}
        multiple
      />
      {fileUploadList.map((fileUpload) => (
        <FIleItem
          key={fileUpload.uuid}
          name={fileUpload.name}
          percentProgress={fileUpload.percentProgress}
        />
      ))}
    </S.Container>
  );
};
