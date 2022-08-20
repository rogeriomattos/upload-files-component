import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  background: #f5f5f5;
  border: 2px solid #b2b2b2;
  border-radius: 4px;
  width: 100%;
`;

export const Header = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: .5rem;
`;

export const FileName = styled.span`
  display: block;
  color: #b2b2b2;
  font-size: 18px;
  font-weight: 600;
`;

export const Delete = styled.span`
  display: block;
  color: #b2b2b2;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const ProgressStatus = styled.span`
  display: block;
  color: #b2b2b2;
  font-size: 18px;
  font-weight: 400;
  text-align: right;
  margin-top: 0.15rem;
`;