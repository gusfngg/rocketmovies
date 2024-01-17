import { FiPlus, FiSearch } from "react-icons/fi";
import  { Link } from 'react-router-dom'

import { Container, Content } from './style'
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { MovieBlock } from "../../components/movieBlock"

export function Home() {
   return (
      <Container>
         <Header></Header>

         <Content>
         
            <header>
               <h1>Meus filmes</h1>
               <Link to="/new">
               <Button title="Adicionar filme" icon={FiPlus}/> 
               </Link>
            </header>
               <MovieBlock data={{
                   title: 'Interestellar',
                    tags: [
                     {id: 1, name: 'react'},
                     {id: 2, name: 'rocketseat'}
                    ]
                   }}
                   />

               <MovieBlock data={{
                   title: 'Peaky Blinders',
                    tags: [
                     {id: 1, name: 'Suspense'},
                     {id: 2, name: 'Sigma'}
                    ]
                   }}
                   />

               <MovieBlock data={{
                   title: 'Breaking Bad',
                    tags: [
                     {id: 1, name: 'Walter White'},
                     {id: 2, name: 'Suspense'}
                    ]
                   }}
                   /> 
            
         </Content>

      </Container>
   )
}