import salad from './salad.png';
import jennyJack from './jenny-jack.png';
import grow from './grow.png';
import potager from './potager.png';
import green from './green.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const distancia = gerarNumeroAleatorio(1, 500);
const estrelas = gerarNumeroAleatorio(1, 5);

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia,
      estrelas,
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia,
      estrelas,
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia,
      estrelas,
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia,
      estrelas,
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia,
      estrelas,
    },
  ],
};

export default produtores;
