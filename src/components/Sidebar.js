import React from 'react';

function Sidebar() {
  return (
    <div>
      <div className='h-16 pt-2 pl-2'>
        <button className='h-full flex content-center bg-gray-200  rounded-full py-3 px-6'>
          <img
            src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png'
            alt='add compose'
          />
          <div className='m-auto'>
            <span className='pl-1 capitalize'>Compose</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
