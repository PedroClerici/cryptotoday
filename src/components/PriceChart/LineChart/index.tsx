// TODO: Improve line graph responsiveness
// @ts-nocheck
import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from 'react';
import * as d3 from 'd3';
import { TimeInterval } from 'd3';
import { UserContext } from '../../../context/userContext';
import './styles.scss';

const LineChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgContainer = useRef<HTMLDivElement>(null);

  const { marketChartData, prevDays } = useContext(UserContext);

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  // This function calculates width and height of the container.
  const getSvgContainerSize = () => {
    if (svgContainer.current) {
      const newWidth = svgContainer.current.clientWidth;
      setWidth(newWidth);
      const newHeight = svgContainer.current.clientHeight;
      setHeight(newHeight);
    }
  };

  useEffect(() => {
    // Detect width and height on render.
    getSvgContainerSize();
    // Listen for resize changes, and detect dimensions again when they change.
    window.addEventListener('resize', getSvgContainerSize);
    // Cleanup event listener.
    return () => window.removeEventListener('resize', getSvgContainerSize);
  }, []);

  useEffect(() => {
    // D3 code:

    // Value accessors:
    const xAccessor = (d: { time: Date, price: number }) => d.time;
    const yAccessor = (d: { time: Date, price: number }) => d.price;

    // Dimensions:
    const dimensions = {
      width: width!,
      height: height!,
      margins: {
        right: 50,
        left: 0,
        top: 5,
        bottom: 30,
      },
      containerWidth: 0,
      containerHeight: 0,
    };

    dimensions
      .containerWidth = dimensions.width - dimensions.margins.right - dimensions.margins.left;
    dimensions
      .containerHeight = dimensions.height - dimensions.margins.top - dimensions.margins.bottom;

    let parseDate: (() => {}) | null;
    let ticksTime: TimeInterval | null;
    switch (prevDays) {
      case 1:
        parseDate = null;
        ticksTime = null;
        break;
      case 7:
        parseDate = d3.timeFormat('%b/%d');
        ticksTime = d3.timeDay.every(1);
        break;
      case 14:
        parseDate = d3.timeFormat('%b/%d');
        ticksTime = d3.timeDay.every(2);
        break;
      case 30:
        parseDate = d3.timeFormat('%b/%d');
        ticksTime = d3.timeDay.every(4);
        break;
      case 90:
        parseDate = d3.timeFormat('%b/%d');
        ticksTime = d3.timeDay.every(11);
        break;
      case 365:
        parseDate = d3.timeFormat('%b/%Y');
        ticksTime = d3.timeMonth.every(2);
        break;
      default:
        break;
    }

    // Selections:
    const svg = d3
      .select(svgRef.current)
      .classed('line-chart__svg', true)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height);

    // Clear previous content on refresh:
    const everything = svg.selectAll('*');
    everything.remove();

    const container = svg
      .append('g')
      .classed('container', true)
      .attr('transform', `translate(${dimensions.margins.left}, ${dimensions.margins.top})`);

    // Scales:
    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(marketChartData, yAccessor)!)
      .range([dimensions.containerHeight, 0]);

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(marketChartData, xAccessor)!)
      .range([0, dimensions.containerWidth]);

    // Axis:
    const yAxis = d3
      .axisRight(yScale)
      .tickSize(0)
      .tickSizeInner(-dimensions.containerWidth)
      .tickPadding(dimensions.margins.right / 2)
      .tickArguments([6, 's']);

    container
      .append('g')
      .attr('transform', `translate(${dimensions.containerWidth}, 0)`)
      .attr('background', 'white')
      .style('font-size', '0.9rem')
      .classed('yAxis', true)
      .call(yAxis);

    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(0)
      .ticks(ticksTime)
      .tickFormat(parseDate)
      .tickPadding(dimensions.margins.bottom / 2);

    container
      .append('g')
      .classed('xAxis', true)
      .style('transform', `translateY(${dimensions.containerHeight}px)`)
      .style('font-size', '0.9rem')
      .call(xAxis);

    d3.select('.xAxis .tick:first-child').remove();

    // Drawing the line:
    const lineGenerator = d3.line()
      .x((d) => xScale(xAccessor(d)))
      .y((d) => yScale(yAccessor(d)));

    container.append('path')
      .attr('class', 'line-path')
      .attr('d', lineGenerator(marketChartData));

    getSvgContainerSize();
  }, [marketChartData, width, height]);

  return (
    <div ref={svgContainer} className="line-chart">
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
};

export default LineChart;
