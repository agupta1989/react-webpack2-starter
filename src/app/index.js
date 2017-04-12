import React from 'react';
// import injectProps from '../decorators';
import _ from 'lodash';

class App extends React.Component {

  // @injectProps
  render({title}) {
    const _title = _.toUpper(title);
    return (
      <div className={'testAppsss'}>{_title}</div>
    );
  }
}

export default App;
