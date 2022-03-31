import { VFC } from 'react';
// Components
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Field from './components/organisms/Field';
// Hooks
import { useSnake } from './hooks/useSnake';

const App: VFC = () => (
  <div className="flex justify-center items-center box-border">
    <div className="app">
      <Header />

      <Field />

      <Footer />
    </div>
  </div>
);

export default App;
