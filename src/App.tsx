import React, { useState } from 'react';
import './styles/App.css';
// import Modal from './components/Modal';
import Table from './components/Table';
import { store } from './store/store';
import Modal from './components/Modal';

function App() {
  
  const [modalActive, setActive] = useState(false);
  const [isChanget, setChanget] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [keyToEditNote, setKeyToEditNote] = useState(0);
  const [modalName, setModalName] = useState('');
  const [modalCategory, setModalCategory] = useState('');
  const [modalText, setModalText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Note table
        </h3>
      </header>

      <Table dataObject={store.getState()} isArchive={false} setChanget={setChanget} isChanget={isChanget} 
             setActiveModal={setActive} setModalName={setModalName} setModalCategory={setModalCategory} setIsEdit={setIsEdit}
             setKeyToEditNote={setKeyToEditNote} setModalText={setModalText}/>

      <div className='button_create'><button onClick={()=>{setActive(true); setModalName(""); setModalText("")}}>Create Note</button></div>
      <header className="App-header">
        <h3>
          Archive table
        </h3>
      </header>

      <Table dataObject={store.getState()} isArchive={true} setChanget={setChanget} isChanget={isChanget} 
             setActiveModal={setActive} setModalName={setModalName} setModalCategory={setModalCategory} setIsEdit={setIsEdit}
             setKeyToEditNote={setKeyToEditNote} setModalText={setModalText}/>

      <Modal active={modalActive} setModalActive={setActive} nameNote ={modalName} setModalName={setModalName} 
             nameCategory={modalCategory} setModalCategory={setModalCategory} isEdit={isEdit} setIsEdit={setIsEdit}
            keyToEditNote={keyToEditNote} noteText={modalText} setModalText={setModalText}/>
    </div>
  );
  
}

export default App;