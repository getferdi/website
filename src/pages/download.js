import React, { Component } from "react"

import fetch from 'node-fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faApple,
    faWindows,
    faLinux,
    faUbuntu,
    faRedhat,
} from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

class DownloadPage extends Component {
    state = {
        release: '',
        oses: [],
        currentOs: '',
    }

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
                ]
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
                ]
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
                ]
              },
            ],
            currentOs: this.getOS(),
        });
    }

    getLatestRelease() {
        return new Promise(resolve => {
            fetch('https://api.github.com/repos/getferdi/ferdi/releases/latest')
            .then(data => data.json())
            .then(data => resolve(data.name))
        })
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
            // currentOs,
        } = this.state;

        return (
            <Layout>
                <SEO title="Download"/>
                <div className={"container"}>
                    <div className={"content"}>
                        <div className={"title"}>
                            <h1>Download Ferdi {release}</h1>
                        </div>

                        {
                          oses.map(eachOs => (
                            // TODO: Need to highlight the fieldset pertaining to the current OS
                            <fieldset className={"os-group"}>
                              <legend>{eachOs.osName}</legend>
                              <div className={"download-button"}>
                                  {
                                    eachOs.releases.map(item => (
                                      <a href={ item.releaseUrl } title="Download Ferdi">Download for { item.name }</a>
                                    ))
                                  }
                              </div>
                            </fieldset>
                          ))
                        }

                        <h2 className={"download-all"}>or</h2>

                        <h4>Install Chocolatey package</h4>
                        <pre className={"command"}>
                            $ choco install ferdi
                        </pre>

                        <h4>Install with Homebrew</h4>
                        <pre className={"command"}>
                            $ brew install --cask ferdi
                        </pre>

                        <h4>Install AUR package</h4>
                        <pre className={"command"}>
                            $ yay -S ferdi
                        </pre>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default DownloadPage
