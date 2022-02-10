import React from "react";

import Sidebar from "./components/sidebar/component";

function App() {
  return (
    <section className="app">
      <Sidebar />
      <div id="main" className="main">
        Hi!
      </div>
    </section>
  );
}

export default App;
