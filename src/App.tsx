import { Toaster } from 'react-hot-toast';
import { AppProvider } from 'providers/app';
import { Routes } from 'providers/Routes';
const App = () => {
  return (
    <AppProvider>
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
    </AppProvider>
  );
};

export default App;
