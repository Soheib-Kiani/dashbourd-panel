import Card from '@/pages/card/index';
import Table from '@/pages/table/index';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map/index'), { ssr: false });

const index = () => {
  return (
    <div className="">
      <Card />
      <div className="flex h-1/2">
        <Table />
        <div className="h-full w-1/4">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default index;
