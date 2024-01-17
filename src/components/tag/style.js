import styled from "styled-components";

export const Container = styled.span`
   font-size: 14px;
   font-family: 'Roboto';
   padding: 5px 16px;
   
   border-radius: 8px;
   margin-right: 6px;
   color: ${({theme}) => theme.COLORS.WHITE};
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
   text-align: center;
   
   font-weight: 400;
`
