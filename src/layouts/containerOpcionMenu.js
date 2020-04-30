import React,{Fragment} from 'react';

import Layout from '../layouts/Layout';
class ContainerDetalle extends React.Component {
   
    render () {
      const  {
        children,
    } = this.props;

    return(
        <Fragment>
        <div class="container-fluid">
          <h1 class="mt-4"></h1>
          <p></p>
          <code></code>
          <div>
                {children}
          </div>
        </div>
        </Fragment>
      );
    }


}

export default ContainerDetalle;



