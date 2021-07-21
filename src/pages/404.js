import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className={'container'}>
      <h1>We couldn't find this page.</h1>
      <p>Unfortunately, the page you are looking for doesn't exist.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
