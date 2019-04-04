import React from 'react';
import FormikSearch from '../components/SearchForm.jsx';
import TweetsTable from '../components/TweetsTable.jsx';
import Map from '../components/Map.jsx';

export default function HomeLayout() {

    return (
      <div>
        <FormikSearch/>
        <Map/>
        <TweetsTable/>
      </div>
      )
  }
