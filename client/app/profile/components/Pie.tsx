'use client'
import React, { useEffect, useRef, useState } from 'react';

interface PieChartProps {
  data: number[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const total = data.reduce((acc, value) => acc + value, 0);
      let currentAngle = -90;

      const svg = chartRef.current;
      svg.innerHTML = '';

      const centerX = 50;
      const centerY = 50;
      const radius = 50;

      const paths = []; 
      const texts = []; 

      for (let i = 0; i < data.length; i++) {
        const percentage = (data[i] / total) * 100;
        const angle = (percentage * 360) / 100;

        const startHue = 120;
        const hueIncrement = 360 / data.length;

        const hue = startHue + i * hueIncrement;
        const sliceColor = `hsl(${hue}, 40%, 50%)`;

        const startX = centerX + Math.cos((currentAngle * Math.PI) / 180) * radius;
        const startY = centerY + Math.sin((currentAngle * Math.PI) / 180) * radius;
        const endX = centerX + Math.cos(((currentAngle + angle) * Math.PI) / 180) * radius;
        const endY = centerY + Math.sin(((currentAngle + angle) * Math.PI) / 180) * radius;

        const largeArcFlag = angle > 180 ? 1 : 0;

        const d = `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} L${centerX},${centerY} Z`;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', sliceColor);

        path.addEventListener('mouseenter', () => setHoveredSlice(i));
        path.addEventListener('mouseleave', () => setHoveredSlice(null));

        paths.push(path);

        currentAngle += angle;
      }

      paths.forEach((path) => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.appendChild(path);
        svg.appendChild(g);
      });

      currentAngle = -90;
      for (let i = 0; i < data.length; i++) {
        const percentage = (data[i] / total) * 100;
        const angle = (percentage * 360) / 100;

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const textX = centerX + Math.cos(((currentAngle + angle / 2) * Math.PI) / 180) * (radius / 1.8);
        const textY = centerY + Math.sin(((currentAngle + angle / 2) * Math.PI) / 180) * (radius / 1.8);

        text.setAttribute('x', textX.toString());
        text.setAttribute('y', textY.toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dy', '0.35em');
        text.setAttribute('font-size', '0.9rem');
        text.setAttribute('fill', 'white');
        text.textContent = hoveredSlice === i ? data[i].toString() : '';
        texts.push(text);

        currentAngle += angle;
      }

      texts.forEach((text) => {
        svg.appendChild(text);
      });
    }
  }, [data, hoveredSlice]);

  return (
    <svg ref={chartRef} width="150" height="150" viewBox="0 0 100 100"></svg>
  );
};

export default PieChart;