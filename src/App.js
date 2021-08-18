import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import SidebarRight from './components/SidebarRight';

function App() {
  return (
    <div className='App bg-white'>
      <Header />

      <div className='flex container__main__height__full w-full'>
        <Sidebar />
        <Body />
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
