import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    //inits Materialze JS
    M.AutoInit();
  }, []);
  return (
    <div>
      <p>Hi IT Logger</p>
    </div>
  );
}

export default App;
