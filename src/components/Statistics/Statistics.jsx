import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Software Engineering',
    jobs: 4000,
    vacancies: 2400,
    vacancyRate: 60, // in percentage
  },
  {
    name: 'Biomedical Engineering',
    jobs: 3000,
    vacancies: 1398,
    vacancyRate: 46.6, // in percentage
  },
  {
    name: 'Chemical Engineering',
    jobs: 2000,
    vacancies: 9800,
    vacancyRate: 490, // in percentage
  },
  {
    name: 'Medical Nurse',
    jobs: 2780,
    vacancies: 3908,
    vacancyRate: 140.8, // in percentage
  },
  {
    name: 'Senior Doctor',
    jobs: 1890,
    vacancies: 4800,
    vacancyRate: 253.2, // in percentage
  },
  {
    name: 'Marketing Officer',
    jobs: 2390,
    vacancies: 3800,
    vacancyRate: 159.2, // in percentage
  },
  {
    name: 'Junior Web Dev',
    jobs: 3490,
    vacancies: 4300,
    vacancyRate: 123.2, // in percentage
  },
];

const Example = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="vacancies" stroke="#8884d8" name=" Jobs Available" />
      <Line type="monotone" dataKey="jobs" stroke="#82ca9d" name="Vacancies" />
      <Line type="monotone" dataKey="vacancyRate" stroke="#ffc658" name="Vacancy Rate %" />
    </LineChart>
  </ResponsiveContainer>
);

export default function Statistics() {
  return <Example />;
}
