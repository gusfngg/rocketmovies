import styled from "styled-components";
import  { Link } from 'react-router-dom'

export const Container = styled.header`
   grid-area: header;
 
   width: 100%;
   padding: 24px 123px;
   gap: 64px;

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

   display: flex;
   align-items: center;
   justify-content: center;


   h2 {
      font-size: 27px;
      font-weight: 700;
      line-height: 32px;

      color: ${({ theme }) => theme.COLORS.PINK_200};
   }
`

export const Profile = styled(Link)`
   display: flex;
   align-items: center;

   > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
   }

   > div {
      display: flex;
      flex-direction: column;
      margin-right: 9px;
      line-height: 19px;
      width: 100%;
      
      strong {
         font-size: 15px;
         color: ${({theme}) => theme.COLORS.WHITE};
      }

      span {
         font-size: 15px;
         color: ${({theme}) => theme.COLORS.GRAY_100};
      }

   }
   
`

export const Logout = styled.button`
   border: none;
   background: none;

   > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 36px;
   }
`
