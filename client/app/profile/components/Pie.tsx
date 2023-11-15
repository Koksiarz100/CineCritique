'use client'
import React, { useEffect, useRef } from 'react';

interface PieChartProps {
  data: number[];
  colors: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, colors }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const total = data.reduce((acc, value) => acc + value, 0);
      let currentAngle = -90;

      const svg = chartRef.current;
      svg.innerHTML = '';

      const centerX = 50;
      const centerY = 50;
      const radius = 50;

      for (let i = 0; i < data.length; i++) {
        const percentage = (data[i] / total) * 100;
        const angle = (percentage * 360) / 100;

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        const startX = centerX + Math.cos((currentAngle * Math.PI) / 180) * radius;
        const startY = centerY + Math.sin((currentAngle * Math.PI) / 180) * radius;
        const endX = centerX + Math.cos(((currentAngle + angle) * Math.PI) / 180) * radius;
        const endY = centerY + Math.sin(((currentAngle + angle) * Math.PI) / 180) * radius;

        const largeArcFlag = angle > 180 ? 1 : 0;

        const d = `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} L${centerX},${centerY} Z`;

        path.setAttribute('d', d);
        path.setAttribute('fill', colors[i]);

        path.addEventListener('mouseenter', () => {
          text.textContent = data[i].toString();
        });

        text.addEventListener('mouseenter', () => {
          text.textContent = data[i].toString();
        });
        text.addEventListener('mouseleave', () => {
          text.textContent = '';
        });

        path.addEventListener('mouseleave', () => {
          text.textContent = '';
        });

        g.appendChild(path);
        
        const textX = centerX + Math.cos(((currentAngle + angle / 2) * Math.PI) / 180) * (radius / 1.8);
        const textY = centerY + Math.sin(((currentAngle + angle / 2) * Math.PI) / 180) * (radius / 1.8);
        text.setAttribute('x', textX.toString());
        text.setAttribute('y', textY.toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dy', '0.35em'); 
        text.setAttribute('font-size', '0.9rem');

        g.appendChild(text);
        svg.appendChild(g);

        currentAngle += angle;
      }
    }
  }, [data, colors]);

  return (
    <svg ref={chartRef} width="150" height="150" viewBox="0 0 100 100"></svg>
  );
};

export default PieChart;