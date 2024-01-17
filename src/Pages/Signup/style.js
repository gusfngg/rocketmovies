import styled from 'styled-components';
import backgoundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_200};
    font-weight: 500;
   }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
   }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.PINK_200};
   }
  

`
export const Background = styled.div`
   flex: 1;
   background: url(${backgoundImg}) no-repeat center center;
   background-size: cover;

   opacity: 0.4;
`;