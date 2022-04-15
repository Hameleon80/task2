import React, { useState } from 'react';
import './styles/App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import { store } from './store/store';

export interface RootSelector{
  notesArr: {Notes: {header: string[], notes: string[]}, Archive: {header: string[], notes: string[]}}
}

function App() {
  const [modalActive, setActive] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Note table
        </h3>
      </header>
      <Table dataObject={store.getState()} isArchive={false}/>
      <div className='button_create'><button onClick={()=>setActive(true)}>Create Note</button></div>
      <header className="App-header">
        <h3>
          Archive table
        </h3>
      </header>
      <Table dataObject={store.getState()} isArchive={true}/>
      <Modal active={modalActive} setModalActive={setActive}/>
    </div>
  );
}

export default App;