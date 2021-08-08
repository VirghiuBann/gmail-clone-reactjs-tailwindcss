import React from 'react';
import menuIcon from './assets/icons/menu_black_24dp.svg';
import supportIcon from './assets/icons/help_outline_black_24dp.svg';
import settingIcon from './assets/icons/settings_black_24dp.svg';
import appIcon from './assets/icons/apps_black_24dp.svg';
import accountIcon from './assets/icons/account_circle_black_24dp.svg';
import searchIcon from './assets/icons/search_black_24dp.svg';
import optionIcon from './assets/icons/tune_black_24dp.svg';

function Header() {
  return (
    <header>
      <div className='h-16 flex content-center justify-between'>
        <div className='w-3/12 flex'>
          <button className='btn'>
            <img src={menuIcon} alt='Menu' />
          </button>
          <div className='flex items-center'>
            <img
              src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
              alt='logo'
              className='object-contain h-10'
            />
          </div>
        </div>

        <div className='w-7/12 flex'>
          <div className='flex content-center py-2'>
            <button>
              <img src={searchIcon} alt='Search' />
            </button>
            <div className='w-100'>
              <input
                type='email'
                placeholder='Search mail'
                className='form-input w-full px-2 py-3 rounded-lg bg-gray-100'
              />
            </div>
            <button>
              <img src={optionIcon} alt='options' />
            </button>
          </div>
        </div>
        <div className='w-2/12 flex justify-end'>
          <button>
            <img src={supportIcon} alt='support' />
          </button>
          <button>
            <img src={settingIcon} alt='setting' />
          </button>
          <button>
            <img src={appIcon} alt='apps' />
          </button>
          <button>
            <img src={accountIcon} alt='account' />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
