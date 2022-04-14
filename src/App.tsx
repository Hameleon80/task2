import React, { useState } from 'react';
import './styles/App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import { useSelector } from 'react-redux';

export interface RootSelector{
  notesArr: {Notes: {header: string[], notes: string[]}, Archive: {header: string[], notes: string[]}}
}

function App() {
  const [modalActive, setActive] = useState(false);
  const notes = useSelector((state: RootSelector) => state.notesArr);
  console.log(notes);

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Note table
        </h3>
      </header>
      <Table dataObject={notes} isArchive={false}/>
      <div className='button_create'><button onClick={()=>setActive(true)}>Create Note</button></div>
      <header className="App-header">
        <h3>
          Archive table
        </h3>
      </header>
      <Table dataObject={notes} isArchive={true}/>
      <Modal active={modalActive} setModalActive={setActive}/>
    </div>
  );
}

export default App;