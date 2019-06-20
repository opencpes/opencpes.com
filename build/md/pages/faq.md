# OpenCPEs and ¢entsi FAQ

## How do I create an account to use the system?

Simple: you don’t need to. Our system doesn’t require accounts in the traditional sense, instead we believe the data owner should control their data and decide how to distribute it. With the CyberCV Wallet we do not see your data, we only see a validation record that you generate and submit to us. With the email gateway (centsi@opencpes.com) we will of course see whatever data you submit, however we generate a validation record and immediately delete your data. You get to decide who sees your data and how it is distributed.

## Why did we use a Blockchain?

We looked at a number of technology options for data storage and distribution, including (but not limited to) SQL databases (including graph databases), NoSQL (key value stores, document stores, object stores, etc.), file storage and distributed caching to name a few.

To achieve the privacy and security properties in broad terms we needed:

- Data storage and distribution that can easily be replicated and distributed and does not rely upon a trusted central authority to ensure the data is correct once accepted into the system
- A mechanism to allow multiple parties (who may not trust each other) to agree on what data is stored in the data storage system
- Data storage that includes time/sequential series data so the order that the entries are written is known and cannot be tampered with
- Data immutability once written, but with the ability to update records and bind them together as needed (more on this later)
- Data storage that doesn’t actually store people’s PII (it’s hard to have GDPR compliance when you write PII to an immutable data store)
- The ability to witness arbitrary data (both content and size), and to validate certain forms of data that are understood (e.g. the photos with a QR code embedded)

A Blockchain is an ideal solution to meet requirements 1, 2, 3 and 4 and with creative use of Blockchain technologies and hashing technologies we can meet requirement 5 and 6.

## Blockchain records are immutable, how do you deal with incorrect/obsolete data?

Blockchain records are immutable (it’s kind of a core feature). But that doesn’t mean we can’t add updated data. A simple analogy would be banking records: transactions are recorded, and can be reversed if needed by simply creating a new transaction (e.g. a refund from a merchant). From these transaction records your total balance can be calculated for example.

In our system the original transaction will be referenced by the new transaction (e.g. “Record #45632 is an update to record #33872”), when someone needs to process the original record they can also walk through the Blockchain data to see if any updates exist and then request the new data and process it as needed. This also ensures that you can check if the evidence given to you for validation is in fact the latest version of that evidence.

## Which Blockchain technology did you use?

We didn’t use an off the shelf Blockchain technology for two main reasons:

- We are running a public, permissioned Blockchain with a simple consensus protocol currently: “The CSA controls who gets to write to the Blockchain”
- None of the existing Blockchains had the privacy technology we needed, so rather than add our layer on top of something complex we simply created a proof of concept chain that can be used to validate data and prove it’s veracity

## What about my privacy and my data?

We have three main strategies we use to protect your privacy and your data:

- We don’t store your data after we create the validation record (a secure one way hash based proof system) representing it (referred to as “witnessing”)
- We do not transfer your data to third parties that do not already have your data, you must conduct any actual data transfer yourself
- We can, at your direction, transfer data to a third party that already has your data in order to provide proof that the claim is correct in addition to witnessing it

For data sent in via the CyberCV Wallet it will have already had the client side cryptographically secure nonce added and a hash value created, as such we have no idea what your actual data is in this case. For data submitted via the email gateway (centsi@opencpes.com we only store your data for the short period of time between you submitting it to us, and our creation of the validation record. In basic terms we create a one way hash (with some added salt data to add additional security), the value of which can be used to validate the original data, but the validation record itself cannot be used to reconstruct the original data. Once the validation record is created we delete your data from our system as we no longer need it or want it.

For #2 and #3 we don’t distribute your data outside of one very limited use case: if you submit evidence and request validation of the evidence by a third party that already has the data we will send the data to that third party to validate the evidence. For example if you have a CCSK certification and want to create a record with a validated copy of it you would submit the email address and validation code associated with the CCSK certification, while processing it we would use the CCSK verification system to validate this data. As with #1 we then delete all the data once the validation record is created. Please note we do not support validation yet, so currently we do not transfer your data in any way, shape or form.

All other cases of data distribution are up to you, for example if you apply for a job with a company and the company wants to validate your data you will need to send your data directly to the company.

## How do I share my data with a third party if they need to validate it?

Simple: you send it to the third party in some pre-agreed way (e.g. email or a secure web form). OpenCPEs is not involved in the transfer or delivery of your data to any parties requesting it. This is one of our major strategies for privacy protection. We believe the data owner should have direct control over distributing their data to third parties that request it.

## How does a third party validate my data?

Currently we have a set of command line tools that run in a Linux/UNIX environment and a GUI client on top of them that is available for MacOS only at this time. We are working on additional tools and software. The software and data is available at <a href="https://opencpes.com/software-data-download/">https://opencpes.com/software-data-download/</a>

## How do I opt-in?

If you want to participate you simply email any images or PDF’s you want to have witnessed and recorded with a validation record in our Blockchain by emailing&nbsp;<a href="mailto:centsi@opencpes.com">centsi@opencpes.com</a>.

## How do I opt-out?

If you want to opt-out at a later date you simply stop submitting data to the OpenCPEs system. You can also optionally delete all your accumulated evidence so that it no longer exists, the validation records in our Blockchain cannot be used to recreate the data that was submitted and used to create the validation records.

## What about people who cheat the system?

Any system that measures and provides value will have people who want to game the system or even cheat in order to gain additional value. We have several strategies to deal with potential cheaters:

- The evidence used to make a claim and generate value must be kept in order for that claim and value to be used
- The evidence can then be processed by someone validating records to confirm its correctness
- We will encourage people to create strong evidence and interlocking evidence. For example instead of just taking a picture of the RSA venue you can take a selfie with yourself in the picture (this is of course optional). You can also submit more than one piece of evidence for a claim, for example a training course may provide a certificate of completion, you could provide this as well as having a copy of the receipt and a selfie of yourself in the training room itself
- We can add record updates to invalidate fake credentials or fake claims when they are discovered and any attempts to use the original evidence to support a claim will show an updated record allowing validators to request updated information to determine if the claim is indeed correct

## What is the deal with the ¢entsi pseudo-crypto currency?

To be clear ¢entsi is not a cryptocurrency. ¢entsi is a pseudo cryptocurrency, it can be used to measure value but unlike a currency it cannot be spent, once ¢entsi is entered into a users wallet it cannot leave. The main goal of ¢entsi is to provide an abstraction and make it easier for users to express the value held in their wallet.

## Is this a social scoring / rating system?

No. By definition we only accept data users submit about themselves. The data and the value of the ¢entsi is held in a user controlled wallet, we cannot disclose what is in a users wallet (we don’t have it) and we can’t disclose the evidence (we delete it immediately once we create a validation record).

This system is designed to allow security professionals to make specific claims about their education, certification, training, professional activities and so on. The user decides what is submitted.

## Why don’t you send confirmation emails?

We currently do not communicate data out of our system to other parties (including the original submitter) in order to minimize the chance of any data leakage. We plan to add confirmation messages once we deploy the CyberCV wallet software as this will allow people to create wallets with their own encryption keys that can then be used to communicate securely with the OpenCPEs system.

## How does identity management work?

Currently you can simply send in arbitrary images and PDFs for witnessing. You can take screenshots of your identities (email, social media, etc.) and submit them, however longer term, with the CyberCV wallet we will provide secure methods that allow you to prove control over email addresses, domain names, social media accounts and so on.
