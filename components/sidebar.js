/* eslint-disable jsx-a11y/alt-text */

import Link from 'next/link';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-blue-700 ">
      <div className="grid  place-items-center">
        {/* Top Of SideBar */}
        <section className="flex flex-col justify-center  items-center">
          <div className="h-24 w-24 rounded-full">
            <img src="/icon/user.png" />
          </div>
          <div className="flex items-center mt-5">
            <div className="text-center font-bold">IOTEAM</div>
          </div>
        </section>
        {/* SideBar Buttons */}
        <section className="flex h-full ">
          <div className="flex flex-col gap-y-10 mt-5">
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">Dashboard</div>
            </div>
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">Email</div>
            </div>
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">Bar</div>
            </div>
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">Pie</div>
            </div>
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">Geo</div>
            </div>
            <div className="flex items-center text-center gap-x-4">
              <div className="w-3 h-3">
                <img src="/icon/home.png" />
              </div>
              <div className="font-semibold text-sm">live</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
