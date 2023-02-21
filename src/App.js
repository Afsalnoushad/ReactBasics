import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Counter /> */}
     {/*  <Message/> */}
      {/* <Greet name="Bruce" superhero="BatMan" >
      <p>This is children props</p>
     </Greet>
     <Greet name="Clark" superhero="SuperMan">
      <button>Action</button>
     </Greet> */}
     {/* <Greet name="Diana" superhero="WonderWomen" />
    <Welcome name="Clark" superhero="SuperMan"/> */}
     {/*  <Welcome name="Bruce" superhero="BatMan"   />
     <Welcome name="Diana" superhero="WonderWomen" /> */} 
    {/* <Hello /> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <EventBind/> */}
    {/* <ParentComponent/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
    {/* <StyleSheets primary={true} /> */}
    {/* <Inline/> */}
    <Form/>
    </div>
  );
}

export default App;
