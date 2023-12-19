import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github - iToolBox',
    href: 'https://github.com/QPod/iToolBox',
  },
  {
    title: 'Carbon Design System',
    href: 'https://www.carbondesignsystem.com',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
