import React ,{useState} from 'react';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';

function App() {
  const [page,setPage]=useState('layout1');

  const layout1ButtonHandler = () =>{
    setPage('layout1');
  }

  const layout2ButtonHandler = () =>{
    setPage('layout2');
  }

  const layout3ButtonHandler = () =>{
    setPage('layout3');
  }

  const layout4ButtonHandler = () =>{
    setPage('layout4');
  }

  return (
    <div className="mt-10 items-center">
      <h1 className="text-white text-5xl text-center m-10">Grid Layouts</h1>
      <div className="flex justify-evenly">
        <button className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700" onClick={layout1ButtonHandler}>Layout 1</button>
        <button className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700" onClick={layout2ButtonHandler}>Layout 2</button>
        <button className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700" onClick={layout3ButtonHandler}>Layout 3</button>
        <button className="bg-red-400 text-white rounded-lg p-3 shadow-lg hover:bg-red-700" onClick={layout4ButtonHandler}>Layout 4</button>
      </div>
      {page === 'layout1' && <Layout1/>}
      {page === 'layout2' && <Layout2/>}
      {page === 'layout3' && <Layout3/>}
      {page === 'layout4' && <Layout4/>}
    </div>
  );
}
export default App;
