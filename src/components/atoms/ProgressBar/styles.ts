import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #ccc;
  width: 100%;
  height: 10px;
  position: relative;
  overflow: hidden;
`;

type ProgressIndicatorProps = {
  percentProgress: number;
}

export const ProgressIndicator = styled.div<ProgressIndicatorProps>`
  ${(props) => 
    css`
    width: ${props.percentProgress}%;
    `
  };
  background: red;
  height: 100%;
  position: absolute;
`;