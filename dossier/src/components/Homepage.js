import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import IndexPicture from './index.jpg';

const FirstLeftText = () => <p>🛠 iToolBox</p>;

const FirstRightText = () => (
  <p>iToolBox curates a set of tools and notes to build up your development environment and toolkits.
    <a className={calloutLink} href="/intro">Detailed Introduction →</a>
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout props to the template or writing your own template.
    <a className={calloutLink} href="#">Homepage source →</a>
  </p>
);

const BannerText = () => <h1 style={{backgroundColor: 'rgba(12, 12, 12, 0.6)', opacity: 20, paddingLeft: '2em'}}>工欲善其事，必先利其器 ——《论语·卫灵公》</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={IndexPicture} />,
  FirstCallout: (
    <HomepageCallout backgroundColor="#030303" color="white" leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <HomepageCallout leftText={SecondLeftText} rightText={SecondRightText} color="white" backgroundColor="#061f80" />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
