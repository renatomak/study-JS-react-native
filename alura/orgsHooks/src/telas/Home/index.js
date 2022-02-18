import React from 'react';
import Produtores from './components/Produtores';
import Topo from './components/Topo';

const Home = () => {
  return (
    <>
      <Produtores topo={Topo} />
    </>
  );
};

export default Home;
