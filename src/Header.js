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
      <div className='h-16 flex content-center justify-between'>
        <div className='w-3/12 md:w-3/12 lg:w-2/12 flex'>
          <button className='btn'>
            <MenuIcon />
          </button>
          <div className='flex items-center'>
            <img
              src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
              alt='logo'
              className='object-contain h-10'
            />
          </div>
        </div>

        <div className='w-6/12 md:w-full lg:w-4/12 flex'>
          <div className='relative w-100 py-2 pl-3 '>
            <div className='flex content-center focus-within:text-gray-600'>
              <div className='absolute left-0  inset-y-0 flex content-center'>
                <button className='pl-5'>
                  <SearchIcon />
                </button>
              </div>
              <input
                type='email'
                placeholder='Search mail'
                className='form-input w-full pl-10 pr-7 py-3 rounded-lg bg-gray-100 focus:bg-white border-transparent focus:border-transparent focus:ring-1 focus:ring-gray-300 shadow-md'
              />
              <div className='absolute right-0 inset-y-0 flex content-center'>
                <button className='pr-2 '>
                  <TuneIconSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/12 flex justify-end px-2'>
          <button className='pl-2'>
            <SupportIcon />
          </button>
          <button className='pl-2'>
            <SettingIcon />
          </button>
          <button className='pl-2'>
            <AppIcon />
          </button>
          <button className='pl-2'>
            <AccountIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
