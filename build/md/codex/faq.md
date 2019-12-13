# OpenCPEs and centsay FAQ

## What is OpenCPEs?

OpenCPEs is a special blockchain project we are spinning out from Cloud Security Alliance, one of several blockchain offerings we will be delivering to the cybersecurity industry. Inspired by the cryptocurrency model, OpenCPEs promises to revolutionize how security professionals measure their professional development experiences.

## Why did we use Blockchain as our foundational technology?

We looked at a number of technology options for data storage and distribution, including (but not limited to) SQL databases (including graph databases), NoSQL (key value stores, document stores, object stores, etc.), file storage and distributed caching, to name a few.

To achieve privacy and security, we needed:

- Data storage and distribution that can easily be replicated and distributed without relying on a trusted central authority to ensure the data is correct once accepted into the system
- A mechanism to allow multiple parties (who may not trust each other) to agree on what data is stored in the data storage system
- Data storage that includes time/sequential series data so the order that the entries are written is known and cannot be tampered with
- Data immutability once written, but with the ability to update records and bind them together as needed (more on this later)
- Data storage that doesn’t actually store people’s PII (it’s hard to have GDPR compliance when you write PII to an immutable data store)
- The ability to witness arbitrary data (both content and size), and to validate certain forms of data that are understood (e.g. the photos with a QR code embedded)

A blockchain is an ideal solution to meet requirements 1, 2, 3 and 4, and with creative use of blockchain technologies and hashing technologies we can meet requirement 5 and 6.

## How does mining work?

OpenCPEs uses a proof of stake (PoS) consensus model, as such there is no "mining" activity in the classical sense, this is both efficient and reduces the time and effort required to create blockchain records.

## What is the deal with the centsay pseudo-crypto currency?

centsay is the unit of measurement of the continuing professional education (CPE) credits that will be stored in an individual’s OpenCPEs centsayWallet. To be clear, centsay is not a cryptocurrency. centsay is a pseudo cryptocurrency whichcan be used to measure value, but unlike a currency, it cannot be spent. Once centsay is entered into a user’s OpenCPEs centsayWallet it cannot leave. The main goal of centsay is to make it easier for users to express the value held in their OpenCPEs centsayWallet.

## How will OpenCPEs and centsay be used by cybersecurity professionals in the real world?

We have several examples of how centsay will be used

- A professional can attend a security conference and take a picture of a custom QR code to generate centsay credits.
- Security associations and standards bodies can use this to award centsay credits to professionals that attend chapter meetings, participate in research working groups, speak at conferences and many other related activities.
- Professional accreditation organizations can accept centsay credits to satisfy their traditional CPE requirements.
- A software company can award a security researcher centsay credits for discovering a vulnerability in their code.
- Content publishers from security magazines to online universities can award centsay credits for reading/writing articles, taking online courses, watching webinars and answering quizzes, etc.

There are many other examples we can cite, and you may have some ideas of your own. Professionals can easily get credit for experience and be rewarded for real accomplishments. This allows all of us to better measure competency in security professionals.

## How will OpenCPEs and centsay help me address existing annual CPE requirements I have with the security certifications I hold?

In the long run, any organization that issues security certifications or other related credentialing will be able to validate and accept centsay credits you make available from your OpenCPEs centsayWallet by using our tools. The reverse is true as well, and these organizations will be able to grant you centsay by achieving a certification. In the interim, the OpenCPEs centsayWallet will produce documentation for your credits that you can send to the accrediting organization via other means such as email.

We feel that organizations granting you certifications today will be eager to plug into OpenCPEs to assist qualified professionals in maintaining their certifications. The reality is, if you are not being given credit for your achievements within cybersecurity, you are being cheated out of the credentials you have earned, and ultimately, the career you deserve.

## Ok, I get how OpenCPEs and centsay make sense for certifications, how does this benefit other players in the cybersecurity industry?

Conference providers will offer centsay as it makes their conference more valuable and increases attendance. Educational websites will increase their traffic by offering centsay. Employers will have a better understanding of who the really qualified professionals are. There are many other examples.

## Blockchain records are immutable, how do you deal with incorrect/obsolete data?

Blockchain records are immutable (it’s a core feature). But that doesn’t mean we can’t add updated data and link to the original data. A simple analogy would be banking records: transactions are recorded and can be reversed if needed by simply creating a new transaction (e.g. a refund from a merchant). Banks do not simply delete transactions that are incorrect (your ledger needs to be correct and complete). From these transaction records your total balance can be calculated.

In our system, the original transaction will be referenced by the new transaction (e.g. “Record #45632 is an update to record #33872”). When someone needs to process the original record, they can also walk through the blockchain data to see if any updates exist and then request the new data and process it as needed. This also ensures that you can check if the evidence given to you for validation is, in fact, the latest version of that evidence.

## Which blockchain technology did you use?

We didn’t use an off-the-shelf blockchain technology for two main reasons:

- We are currently running a public, permissioned blockchain with a simple consensus protocol: “The CSA controls the data written to the blockchain” which ensures that all entries are properly hashed with a random nonce to protect the client data before being put into a public blockchain
- None of the existing blockchains had the privacy technology we needed, so rather than add our layer on top of something complex we simply created a proof-of-concept chain that can be used to validate data and prove it’s veracity

We call our custom blockchain the “Open Cybersecurity Ledger” (OCL)

## What about my privacy and my data?

We have three main strategies we use to protect your privacy and your data:

- We don’t store your data after we create the validation record (a secure, one-way hash-based proof system) that represents it
- We do not transfer your data to third parties that do not already have your data; you must conduct any actual data transfer yourself
- A planned future capability is to provide confirmation of records when they are submitted for registration. In this case we can, at your direction, transfer the submitted data to a third party that already has your data in order to provide confirmation proof that the claim is correct, in addition to creating a validation record for it

We don’t distribute your data outside of one very limited use case: if you submit evidence and request validation of the evidence by a third party that already has the data, we will send the data to that third party to validate the evidence. For example, if you have a CCSK certification and want to create a record with a validated copy of it, you would submit the email address and validation code associated with the CCSK certification. While processing it, we would use the CCSK verification system to validate this data. We then delete all the data once the validation record is created.

All other cases of data distribution are up to you. For example, if you apply for a job with a company and the company wants to validate your data, you will need to send your data directly to the company.

## Is this a social scoring / rating system?

No. By definition, we only accept data users submit about themselves. The data and the value of the centsay is held in a user-controlled wallet. We cannot disclose what is in a user’s wallet (we don’t have it) and we can’t disclose the evidence (we delete it immediately once we create a validation record).

This system is designed to allow security professionals to make specific claims about their education, certification, training, professional activities, and so on. The user decides what is submitted.

## How can I start using OpenCPEs?

We are diligently working to make the OpenCPEs technology available. Our blockchain technology, called Open Cybersecurity Ledgers (OCL) is operational and our client software centsayWallet and API libraries will be released soon.

To receive general announcements about the OpenCPEs platform, please join the announcements group by sending an email to announcements+subscribe@opencpes.com

To get technical notifications about the OpenCPEs platform, please join the development group by sending an email to devlist+subscribe@opencpes.com

If you are interested in a technology preview or learning about partnering with OpenCPEs, contact us at contact@opencpes.com.
