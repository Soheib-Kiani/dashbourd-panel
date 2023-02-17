import * as V from 'victory';
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryTooltip,
} from 'victory';

const index = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 gap-x-2 ">
        <div className='w-80 h-72 rounded-lg  bg-white'>
          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4]}
              tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => `$${x / 1000}k`}
            />
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
        <div className='w-80 h-72 rounded-lg  bg-white'>
          <VictoryChart>
            <VictoryBar
              style={{ data: { fill: 'tomato', width: 25 } }}
              data={[
                { x: 'cat', y: 10 },
                { x: 'dog', y: 25 },
                { x: 'bird', y: 40 },
                { x: 'frog', y: 50 },
                { x: 'fish', y: 50 },
              ]}
            />
            <VictoryAxis />
            {['cat', 'dog', 'bird', 'dog', 'frog', 'fish'].map((d, i) => {
              return (
                <VictoryAxis
                  dependentAxis
                  key={i}
                  label={d}
                  style={{ tickLabels: { fill: 'none' } }}
                  axisValue={d}
                />
              );
            })}
          </VictoryChart>
        </div>
        <div className='w-80 h-72 rounded-lg  bg-white'>
          <VictoryChart domain={{ x: [0, 11], y: [-10, 10] }}>
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={[
                { x: 2, y: 5, label: 'right-side-up' },
                { x: 4, y: -6, label: 'upside-down' },
                { x: 6, y: 4, label: 'tiny' },
                { x: 8, y: -5, label: 'or a little \n BIGGER' },
                { x: 10, y: 7, label: 'automatically' },
              ]}
              style={{
                data: { fill: 'tomato', width: 20 },
              }}
            />
          </VictoryChart>
        </div>
        <div className='w-80 h-72 rounded-lg  bg-white'>
          <VictoryStack>
            <VictoryArea
              data={[
                { x: 'a', y: 2 },
                { x: 'b', y: 3 },
                { x: 'c', y: 5 },
              ]}
            />
            <VictoryArea
              data={[
                { x: 'a', y: 1 },
                { x: 'b', y: 4 },
                { x: 'c', y: 5 },
              ]}
            />
            <VictoryArea
              data={[
                { x: 'a', y: 3 },
                { x: 'b', y: 2 },
                { x: 'c', y: 6 },
              ]}
            />
          </VictoryStack>
        </div>
      </div>
    </section>
  );
};

export default index;
