# How we protect our BlockChain

So, in theory, all client data sent to the OpenCPEs OCL blockchain is hashed with a large secret nonce (1024 bits) and is effectively random data, random data is safe to write to a blockchain and make public, right? But what if the client submitted data isn’t random? What if a client manually submits a hash value that is actually their name or other Personally Identifiable Information (PII)? Or what if a client submits illegal data into the OpenCPEs blockchain?

By definition blockchains are immutable and we can’t easily remove data. Even if you do remove older entries by rolling back all the transactions, removing the “bad” transaction and then replaying the rest of the “good” transactions that follow you will still have made the data public and it may have been copied.

The solution is simple: OpenCPEs creates a large random value (a “nonce”) periodically, this nonce is public, and it is added as a prefix to all client submitted data before a hash of this is taken and then entered into the blockchain. This means that no client submitted data is directly entered into the OpenCPEs OCL blockchain. OpenCPE’s creates a new nonce periodically and only uses the nonce for a short period of time, this means that the chances of a client being able to create an arbitrary input that combined with the nonce creates a data entry with PII or illegal data is statistically very close to 0.

Because OpenCPE can prevent PII, illegal data and other forms of problematic data from getting into the OpenCPEs OCL blockchain we can make the data public, safely.

Additionally, OpenCPE OCL blockchain records do not contain any directly identifying data, we do not embed a client ID, IP address or anything else, we simply embed the hash or signature of the data in the OpenCPEs OCL blockchain record. This prevents traffic analysis and other forms of metadata leaks.
