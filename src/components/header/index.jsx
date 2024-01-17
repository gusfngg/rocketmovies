import { Container, Profile } from './style'
import { Input } from '../../components/input'

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Input placeholder="Pesquisar pelo título"></Input>

      <Profile to="/profile">
        <div>
          <strong>Gustavo</strong>
          <span>sair</span>
        </div>

        <img
          src="https://github.com/gusfngg.png"
          alt="Foto do usuário"
        />
      </Profile>

    </Container>
  )
}