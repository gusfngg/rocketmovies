import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './style'

export function MovieItem ( {isNew, value, oncClick, ...rest}) {
   return (
      <Container isNew={isNew}>
         <input 
         type="text"
         value={value}
         readOnly = {!isNew}
         {...rest} />

         <button
            type="button"
            onClick={oncClick}
            className={isNew ? 'button-add' : 'button-delete'}
         >
            { isNew ? <FiPlus/> : <FiX/> }
         </button>
      </Container>
   )
}