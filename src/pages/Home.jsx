import React from 'react';
import FormikSearch from '../components/SearchForm.jsx';
import TweetsTable from '../components/TweetsTable.jsx';
import SampleChart from '../components/Chart.jsx';

export default function HomeLayout() {

    return (
      <div>
        <FormikSearch/>
        <TweetsTable/>
        <SampleChart/>
      </div>
      )
  }
