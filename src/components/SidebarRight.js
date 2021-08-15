import React from 'react';

function SidebarRight() {
  return (
    <div className='w-14 h-full border-l border-gray-200 flex flex-col'>
      <div className='w-full flex justify-center items-center my-3'>
        <div className='h-6 w-6'>
          <img
            src='https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png'
            alt='calendar'
          />
        </div>
      </div>
      <div className='w-full flex justify-center items-center my-3'>
        <div className='bg-transparent rounded-full hover:shadow-md hover:bg-gray-100 sidebar__btn__right'>
          <img
            src='https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png'
            alt='keep'
            className='object-contain h-6 w-6'
          />
        </div>
      </div>
      <div className='w-full flex justify-center items-center my-3'>
        <div className='h-6 w-6'>
          <img
            src='https://www.gstatic.com/companion/icon_assets/tasks2_2x.png'
            alt='keep'
          />
        </div>
      </div>
      <div className='w-full flex justify-center items-center my-3'>
        <div className='h-6 w-6'>
          <img
            src='https://www.gstatic.com/companion/icon_assets/contacts_2x.png'
            alt='keep'
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
