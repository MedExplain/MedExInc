import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 100px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;
