import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
      <Header style={{position: "fixed", top: 0}}/>
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
