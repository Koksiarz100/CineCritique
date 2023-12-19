import React from 'react';
import '../styles/statistics.scss'; 
interface StatisticsProps {
  data: number[];
  statistics: string[];
}

const Statistics: React.FC<StatisticsProps> = ({ data, statistics }) => {
    return (
      <div className="statistics-wrapper">
        <table className="statistics-table">
        <thead>
          <tr>
            <th>Statystyka</th>
            <th>Wartość</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr className='statistics-info' key={index}>
              <td>{statistics[index]}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Statistics;
