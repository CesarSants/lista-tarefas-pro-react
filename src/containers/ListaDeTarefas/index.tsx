import Tarefa from '../../components/Tarefa'
// import { Titulo } from '../../components/Tarefa/styles'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

// const tarefas = [
//   {
//     titulo: 'Estudar TypeScript',
//     descricao: 'Ver a aula 3 da EBAC',
//     prioridade: 'importante',
//     status: 'pendente'
//   },
//   {
//     titulo: 'Pagar a conta de internet',
//     descricao: 'baixar fatura no gmail',
//     prioridade: 'urgente',
//     status: 'concluída'
//   },
//   {
//     titulo: 'Ir para a academia',
//     descricao: 'Fazer treino A',
//     prioridade: 'importante',
//     status: 'pendente'
//   }
// ]

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'baixar fatura no gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino A',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
      {/* <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li> */}
    </ul>
  </S.Container>
)

export default ListaDeTarefas
