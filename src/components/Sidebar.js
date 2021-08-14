import React from 'react';
import SidebarItem from './SidebarItem';
import Icon from '@mdi/react';

import { mdiInbox } from '@mdi/js';
import { mdiStar } from '@mdi/js';
import { mdiClockTimeFour } from '@mdi/js';
import { mdiSend } from '@mdi/js';
import { mdiFile } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiLabel } from '@mdi/js';
import { mdiVideo } from '@mdi/js';
import { mdiKeyboard } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiTag } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiGoogleHangouts } from '@mdi/js';
import { mdiPhone } from '@mdi/js';

function Sidebar() {
  return (
    <div className='pr-3 mr-3 relative h-full w-64'>
      <div className='h-16 my-4 pl-2'>
        <button className='h-full flex content-center rounded-full py-3 px-6 shadow-md border border-gray-100 hover:shadow-lg'>
          <img
            src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png'
            alt='add compose'
          />
          <div className='m-auto'>
            <span className='pl-1 capitalize'>Compose</span>
          </div>
        </button>
      </div>

      <SidebarItem
        mdiIcon={mdiInbox}
        title={'Inbox'}
        number={12}
        selected={true}
      />
      <SidebarItem mdiIcon={mdiStar} title={'Stared'} number={13} />
      <SidebarItem mdiIcon={mdiClockTimeFour} title={'Snoozed'} number={13} />
      <SidebarItem mdiIcon={mdiSend} title={'Sent'} number={13} />
      <SidebarItem mdiIcon={mdiFile} title={'Drafts'} number={13} />
      <SidebarItem mdiIcon={mdiEmail} title={'All Mail'} number={13} />
      <SidebarItem mdiIcon={mdiLabel} title={'Categories'} number={13} />

      <div>
        <div className='pl-3'>
          <h3 className='pl-1 text-gray-500 font-medium'>Meet</h3>
        </div>
        <SidebarItem mdiIcon={mdiVideo} title='New meeting' />
        <SidebarItem mdiIcon={mdiKeyboard} title='Join a meeting' />
      </div>

      <div className='absolute bottom-0 w-full'>
        <div className='flex h-10 justify-center items-center border-t'>
          <button>
            <Icon
              path={mdiAccount}
              size='30px'
              color='#6B7280'
              className='p-1'
            />
          </button>
          <button>
            <Icon
              path={mdiGoogleHangouts}
              size='30px'
              color='#6B7280'
              className='p-1'
            />
          </button>
          <button>
            <Icon path={mdiPhone} size='30px' color='#6B7280' className='p-1' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
