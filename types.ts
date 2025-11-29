export interface MetricData {
  name: string;
  value: number;
}

export type MetricType = 'kwh' | 'money' | 'co2';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface TipCard {
  title: string;
  description: string;
  category: string;
}
