import React from 'react';
import FormikSearch from '../components/SearchForm.jsx';
import TweetsTable from '../components/TweetsTable.jsx';
import Map from '../components/Map.jsx';
import SampleChart from '../components/Chart.jsx';

export default function HomeLayout() {
  return (
    <div>
      <FormikSearch />
      <Map />
      <TweetsTable />
      <SampleChart />
    </div>
  );
}
