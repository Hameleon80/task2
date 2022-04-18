import { useState } from 'react';
import './styles/App.css';
import Table from './components/Table';
import { store } from './store/store';
import Modal from './components/Modal';
import { ModalArchiveNotes } from './components/ModalArchiveNotes';

function App() {
  
  //hooks
  const [modalActive, setActive] = useState(false);
  const [modalArchiveIsActive, setModalArchiveIsActive] = useState(false);
  const [isChanget, setChanget] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [keyToEditNote, setKeyToEditNote] = useState(0);
  const [modalName, setModalName] = useState('');
  const [modalCategory, setModalCategory] = useState('Task');
  const [modalText, setModalText] = useState('');
  const [categoryShow, setCategoryShow] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Note table
        </h3>
      </header>
{/* Table of notes */}
      <Table dataObject={store.getState()} isArchive={false} setChanget={setChanget} isChanget={isChanget} 
             setActiveModal={setActive} setModalName={setModalName} setModalCategory={setModalCategory} setIsEdit={setIsEdit}
             setKeyToEditNote={setKeyToEditNote} setModalText={setModalText} setModalArchiveIsActive={setModalArchiveIsActive}
             setCategoryShow = {setCategoryShow}/>
{/* Button Create Note */}
      <div className='button_create'><button onClick={()=>{setActive(true); setModalName(""); setModalText("")}}>Create Note</button></div>
      <header className="App-header">
        <h3>
          Archive table
        </h3>
      </header>
{/* Table Archive notes */}
      <Table dataObject={store.getState()} isArchive={true} setChanget={setChanget} isChanget={isChanget} 
             setActiveModal={setActive} setModalName={setModalName} setModalCategory={setModalCategory} setIsEdit={setIsEdit}
             setKeyToEditNote={setKeyToEditNote} setModalText={setModalText} setModalArchiveIsActive={setModalArchiveIsActive}
             setCategoryShow = {setCategoryShow}/>
{/* Modal window create/edit note */}
      <Modal active={modalActive} setModalActive={setActive} nameNote ={modalName} setModalName={setModalName} 
             nameCategory={modalCategory} setModalCategory={setModalCategory} isEdit={isEdit} setIsEdit={setIsEdit}
            keyToEditNote={keyToEditNote} noteText={modalText} setModalText={setModalText}/>
{/* Modal window view/unarchive archive notes */}
      <ModalArchiveNotes tableHead={store.getState().Notes.header} archiveNotes={store.getState().Archive.notes} 
                active={modalArchiveIsActive} setModalActive={setModalArchiveIsActive} categoryShow={categoryShow}/>
    </div>
  );
  
}

export default App;