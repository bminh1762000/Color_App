import React from "react";
import "./App.css";

import ColorList from "./components/color-list/color-list.component";
import FormAddColor from "./components/form-add-color/form-add-color.component";

function App() {
  return (
    <div className="App">
      <FormAddColor />
      <ColorList />
    </div>
  );
}

export default App;
