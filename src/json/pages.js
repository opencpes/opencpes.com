import Codex from '../routes/Codex/Codex';

export const pagesJSON = [
  /*{
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/privacy-guarantees',
    md: process.env.REACT_APP_MD_SRC + 'codex/privacy-guarantees.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/validating-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'codex/validating-opencpes.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/about-opencpes',
    md: process.env.REACT_APP_MD_SRC + 'codex/about.md',
    render: Codex,
    title: 'About OpenCPEs',
    desc: '',
    tech: false
  },
  /*{
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/getting-started',
    md: process.env.REACT_APP_MD_SRC + 'codex/getting-started.md',
    render: Codex,
    title: 'Getting Started',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/cpe-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/cpe-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/certification-providers',
    md: process.env.REACT_APP_MD_SRC + 'codex/certification-providers.md',
    render: Codex,
    title: '',
    desc: '',
    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/glossary',
    md: process.env.REACT_APP_MD_SRC + 'codex/glossary.md',
    render: Codex,
    title: 'OpenCPEs Glossary',
    desc:
      'Better understand the terms and language surrounding OpenCPEs by reviewing the OpenCPEs Glossary.',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/source-code',
    md: process.env.REACT_APP_MD_SRC + 'codex/source-code.md',
    render: Codex,
    title: 'OpenCPEs is Open Source Code and Open Data',
    desc:
      'All the software needed to use OpenCPE is currently available, and is licensed under the GPLv3. Binary release builds of the software are also available...',
    tech: true
  },
  /* {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/technical-details',
    md: process.env.REACT_APP_MD_SRC + 'codex/technical-details.md',
    render: Codex,
    title: '',
    desc: '',

    tech: false
  }, */
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/wallet',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsi-wallet.md',
    render: Codex,
    title: 'OpenCPEs centsiWallet Details',
    desc:
      'The OpenCPEs centsiWallet is a mobile client, currently available for Apple iOS in beta and in development for Google Android. If you want to be informed when it becomes available please signup to our ¢entsi announcement list',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/faq-blockchain-technology',
    md: process.env.REACT_APP_MD_SRC + 'codex/blockchain-tech.md',
    render: Codex,
    title: 'FAQ - Blockchain Technology',
    desc:
      'We looked at a number of technology options for data storage and distribution, including (but not limited to) SQL databases (including graph databases), NoSQL (key value stores, document stores, object stores, etc.), file storage and distributed caching to name a few...',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/faq-privacy-safety',
    md: process.env.REACT_APP_MD_SRC + 'codex/privacy-safety.md',
    render: Codex,
    title: 'FAQ - Privacy & Safety',
    desc:
      'We have three main strategies we use to protect your privacy and your data: we don’t store your data, we do not transfer your data to third parties, and a planned future capability is to provide confirmation of records when they are submitted...',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/faq-centsi',
    md: process.env.REACT_APP_MD_SRC + 'codex/centsi.md',
    render: Codex,
    title: 'FAQ - Centsi',
    desc:
      'centsi is the unit of measurement of the Continuing Professional Education (CPE) credits that will be stored in an individual’s OpenCPEs centsiWallet...',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/client-privacy',
    md: process.env.REACT_APP_MD_SRC + 'codex/client-privacy.md',
    render: Codex,
    title: 'How we Protect Client Privacy',
    desc:
      'Protecting client data is critical. We do not directly store client data, instead, we only store a hashed value of the client provided data, after combining it was a large (2^1024) random nonce. After this hashed value is created we immediately destroy the client data that was submitted to us. We also have a secure client, the OpenCPEs centsiWallet in technical beta that takes additional steps to protect client data...',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/protect-our-blockchain',
    md: process.env.REACT_APP_MD_SRC + 'codex/protect-our-blockchain.md',
    render: Codex,
    title: 'How we Protect Our BlockChain',
    desc:
      'So in theory, all client data sent to the OpenCPEs OCL blockchain is hashed with a large secret nonce and is effectively random data, random data is safe to write to a blockchain and make public, right?...',
    tech: true
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    type: 'codex',
    slug: '/codex/contact',
    md: process.env.REACT_APP_MD_SRC + 'codex/contact.md',
    render: Codex,
    title: 'Contact OpenCPEs',
    desc: '',
    tech: false
  }
];
