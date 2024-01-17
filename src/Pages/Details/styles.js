import styled from 'styled-components';

export const  Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas: 
   "header"
   "content";

   > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0; 
}
   

`;

export const Links = styled.ul`
   list-style: none;

   > li {
      margin-top: 12px;

      a {
         color: ${({theme}) => theme.COLORS.WHITE};
      }
   }
`;

export const Content = styled.div`
   max-width: 1490px;
   margin: 0 auto;

   display: flex;
   flex-direction: column;

   .rating {
      display: flex;
       align-items: center;
       gap: 19px;
   }

   .created {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-block: 24px 40px;

      .user {
         display: flex;
         gap: 8px;
         align-items: center;
         font-size: 14px;

         img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 1px solid #3E3B47;
            object-fit: cover;
         }
      }

      .date {
         display: flex;
         align-items: center;
         gap: 8px;
         font-size: 14px;

         svg {
            color: ${({ theme}) => theme.COLORS.PINK_200};
         }
      }

   }

   > button:first-child {
      align-self: start;
      color: ${({ theme }) => theme.COLORS.PINK_200};
      margin-bottom: 24px;
   }

   > h1 {
      font-size: 36px;
      font-weight: 500;
      padding-top: 64px;
   }

   > p {
      font-size: 16px;
      margin-top: 16px;
      text-align: justify;
      font-weight: 400;
      opacity: 0.9;
   }
`;

export const TagLine = styled.div`
   margin-bottom: 40px;
`;