import { Container } from './style'

export function Button({ title, icon: Icon, loading}) {
   return (
   <Container
      type='button'
      disabled={loading}
   >
      {Icon && <Icon size={20}/>}
      { loading ? 'Carregando...' : title }
   </Container>
)
}