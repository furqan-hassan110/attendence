import logo from './logo.svg';
import './App.css';
import Form from './modules/Form/Index';
import Dashboard from './modules/Dashboard';

function App() {
  return (
    <div className="bg-[#edf3fc] h-screen flex justify-center items-center">
      {/* <Form></Form> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
