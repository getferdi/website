import React, { Component } from 'react';

import fetch from 'node-fetch';

import Layout from '../components/layout';
import Seo from '../components/seo';

// Test if the user is trying to search signal
const isSearchingSignal = (string) => /^sig(n(al?)?)?/i.test(string);

class ServicesPage extends Component {
  state = {
    services: [],
    search: '',
  };

  componentDidMount() {
    // Get list of services from GitHub
    fetch('https://cdn.jsdelivr.net/gh/getferdi/recipes/all.json')
      .then((data) => data.json())
      .then((services) => {
        // Sort services alphabetically
        const sortedServices = services.sort((a, b) => {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();

          return aName < bName ? -1 : aName > bName ? 1 : 0;
        });

        this.setState({
          services: sortedServices,
        });
      });
  }

  updateSearch(search) {
    this.setState({
      search,
    });
  }

  render() {
    const { services, search } = this.state;

    const query = search.toLowerCase().trim();

    const shownServices = search ? services.filter((e) => e.name.toLowerCase().includes(query)) : services;

    return (
      <Layout>
        <Seo title="Services" />

        <div className={'container services'}>
          <div className={'content'}>
            <div className={'title'}>
              <h2>Services</h2>
              <p>Ferdi is compatible with all your favorite services</p>
            </div>

            <input
              type="text"
              onChange={(evt) => this.updateSearch(evt.target.value)}
              placeholder="Search"
              className={'search-box'}
            />

            <div className={'service-grid'}>
              {shownServices.map((service) => (
                <div className={'service-item'} key={service.key}>
                  <div className={'item'}>
                    <img src={service.icons.svg} alt={`${service.name} logo`} />
                    <p>{service.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {!shownServices.length && (
              <div>
                <p style={{ textAlign: 'center' }}>
                  {isSearchingSignal(query) ? (
                    <>
                      Ferdi unfortunately doesn't support Signal at the moment as Signal doesn't offer a web version.
                      <br />
                      <br />
                      However, if you want to use another service than Signal you can add it using the "Custom Website"
                      option!
                    </>
                  ) : (
                    'It looks like this service is not yet part of Ferdi - but you can still add it using the "Custom Website" option!'
                  )}
                </p>
                <div className={'service-not-found-service'}>
                  <img
                    src="https://cdn.jsdelivr.net/gh/getferdi/recipes/uncompressed/franz-custom-website/icon.svg"
                    alt="Custom website logo"
                  />
                  <p>Custom Website</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default ServicesPage;
