import React from 'react';
import FormikSearch from '../components/SearchForm.jsx';
import TweetsTable from '../components/TweetsTable.jsx';

export default function HomeLayout() {

    return (
      <div>
        <FormikSearch/>
        <TweetsTable/>
      </div>
      )
  }
