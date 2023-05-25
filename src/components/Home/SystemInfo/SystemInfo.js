import React from 'react';
import './SystemInfo.css'
import { MdOutlineAdminPanelSettings, MdOutlineNaturePeople } from 'react-icons/md';

const SystemInfo = () => {
    return (
      <section className="flex md:h-screen justify-center bg-medium-black">
        <div className="flex flex-rows-2 sm:flex-row-1 gap-4 text-white font-roboto items-center">
          {/* item -1 */}
          <div class=" bg-medium-black w-96 ring-2 ring-dark-green text-center system-info rounded-xl font-roboto font-light">
            <MdOutlineAdminPanelSettings className="text-8xl role-icon text-green rounded-xl  m-2 p-2 system-icon" />
            <h2 className="text-2xl text-green font-normal">ADMIN </h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              temporibus molestias modi mollitia culpa quae eligendi repellendus
              dolores dolorum nihil.
            </p>
          </div>

          {/* item - 2 */}
          <div class=" bg-medium-black w-96 ring-2 ring-dark-green text-center system-info rounded-xl font-roboto font-light">
            <MdOutlineNaturePeople className="text-8xl role-icon text-green rounded-xl  m-2 p-2 system-icon" />
            <h2 className="text-2xl text-green font-normal">ADMIN </h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              temporibus molestias modi mollitia culpa quae eligendi repellendus
              dolores dolorum nihil.
            </p>
          </div>
          {/* item - 3 */}
        </div>
      </section>
    );
};

export default SystemInfo;