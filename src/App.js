import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import './App.css';

function App() {
  useEffect(() => {
    //inits Materialze JS
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Logs></Logs>
        <AddBtn></AddBtn>
        <EditLogModal></EditLogModal>
        <AddLogModal></AddLogModal>
        <AddTechModal></AddTechModal>
        <TechListModal></TechListModal>
      </div>
    </Fragment>
  );
}

export default App;
