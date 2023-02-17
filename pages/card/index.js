/* eslint-disable react-hooks/rules-of-hooks */
import BarChart from '@/charts/BarChart';
import DoughnutChart from '@/charts/DoughnutChart';
import LineChart from '@/charts/LineChart';
import PieChart from '@/charts/PieChart';

import { UserData } from '@/data/Data';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const index = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgb(255, 99, 132)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  });
  return (
    <section>
      <div className="grid grid-cols-4 place-items-center gap-x-4">
        <div className="w-80 grid place-items-center h-52 rounded-lg  bg-black ">
          <BarChart chartData={userData} />
        </div>
        <div className="w-80 grid place-items-center h-52 rounded-lg bg-black">
          <DoughnutChart chartData={userData} />
        </div>
        <div className="w-80 grid place-items-center h-52 rounded-lg bg-black">
          <PieChart chartData={userData} />
        </div>
        <div className="w-80 grid place-items-center h-52 rounded-lg bg-black">
          <LineChart chartData={userData} />
        </div>
      </div>
    </section>
  );
};

export default index;
