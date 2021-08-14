import React from 'react';
import SidebarItem from './SidebarItem';

import { mdiInbox } from '@mdi/js';
import { mdiStar } from '@mdi/js';
import { mdiClockTimeFour } from '@mdi/js';
import { mdiSend } from '@mdi/js';
import { mdiFile } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiLabel } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiTag } from '@mdi/js';

function Sidebar() {
  return (
    <div className='pr-3 mr-3'>
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

      <SidebarItem mdiIcon={mdiInbox} title={'Inbox'} number={12} />
      <SidebarItem mdiIcon={mdiStar} title={'Stared'} number={13} />
      <SidebarItem mdiIcon={mdiClockTimeFour} title={'Snoozed'} number={13} />
      <SidebarItem mdiIcon={mdiSend} title={'Sent'} number={13} />
      <SidebarItem mdiIcon={mdiFile} title={'Drafts'} number={13} />
      <SidebarItem mdiIcon={mdiEmail} title={'All Mail'} number={13} />
      <SidebarItem mdiIcon={mdiLabel} title={'Categories'} number={13} />
    </div>
  );
}

export default Sidebar;
