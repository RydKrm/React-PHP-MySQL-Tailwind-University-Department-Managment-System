import React from 'react';
import './Statictics.css'
const Statistics = () => {
    return (
      <div class="stats shadow bg-dark-black justify-center border-t border-b border-green w-full">
        <div class="stat">
          <div class="stat-figure text-green ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="item-container">
            <div class="stat-title text-light-black">Students</div>
          <div class="stat-value text-light-black">411</div>
          <div class="stat-desc text-light-black">Jan 1st - Feb 1st</div>
          </div>
          
        </div>

        <div class="stat">
          <div class="stat-figure text-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div class="stat-title  text-light-black">Updates</div>
          <div class="stat-value  text-light-black">4,200</div>
          <div class="stat-desc  text-light-black"> ↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div class="stat-title text-light-black">New Registers</div>
          <div class="stat-value text-light-black"> 200</div>
          <div class="stat-desc text-light-black"> Increase(14%)</div>
        </div>
      </div>
    );
};

export default Statistics;