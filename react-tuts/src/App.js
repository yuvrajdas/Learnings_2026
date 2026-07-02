import { lazy, Suspense, useState } from 'react';
import './App.css'; 
import UserForm from './topics/form/UserForm';
import LifeCycleHookInFunctionalComponet from './topics/LifeCycleHookInFunctionalComponet';
import Counter from './topics/Memo/Counter';
import UseReducer from './topics/Memo/UseReducer';
import { LYFCHookClass } from './topics/LYFCHookClass';
import Table from './topics/Table';
const LazyLoadingCom = lazy(()=>import('../src/topics/LazyLoadingCom'))

function App() {

  const [t, setT] = useState(true);
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadingCom />
        </Suspense>
        {/* <PureComponent /> */}
        {/* <UserForm /> */}
        {/* <Counter /> */}
        {/* <UseReducer /> */}
        {/* {t && <LifeCycleHookInFunctionalComponet /> } */}
        {/* <LYFCHookClass /> */}
        <Table />
      
     <button onClick={()=>setT(!t)}>toggle</button>
    </div>
  );
}

export default App;
