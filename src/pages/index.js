import { Link } from 'gatsby';
import * as React from 'react';
import * as Icon from 'react-feather';
import thumbnailFranz from '../../static/images/feature-franz.png';
import thumbnailMore from '../../static/images/feature-more.png';
import thumbnailRestrictions from '../../static/images/feature-restrictions.png';
import thumbnailServices from '../../static/images/feature-services.png';
import featureImage from '../../static/images/hero.png';
import testimonialChipde from '../../static/images/testimonials/chipde.png';
import testimonialJakelee from '../../static/images/testimonials/jakelee.jpeg';
import testimonialMakeuseof from '../../static/images/testimonials/makeuseof.png';
import testimonialSandromatter from '../../static/images/testimonials/sandromatter.jpg';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Testimonials from '../components/testimonials';

const IndexPage = () => (
  <Layout>
    <Seo />

    <div className={'page-header home'}>
      <h1>All your messaging services in one place</h1>
      <p>
        Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.
      </p>
      <img alt={'Dashboard'} src={featureImage} />
    </div>

    <div className={'container'}>
      <div className={'content'}>
        <h2 className={'features-heading'}>Why Ferdi?</h2>

        <div className={'feature__item'}>
          <div className={'row'}>
            <div className={'col-6 first'}>
              <div className={'thumbnail'}>
                <img alt={'All your Services'} src={thumbnailServices} />
              </div>
            </div>

            <div className={'col-6'}>
              <div className={'feature__content'}>
                <h2>Increase your productivity.</h2>
                <p>
                  One Slack application, one WhatsApp application, keeping your WebMail open in the browser? Ferdi
                  brings all your messaging services into one app.
                </p>
              </div>
              <div className={'button'}>
                <Link to="/services">Browse Services</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={'feature__item'}>
          <div className={'row'}>
            <div className={'col-6'}>
              <div className={'feature__content'}>
                <h2>Based on one of the most popular messaging browsers.</h2>
                <p>
                  Ferdi is based on Franz - a messaging browser already used by thousands of people.
                  <br />
                  Due to this, Ferdi is compatible with all Franz recipes and your existing Franz account.
                </p>
              </div>
            </div>

            <div className={'col-6 first'}>
              <div className={'thumbnail'}>
                <img alt={'Based on Franz'} src={thumbnailFranz} />
              </div>
            </div>
          </div>
        </div>

        <div className={'feature__item'}>
          <div className={'row'}>
            <div className={'col-6 first'}>
              <div className={'thumbnail'}>
                <img alt={'No restrictions'} src={thumbnailRestrictions} />
              </div>
            </div>

            <div className={'col-6'}>
              <div className={'feature__content'}>
                <h2>No restrictions.</h2>
                <p>
                  Ferdi doesn't restrict its usage. Use every service you want, as many times as you want and how you
                  want.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'feature__item'}>
          <div className={'row'}>
            <div className={'col-6'}>
              <div className={'feature__content'}>
                <h2>...and so much more!</h2>
                <p>Ferdi ships with so many great features.</p>
                <div className={'button'}>
                  <Link to="/features">Browse Features</Link>
                </div>
              </div>
            </div>

            <div className={'col-6 first'}>
              <div className={'thumbnail'}>
                <img alt={'and much more features'} src={thumbnailMore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Testimonials
      slides={[
        {
          text: 'Ferdi offers no restrictions and no additional features that are subject to a fee. A real download tip!',
          logo: testimonialChipde,
          link: 'https://www.chip.de/downloads/Ferdi_177453674.html',
          name: 'Chip.de',
        },
        {
          text: 'You can concentrate all of your messaging applications in a single messaging browser, instead of having numerous taskbar and system tray icons.',
          logo: testimonialMakeuseof,
          link: 'https://www.makeuseof.com/tag/best-telegram-desktop-client-apps/',
          name: 'MakeUseOf.com',
        },
        {
          text: 'To put it simply: I love Ferdi. It does exactly what I want to, costs nothing, lets me keep my privacy.',
          logo: testimonialJakelee,
          link: 'https://blog.jakelee.co.uk/recommendation-ferdi-the-messaging-service-aggregator/',
          name: 'Jake Lee',
        },
        {
          text: 'Since the lessons at the university are digital I use Ferdi, the all-in-one messenger app.',
          logo: testimonialSandromatter,
          link: 'https://twitter.com/sandromatter/status/1240207292097798147',
          name: 'Sandro Matter',
        },
        {
          text: 'Ferdi is a hard-fork of Franz that adds some awesome features and removes unwanted ones.',
          logo: null,
          link: 'https://www.funkyspacemonkey.com/ferdi-a-free-open-source-cross-platform-all-in-one-messaging-app',
          name: 'FunkySpaceMonkey',
        },
        {
          text: 'For those who like to have all their messaging services centralized in a single app, Ferdi offers a free "all in one" client that goes straight to the point.',
          logo: null,
          link: 'https://www.geekzone.fr/2020/01/20/ferdi-un-fork-gratuit-de-franz-le-client-de-messagerie-centralise/',
          name: 'Geekzone',
        },
        {
          text: 'When a web application is not being used, it will go into hibernation, which will consume less resources. For this alone, I think it is worth trying Ferdi.',
          logo: null,
          link: 'https://ubunlog.com/ferdi-un-fork-de-franz/',
          name: 'Ubunulog',
        },
        {
          text: 'Fredi is a useful app that saves you from switching between tabs and devices just to get your messages.',
          logo: null,
          link: 'https://www.ilovefreesoftware.com/15/windows/business/communications/combine-multiple-messaging-services-in-one-application-ferdi.html',
          name: 'I Love Free Software',
        },
        {
          text: 'Ferdi could become something almost indispensable for those who use a lot of messaging services and want, or need, to keep using them all but from a single, and easily accessible, place.',
          logo: null,
          link: 'https://www.softpedia.com/get/Internet/Chat/Other-Chat-Tools/Ferdi.shtml',
          name: 'Softpedia',
        },
      ]}
    />

    <div className={'call-to-action'}>
      <div className={'container'}>
        <div className={'call-to-action__content'}>
          <h2>Download Ferdi for free.</h2>
          <p>Download Ferdi today and join its ever-growing userbase.</p>
        </div>

        <div className={'button'}>
          <Link to="/download">Download</Link>
        </div>
      </div>
    </div>

    <div className={'support'}>
      <div>
        <div className={'call-to-action__content'}>
          <p>Do you like Ferdi? Spread the love!</p>
        </div>

        <div className={'actions'}>
          <div className={'button'}>
            <a href="https://github.com/getferdi/ferdi" title="Star on GitHub Ferdi">
              <Icon.Star />
              Star on GitHub
            </a>
          </div>
          <div className={'button'}>
            <a
              href="https://twitter.com/intent/tweet?text=Ferdi%3A%20A%20messaging%20browser%20that%20allows%20you%20to%20combine%20your%20favourite%20messaging%20services%20into%20one%20application.%0A%0ACheck%20out%20Ferdi%20at%20https%3A//getferdi.com"
              title="Tell your Friends about Ferdi on Twitter"
            >
              <Icon.ThumbsUp />
              Tell your Friends
            </a>
          </div>
          <div className={'button'}>
            <a href="https://opencollective.com/getferdi" title="Open Collective Ferdi">
              <Icon.CreditCard />
              Support our Open Collective
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
