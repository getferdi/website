/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import '../../static/styles/main.scss';
import logo from '../../static/images/logo.svg';
import buildInfo from './buildInfo.json';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-3'}>
                <div className={'widget__item'}>
                  <div className={'logo'}>
                    <Link to="/" title={'Ferdi'}>
                      <img alt={'Logo'} src={logo} width={80} />
                    </Link>
                  </div>

                  <div className={'about'}>
                    <p>
                      Ferdi is a messaging browser that allows you to combine your favorite messaging services into one
                      application.
                    </p>
                  </div>
                </div>
              </div>

              <div className={'col-3'}>
                <div className={'widget__item'}>
                  <div className={'links'}>
                    <h3>Ferdi</h3>
                    <ul>
                      <li>
                        <Link to="/" title={'Home'}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/download" title={'Download'}>
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link to="/features" title={'Features'}>
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" title={'Services'}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <a href={'https://github.com/getferdi/ferdi'} title="Ferdi Github">
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href={'https://opencollective.com/getferdi'} title="Open Collective Ferdi">
                          Open Collective
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={'col-3'}>
                <div className={'widget__item'}>
                  <div className={'links'}>
                    <h3>Support</h3>
                    <ul>
                      <li>
                        <a href="https://help.getferdi.com" title="Help Center Ferdi">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="https://api.getferdi.com/user/account" title="Manage your Account">
                          Manage your Account
                        </a>
                      </li>
                      <li>
                        <a href="https://api.getferdi.com/import" title="Import data from Franz Account to Ferdi">
                          Import your Franz Account
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/getferdi/ferdi/issues" title="Ferdi GitHub Issues">
                          GitHub Issues
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={'col-3'}>
                <div className={'widget__item'}>
                  <div className={'links'}>
                    <h3>Legal</h3>
                    <ul>
                      <li>
                        <Link to="/terms" title="Terms of Service (Website)">
                          Terms of Service (Website)
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy" title="Privacy policy (Website)">
                          Privacy policy (Website)
                        </Link>
                      </li>
                      <li>
                        <a href="https://api.getferdi.com/terms" title="Terms of Service (Ferdi)">
                          Terms of Service (Ferdi)
                        </a>
                      </li>
                      <li>
                        <a href="https://api.getferdi.com/privacy.html" title="Privacy policy (Ferdi)">
                          Privacy policy (Ferdi)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={'copyright'}>
              <p>
                Copyright {new Date().getFullYear()}, {` `}{' '}
                <a href="https://github.com/orgs/getferdi/people" title={'The people behind Ferdi'}>
                  The people behind Ferdi
                </a>
                . All rights reserved.
              </p>
              <br />
              <p>Franz and the Franz logo are trademarks or registered trademarks of Franz or Franz’s licensors.</p>
              <p>GitHub and the GitHub logo are trademarks or registered trademarks of GitHub, Inc.</p>
              <p>This website is not affiliated with Franz, GitHub or any of the messaging services shown.</p>
            </div>

            <div className={'published'}>Published on: {buildInfo.date}</div>
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
