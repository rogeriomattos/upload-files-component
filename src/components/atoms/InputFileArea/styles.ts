import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  background: #f5f5f5;
  border: 2px dashed #b2b2b2;
  border-radius: 4px;
  display: block;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: #eeeeee;
  }
`;

export const FileInput = styled.input`
  display:none;
`;

export const Text = styled.span`
  text-transform: uppercase;
  color: #b2b2b2;
  font-size: 18px;
  font-weight: 400;
`;
