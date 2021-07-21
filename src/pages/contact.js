import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <div className={'container'}>
      <div className={'content'}>
        <div className={'title'}>
          <h1>Contact</h1>
        </div>

        <div className={'row'}>
          <div className={'col-7'}>
            <p>
              If you need help with Ferdi or ferdi-server, please create a new issue on one of our GitHub repositories.
              We are happy to help you.
            </p>
          </div>

          <div className={'col-5'}>
            <div className={'contact-items'}>
              <h2>
                <a href="https://github.com/getferdi/">https://github.com/getferdi/</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
