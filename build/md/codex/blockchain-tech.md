# FAQ - Blockchain Technology

## Why did we use Blockchain as our foundational technology?

We looked at a number of technology options for data storage and distribution, including (but not limited to) SQL databases (including graph databases), NoSQL (key value stores, document stores, object stores, etc.), file storage and distributed caching to name a few.

To achieve the privacy and security properties in we needed:

- Data storage and distribution that can easily be replicated and distributed and does not rely upon a trusted central authority to ensure the data is correct once accepted into the system
- A mechanism to allow multiple parties (who may not trust each other) to agree on what data is stored in the data storage system
- Data storage that includes time/sequential series data so the order that the entries are written is known and cannot be tampered with
- Data immutability once written, but with the ability to update records and bind them together as needed (more on this later)
- Data storage that doesn’t actually store people’s PII (it’s hard to have GDPR compliance when you write PII to an immutable data store)
- The ability to witness arbitrary data (both content and size), and to validate certain forms of data that are understood (e.g. the photos with a QR code embedded)

A blockchain is an ideal solution to meet requirements 1, 2, 3 and 4 and with creative use of blockchain technologies and hashing technologies we can meet requirement 5 and 6.

## How does mining work?

We don't use a proof of work (PoW) consensus model, instead we use a proof of stake (PoS) consensus system, this is both more efficient (no wasted mining cycles) and reflects the simple fact that OpenCPE records are created by humans engaging in CPE activities and certifications and then recording them in their centsiWallet. 

## Blockchain records are immutable, how do you deal with incorrect/obsolete data?

Blockchain records are immutable (it’s a core feature). But that doesn’t mean we can’t add updated data and link to the original data. A simple analogy would be banking records: transactions are recorded, and can be reversed if needed by simply creating a new transaction (e.g. a refund from a merchant). Banks do not simply delete transactions that are incorrect (your ledger needs to be correct and complete). From these transaction records your total balance can be calculated.

In our system the original transaction will be referenced by the new transaction (e.g. “Record #45632 is an update to record #33872”), when someone needs to process the original record they can also walk through the blockchain data to see if any updates exist and then request the new data and process it as needed. This also ensures that you can check if the evidence given to you for validation is in fact the latest version of that evidence.

## Which blockchain technology did you use?

We didn’t use an off the shelf blockchain technology for two main reasons:

- We are running a public, permissioned blockchain with a simple consensus protocol currently: “The CSA controls the data written to the blockchain” which ensures that all entries are properly hashed with a random nonce to protect the client data before being put into a public blockchain
- None of the existing Blockchains had the privacy technology we needed, so rather than add our layer on top of something complex we simply created a proof of concept chain that can be used to validate data and prove it’s veracity

We call our custom Blockchain the “Open Cybersecurity Ledger” (OCL)
