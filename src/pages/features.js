import * as React from 'react';

import * as Icon from 'react-feather';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => (
  <Layout>
    <Seo title="Features" />

    <div className={'container'}>
      <div className={'content'}>
        <div className={'title'}>
          <h2>Features</h2>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Package className={'item-icon'} />
              <h3>All your messaging services in one place.</h3>
              <p>
                One Slack application, one WhatsApp application, keeping your Webmailer open in the browser? Ferdi
                brings all your messaging services into one app.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.GitPullRequest className={'item-icon'} />
              <h3>Based on one of the most popular messaging browsers.</h3>
              <p>
                Ferdi is based on Franz - a messaging browser already used by thousands of people.
                <br />
                Due to this, Ferdi is compatible with all Franz recipes and your existing Franz account.
              </p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Maximize className={'item-icon'} />
              <h3>No restrictions.</h3>
              <p>
                Ferdi doesn't restrict its usage. Use every service you want, as many times as you want and how you
                want.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Lock className={'item-icon'} />
              <h3>Password Lock.</h3>
              <p>
                Protect your messages by using Password Lock. Password Lock allows you to lock your messages using a
                password.
              </p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.CloudOff className={'item-icon'} />
              <h3>No login required.</h3>
              <p>
                With Ferdi you can choose between logging in to your Ferdi account to sync your services between devices
                or using Ferdi without an account so your data doesn't get send to external servers.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.HardDrive className={'item-icon'} />
              <h3>Custom Servers.</h3>
              <p>
                Don't want to trust third-parties to store your information? With Ferdi, you can{' '}
                <a href="http://server.getferdi.com" target="_blank" rel="noopener noreferrer">
                  set up your own Server
                </a>{' '}
                - minimal hardware and knowledge required.
              </p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.PauseCircle className={'item-icon'} />
              <h3>Service Hibernation.</h3>
              <p>
                By default, Ferdi will keep your services loaded in the background - this can use a lot of resources. If
                you want to, you can enable service hibernation in Ferdi's settings. This will automatically unload
                unused services to keep your computer running fast.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.List className={'item-icon'} />
              <h3>Ferdi Todos.</h3>
              <p>
                Always keep an eye on your Todo list with Ferdi Todos. Already use another Todo service like Todoist?
                Simply change the Todo Server in Ferdi's settings.
              </p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Command className={'item-icon'} />
              <h3>Quick Switch.</h3>
              <p>
                You have a lot of services that you quickly want to navigate? Simply press <code>CMD/CTRL + P</code> to
                open Quick Switch and search for your service.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.EyeOff className={'item-icon'} />
              <h3>Private Notification.</h3>
              <p>
                Want to be notified about new messages but don't want to reveal their content? Enable Private
                Notifications to protect your message information.
              </p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Loader className={'item-icon'} />
              <h3>Keep individual Workspaces loaded.</h3>
              <p>
                Ferdi allows you to keep individual Workspaces loaded at all times - so you can continue where you last
                left.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.ZapOff className={'item-icon'} />
              <h3>Scheduled Do-not-Disturb.</h3>
              <p>Define a timeframe, in which Ferdi shouldn't notify you about new notifications.</p>
            </div>
          </div>
        </div>

        <div className={'title'}>
          <h2>...and all of Franz's great features</h2>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Moon className={'item-icon'} />
              <h3>Dark Mode.</h3>
              <p>
                Protect your eyes and switch Ferdi to Dark Mode at night. This also works on all your services thanks to{' '}
                <a href="https://github.com/darkreader/darkreader" target="_blank" rel="noopener noreferrer">
                  DarkReader
                </a>
                .
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Bell className={'item-icon'} />
              <h3>Desktop Notifications.</h3>
              <p>Ferdi uses your System's existing notification system to notify you about new messages.</p>
            </div>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Server className={'item-icon'} />
              <h3>Build-in support for over 178 services.</h3>
              <p>Other services can be added via the "Custom Website" service.</p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Flag className={'item-icon'} />
              <h3>Speaks your language.</h3>
              <p>Ferdi speaks many languages from all around the world.</p>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Cloud className={'item-icon'} />
              <h3>Cloud sync.</h3>
              <p>Keep your services and workspaces in sync between all your computers with cloud sync.</p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Layout className={'item-icon'} />
              <h3>Workspaces.</h3>
              <p>Keep your work, personal and hobby separated using workspaces.</p>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Headphones className={'item-icon'} />
              <h3>Control notifications and audio.</h3>
              <p>
                Ferdi allows you to control what your services should and shouldn't do. Disable notifications and audio
                on a service-to-service base.
              </p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.User className={'item-icon'} />
              <h3>Unlimited accounts.</h3>
              <p>
                Ferdi keeps your service sessions separated. This way, you can use as many accounts in a service as you
                want.
              </p>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.GitMerge className={'item-icon'} />
              <h3>Proxy support.</h3>
              <p>Tell Ferdi to use a Proxy on a per-service basis.</p>
            </div>
          </div>

          <div className={'col-6'}>
            <div className={'item'}>
              <Icon.Cpu className={'item-icon'} />
              <h3>Cross-platform.</h3>
              <p>Being built on ElectronJS, Ferdi is compatible with Windows, Mac and Linux.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
