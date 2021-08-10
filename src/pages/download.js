import React, { Component } from 'react';

import fetch from 'node-fetch';

import Layout from '../components/layout';
import Seo from '../components/seo';

class DownloadPage extends Component {
  state = {
    release: '',
    oses: [],
    currentOs: '',
  };

  componentDidMount() {
    // const version = await this.getLatestRelease();
    const version = '5.6.0';

    this.setState({
      release: version,
      oses: [
        {
          osKey: 'mac',
          osName: 'MacOS',
          releases: [
            {
              name: 'Intel, 64bit',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}.dmg`,
            },
            {
              name: 'ARM',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}-arm64.dmg`,
            },
          ],
        },
        {
          osKey: 'win',
          osName: 'Windows',
          releases: [
            {
              name: 'Intel, 64bit, exe',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-Setup-${version}.exe`,
            },
            {
              name: 'Intel, 64bit, MSI',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}.msi`,
            },
            {
              name: 'Intel, 64bit, Portable',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}.exe`,
            },
            {
              name: 'Intel, 32bit, Portable',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}-ia32.msi`,
            },
          ],
        },
        {
          osKey: 'linux',
          osName: 'Linux',
          releases: [
            {
              name: 'Intel, 64bit for Debian, Ubuntu, Mint (.deb)',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi_${version}_amd64.deb`,
            },
            {
              name: 'ARM64, 64bit for Debian, Ubuntu, Mint (.deb)',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi_${version}_arm64.deb`,
            },
            {
              name: 'ARMv7l, 64bit for Debian, Ubuntu, Mint (.deb)',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi_${version}_armv7l.deb`,
            },
            {
              name: 'Intel, 64bit for Fedora (.rpm)',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi-${version}.x86_64.rpm`,
            },
            {
              name: 'Intel, 64bit for AppImage',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/Ferdi-${version}.AppImage`,
            },
            {
              name: 'Intel, 64bit for freebsd',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi-${version}.freebsd`,
            },
            {
              name: 'Intel, 64bit for Other (.tar.gz)',
              releaseUrl: `https://github.com/getferdi/ferdi/releases/download/v${version}/ferdi-${version}.tar.gz`,
            },
          ],
        },
      ],
      currentOs: this.getOS(),
    });
  }

  getLatestRelease() {
    return new Promise((resolve) => {
      fetch('https://api.github.com/repos/getferdi/ferdi/releases/latest')
        .then((data) => data.json())
        .then((data) => resolve(data.name));
    });
  }

  getOS() {
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let os;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'mac';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'win';
    } else if (!os && /Linux/.test(platform)) {
      os = 'linux';
    }

    return os;
  }

  render() {
    const {
      release,
      oses,
      currentOs,
    } = this.state;

    return (
      <Layout>
        <Seo title="Download" />
        <div className={'container'}>
          <div className={'content'}>
            <div className={'title'}>
              <h1>Download Ferdi {release}</h1>
            </div>

            {oses.map((eachOs) => (
              <fieldset id={eachOs.osKey} className={`os-group ${eachOs.osKey == currentOs ? 'currentOs' : ''}`} border='2px'>
                <legend>{eachOs.osName}</legend>
                <div className={'download-button'}>
                  {eachOs.releases.map((item) => (
                    <a href={item.releaseUrl} title="Download Ferdi">
                      {item.name}
                    </a>
                  ))}
                </div>
              </fieldset>
            ))}

            <h2 className={'download-all'}>or</h2>

            <h4 id='choco'><a href='#choco'>Install Chocolatey package</a></h4>
            <pre className={'command'}>$ choco install ferdi</pre>

            <h4 id='brew'><a href='#brew'>Install with Homebrew</a></h4>
            <pre className={'command'}>$ brew install --cask ferdi</pre>

            <h4 id='yay'><a href='#yay'>Install AUR package</a></h4>
            <pre className={'command'}>$ yay -S ferdi</pre>
          </div>
          <div>
            <p>
              <h2 id='beta-builds'><a href='#beta-builds'>Beta builds</a></h2>
              <span>
                For those of you would like to help Ferdi by testing the beta builds, you can find them{' '}
                <a href="http://github.com/getferdi/ferdi/releases">here</a>
              </span>
            </p>
            <p>
              <h2 id='nightly-builds'><a href='#nightly-builds'>Nightly builds</a></h2>
              <span>
                For those of you would like to help Ferdi by testing the nightly builds, you can find them{' '}
                <a href="http://github.com/getferdi/nightlies/releases">here</a>
              </span>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default DownloadPage;
