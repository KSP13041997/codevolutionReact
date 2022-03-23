import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinder from "./components/EventBinder";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import Calculator from "./components/Calculator";
import NameList from "./components/NameList";
import StyleSheets from "./components/StyleSheets";
import Inline from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      {/*<StyleSheets primary={true} />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <NameList />
      <UserGreeting />
      <ParentComponent/>
      <Greet name="Sparsh" surName="Rathi">
        <p>This is a child prop.</p>
      </Greet>
      <Greet name="Jake" surName="Spearo">
        <button>Action</button>
      </Greet>
      <Greet name="Ron" surName="Veasly" />
      <Welcome name="Sparsh" surname="Rathi" />
      <Welcome name="Jack" surName="Spearo" />
      <Welcome name="Ron" surName="Veasly" /> 

      <Message /> 

      <Counter />

      <FunctionClick />
      <ClassClick /> 

      <EventBinder/>*/}
    </div>
  );
}

export default App;
