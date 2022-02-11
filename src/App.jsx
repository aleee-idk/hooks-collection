import React from "react";

import Sidebar from "./components/sidebar/Component";

// Hooks
import Request from "./components/hooks/fetch/Request";

const hooks = [Request];

function App() {
  return (
    <section className="app">
      <Sidebar />
      <div id="main" className="main">
        {hooks.map((Item, idx) => (
          <Item key={idx} />
        ))}
      </div>
    </section>
  );
}

export default App;
