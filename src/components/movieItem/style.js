import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   
   background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
   color: ${({ theme }) => theme.COLORS.GRAY_300};
   border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

   border-radius: 8px;
   padding-right: 8px;

   > button {
      border: none;
      background: none;
   }

   .button-delete {
      color: ${({ theme }) => theme.COLORS.RED};
   }

   .button-add {
      color: ${({ theme }) => theme.COLORS.PINK_200};
   }

   > input {
      height: 56px;
      width: 100%;

      padding: 12px;
      
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: none;
      border: none;
      
      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
   }

`