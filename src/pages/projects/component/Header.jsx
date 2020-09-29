import React from 'react';

const Header = ({title}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{title}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Tentu Saja Tiap Developer Memiliki Rekam Jejak Tiap Baris code yang di torehkan
        Memiliki Kesan Tersendri,Pedih dan Luka terabadikan di halaman ini
      </p>
    </div>
  );
}

export default Header;