import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline } from '@mdi/js';
import { mdiStarOutline } from '@mdi/js';
import { mdiLabelVariantOutline } from '@mdi/js';

function BodyListItem({ title = '' }) {
  const iconColor = '#6B7280';
  return (
    <div className='flex border-b border-gray-100 hover:bg-gray-100 cursor-pointer h-8'>
      <div className='flex-initial flex items-center'>
        <button className='px-1'>
          <Icon path={mdiCheckboxBlankOutline} size='20px' color={iconColor} />
        </button>
        <button className='px-1'>
          <Icon path={mdiStarOutline} size='20px' color={iconColor} />
        </button>
        <button className='px-1'>
          <Icon path={mdiLabelVariantOutline} size='20px' color={iconColor} />
        </button>
      </div>

      <div className='flex-initial flex items-center px-1'>
        <div className='w-36'>
          <h3 className='w-full truncate font-medium text-sm'>{title}</h3>
        </div>
      </div>

      <div className='w-full flex items-center'>
        <div className='px-1  max-w-md'>
          <p className='w-full truncate'>
            <span className='font-medium '>
              The CodePen Spark: Magic Marbles in Three.js, JavaScript
              Raindrops, and CSS Cartoons dfdsfsdf sas
            </span>
            <span className='text-gray-500 '> - description</span>
          </p>
        </div>
      </div>

      <div className='w-20 flex justify-end items-center'>
        <div className='pr-2 px-1 flex items-center'>
          <span className='text__small__time truncate'>5:12 PM</span>
        </div>
      </div>
    </div>
  );
}

export default BodyListItem;
