import { useState } from 'react';
import Form from './components/Form/Form';
import './styles/main.scss';
import Validations from './components/Validations/Validations';

function App() {
  const [password, setPassword] = useState('');
  const [strongPassword, setStrongPassword] = useState(false);
  return (
    <div className="App">
      <Form strongPassword={strongPassword} setPassword={setPassword} />
      <Validations setStrongPassword={setStrongPassword} password={password} />
    </div>
  );
}

export default App;
