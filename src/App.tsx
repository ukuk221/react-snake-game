import { VFC } from 'react';
// Components
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Field from './components/organisms/Field';
// Hooks
import { useSnake } from './hooks/useSnake';
// Utils
import { common } from './utils/common';

const App: VFC = () => {
  const { initFields } = common();
  const fields = initFields(35);

  return (
    <div className="flex justify-center items-center box-border">
      <div className="app">
        <Header />

        <Field fields={fields} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
