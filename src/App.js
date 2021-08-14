import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className='App bg-white h-screen'>
      <div className='border-b border-gray-300'>
        <Header />
      </div>
      <div className='flex h-screen'>
        <div className='w-64'>
          <Sidebar />
        </div>
        <div className='flex-1 bg-green-400'>
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
