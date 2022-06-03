import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import ChartType from 'types/chartType';
import BarChart from 'components/Charts/BarChart';
import LineChart from 'components/Charts/LineChart';
import DoughnutChart from 'components/Charts/DoughnutChart';
import Input from 'components/Input/Input';

const responsiveDoughnut = {
  height: {
    xs: '108px',
    sm: '175px',
    md: '270px',
    lg: '365px',
  },
  width: {
    xs: '108px',
    sm: '175px',
    md: '270px',
    lg: '365px',
  },
};

const MainChart: React.FC = () => {
  const [typeOfChart, setTypeOfChart] = useState<ChartType>(ChartType.Bar);
  const [x, setX] = useState<string[]>([]);
  const [y, setY] = useState<string[]>([]);
  const notNullValues = x.length !== 0 || y.length !== 0;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeOfChart(event.target.value as ChartType);
  };

  return (
    <Box display="flex" flexDirection="column-reverse" width="100%" gap="50px">
      <FormControl>
        <RadioGroup
          aria-labelledby="chart-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={typeOfChart}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value={ChartType.Bar}
            control={<Radio color="secondary" />}
            label="Bar Chart"
          />
          <FormControlLabel
            value={ChartType.Line}
            control={<Radio color="secondary" />}
            label="Line Chart"
          />
          <FormControlLabel
            value={ChartType.Doughnut}
            control={<Radio color="secondary" />}
            label="Doughnut Chart"
            color="secondary"
          />
        </RadioGroup>
      </FormControl>
      {!notNullValues && (
        <Typography textAlign="center" color="#ab28ed" fontWeight="bold">
          Enter some values (X and Y) to obtain a charts
        </Typography>
      )}
      {typeOfChart === ChartType.Bar && notNullValues && (
        <Box>
          <BarChart x={x} y={y} />
        </Box>
      )}
      {typeOfChart === ChartType.Line && notNullValues && (
        <Box>
          <LineChart x={x} y={y} />
        </Box>
      )}
      {typeOfChart === ChartType.Doughnut && notNullValues && (
        <Box margin="0 auto" sx={responsiveDoughnut}>
          <DoughnutChart x={x} y={y} />
        </Box>
      )}
      <Input
        setOuterValue={setY}
        customLabel="Y axis labels:"
        helperText="Enter numbers and put comma after each number"
      />
      <Input
        setOuterValue={setX}
        customLabel="X axis labels:"
        helperText="Enter words or numbers and put comma after each word"
      />
    </Box>
  );
};

export default MainChart;
