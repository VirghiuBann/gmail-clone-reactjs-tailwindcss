import React from 'react';
import Icon from '@mdi/react';

function SidebarItem({ mdiIcon, title, number, selected = false }) {
  return (
    <div
      className={`py-2 pl-4 pr-3 hover:bg-gray-100 cursor-pointer rounded-tr-full rounded-br-full ${
        selected && 'bg-red-100 hover:bg-red-100 text-red-500'
      }`}
    >
      <div className='flex items-center relative text-sm'>
        <Icon
          path={mdiIcon}
          size='20px'
          color={selected ? 'red' : '#6B7280'}
          className='mr-4'
        />
        <h3 className={`${selected && 'font-semibold'}`}>{title}</h3>
        <div className={`absolute right-0 ${selected && 'font-semibold'}`}>
          {number > 0 && <span>{number}</span>}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
