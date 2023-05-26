import EfeitosColaterais from "./componentes/EfeitosColaterais"
import MeuComponente from "./componentes/MeuComponente"
import MeuContador from "./componentes/MeuContador"
import MinhaLista from "./componentes/MinhaLista"
import MeuBotao from "./componentes/MeuBotao"
import Buscardados from "./componentes/Buscardados"

export default function App() {
  // Não pode ser iniciado com letra minúscula
  return (
    <div>
      <h1>Olá mundo, React!</h1>
      <MeuComponente />
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" />

      {/*Estados, eventos e renderizações */}
      <MeuContador />

      {/*Listas e Chaves*/}
      <MinhaLista />

      {/*Efeitos Colaterais*/}
      <EfeitosColaterais/>

      <Buscardados/>
    </div>
  )
}