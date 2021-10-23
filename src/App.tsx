import { AppProvider } from 'providers/app';
import { Routes } from 'providers/Routes';
const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
