import React from 'react';
import Icon from '@mdi/react';

function SidebarItem({ mdiIcon, title, number }) {
  return (
    <div className='py-2 pl-4 pr-3 hover:bg-gray-100 cursor-pointer rounded-tr-full rounded-br-full'>
      <div className='flex items-center relative text-sm'>
        <Icon path={mdiIcon} size='20px' color='#6B7280' className='mr-3' />
        <h3>{title}</h3>
        <div className='absolute right-0'>
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
