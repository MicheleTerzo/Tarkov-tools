export interface IBubbleChartData {
  color: string;
  name: string;
  series: IBubbleChartSeries[];
}

interface IBubbleChartSeries {
  name: string;
  x: any;
  y: any;
  r: any;
}
