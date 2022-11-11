import React from 'react';
import './App.css';
import Layout from "./component/common/Layout";
import Calculator from "./component/calculator";
import {ContextProvider} from "./context/context";

function App() {
  return (
    <Layout>
      <ContextProvider>
          <Calculator/>
      </ContextProvider>
    </Layout>
  );
}

export default App;
