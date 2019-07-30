export const techJSON = [
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    slug: 'codex/source-code',
    type: 'Article',
    title: 'OpenCPEs Source Code',
    desc:
      'All the software needed to use OpenCPE is currently available, and is licensed under the GPLv3. Binary release builds of the software are also available...'
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    slug: 'codex/client-privacy',
    type: 'Article',
    title: 'How we Protect Client Privacy',
    desc:
      'In order to protect the client data from simple brute force attacks against the hash value the client provides we have the client system create a random value (a secret “nonce”) that is 1024 bits in length, and then take the 512 bit hash of the original data plus the secret nonce... '
  },
  {
    id: Date.now() * Math.floor(Math.random() * 100 + 1),
    slug: 'codex/centsi-wallet-details',
    type: 'Article',
    title: 'Centsi Wallet Details',
    desc:
      'The centsi wallet (a mobile client for Apple iOS and Google Android) is currently under development, if you want to be informed when it becomes available please signup to our centsi Wallet Google Group...'
  }
];
