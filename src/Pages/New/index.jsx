import  { Link } from 'react-router-dom'
import { TextArea } from '../../components/textArea';
import { MovieItem } from '../../components/movieItem';
import { Section } from '../../components/section';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, Form } from './style';


export function New() {
   return (
      <Container>
         <Header />

         <main>
            <Form>
               <Link to="/">Voltar</Link>
                  <h1>Novo Filme</h1>
               <div className='rating'>    
                  <Input placeholder="Titulo" />
                  <Input placeholder="Sua nota (de 0 a 5)" />
               </div>
               <TextArea placeholder="Observação" />

               <Section title="Marcadores"> 
                  <div className='tags'>
                     <MovieItem value="Emoção"/>
                     <MovieItem value="Suspense"/>
                     <MovieItem isNew placeholder="Novo marcador"/>
                  </div>
               </Section>

               <Button title="Salvar" />
            </Form>
         </main>
      </Container>
   )
}