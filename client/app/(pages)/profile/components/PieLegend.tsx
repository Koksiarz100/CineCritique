import React from 'react';
import '../styles/legend.scss'; 

interface LegendProps {
  data: number[];
  legend: string[];
}

const Legend: React.FC<LegendProps> = ({ data, legend }) => {
  return (
    <div className="legend-wrapper">
        {data.map((value, index) => (
          <div className='legend-info' key={index}>
            <div className='legend-color' style={{ color: getSliceColor(index, data.length) }}>&nbsp;◼</div>
            <div className='legend-position'>{`${legend[index]}`}</div> 
          </div>
        ))}
    </div>
  );
};

const getSliceColor = (index: number, totalSlices: number): string => {
  const startHue = 120;
  const hueIncrement = 360 / totalSlices;
  const hue = startHue + index * hueIncrement;
  return `hsl(${hue}, 40%, 50%)`;
};

export default Legend;
