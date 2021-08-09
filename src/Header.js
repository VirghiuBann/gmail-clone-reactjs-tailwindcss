import React from 'react';
import MenuIcon from './components/icons/menuIconSvg';
import SupportIcon from './components/icons/helpIconSvg';
import SettingIcon from './components/icons/settingIconSvg';
import AppIcon from './components/icons/appIconSvg';
import AccountIcon from './components/icons/accountIconSvg';
import SearchIcon from './components/icons/searchIconSvg';
import TuneIconSvg from './components/icons/tuneIconSvg';

function Header() {
  return (
    <header>
      <div className='h-16 p-1.5 flex content-center justify-between'>
        <div className='w-3/12 md:w-3/12 lg:w-2/12 flex'>
          <button className='btn'>
            <MenuIcon />
          </button>
          <div className='flex items-center ml-2'>
            <img
              src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
              alt='logo'
              className='object-contain h-10'
            />
          </div>
        </div>

        <div className='w-7/12 md:w-full lg:w-4/12 flex'>
          <div className='relative w-100 pl-3 flex content-center'>
            <div className='w-full flex content-center focus-within:text-gray-600'>
              <div className='absolute left-0 pl-5 inset-y-0 flex content-center'>
                <button className='btn'>
                  <SearchIcon />
                </button>
              </div>
              <input
                type='email'
                placeholder='Search mail'
                className='form-input w-full pl-14 pr-10 rounded-lg bg-gray-100 focus:bg-white border-transparent focus:border-transparent focus:ring-1 focus:ring-gray-200 shadow-md'
              />
              <div className='absolute right-0 pr-2 inset-y-0 flex content-center'>
                <button className='btn'>
                  <TuneIconSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-3/12 flex justify-end pl-2'>
          <button className='btn mr-0.5'>
            <SupportIcon />
          </button>
          <button className='btn mr-0.5'>
            <SettingIcon />
          </button>
          <button className='btn mr-0.5'>
            <AppIcon />
          </button>
          <button className='btn'>
            <AccountIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
