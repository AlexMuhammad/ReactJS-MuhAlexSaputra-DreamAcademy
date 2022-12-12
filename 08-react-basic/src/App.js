import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TableBody from "./components/TableBody";

function App() {
  return (
    <React.Fragment>
      <div className="">
        <Header />
      </div>
      <div className="mt-10">
        <Form />
      </div>
      <div className="mt-10">
      <TableBody/>
      </div>
    </React.Fragment>
  );
}

export default App;
