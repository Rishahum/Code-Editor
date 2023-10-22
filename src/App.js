import logo from './logo.svg';
import './App.css';
import CodeEditor from './Components/CodeEditor/CodeEditor.jsx';
import SaveCode from './Components/SaveCode/SaveCode.jsx'
function App() {
  return (
    <div className="App">
      <CodeEditor/>
      <SaveCode/>
    </div>
  );
}

export default App;
