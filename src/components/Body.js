import React from 'react';
import { mdiCheckboxBlankOutline } from '@mdi/js';
import { mdiMinusBox } from '@mdi/js';
import { mdiMenuDown } from '@mdi/js';
import { mdiRefresh } from '@mdi/js';
import { mdiDotsVertical } from '@mdi/js';
import { mdiKeyboard } from '@mdi/js';
import Icon from '@mdi/react';

function Body() {
  const iconSize = '20px';
  const iconColor = '#6B7280';
  return (
    <div className='flex-1 400'>
      <div className='h-10 border-b border-gray-300 flex justify-between'>
        <div className='flex align-center'>
          <button>
            <Icon
              path={mdiCheckboxBlankOutline}
              size={iconSize}
              color={iconColor}
            />
          </button>
          <button>
            <Icon path={mdiMinusBox} size={iconSize} color={iconColor} />
          </button>
          <button>
            <Icon path={mdiMenuDown} size={iconSize} color={iconColor} />
          </button>
          <button>
            <Icon path={mdiRefresh} size={iconSize} color={iconColor} />
          </button>
          <button>
            <Icon path={mdiDotsVertical} size={iconSize} color={iconColor} />
          </button>
        </div>
        <div className='flex align-center'>
          <button>
            <Icon path={mdiKeyboard} size={iconSize} color={iconColor} />
          </button>
          <button>
            <Icon path={mdiMenuDown} size={iconSize} color={iconColor} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
