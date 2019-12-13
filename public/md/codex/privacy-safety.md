# FAQ - Privacy and Safety

## How do I create an account to use the system?

Simple: you don’t need to. Our system doesn’t require accounts in the traditional sense, instead we believe the data owner should control their data and decide how to distribute it. With the centsayWallet we do not see your data, we only see a validation record that you generate and submit to us. With the email gateway ([centsay@opencpes.com](mailto:centsay@opencpes.com)) we will of course see whatever data you submit, however we generate a validation record and immediately delete your data. You get to decide who sees your data and how it is distributed.

## What about my privacy and my data?

We have three main strategies we use to protect your privacy and your data:

- We don’t store your data after we create the validation record (a secure one way hash based proof system) representing it
- We do not transfer your data to third parties that do not already have your data, you must conduct any actual data transfer yourself
- A planned future capability is to provide confirmation of records when they are submitted for registration, in this case we can, at your direction, transfer the submitted data to a third party that already has your data in order to provide confirmation proof that the claim is correct in addition to creating a validation record for it

For data sent in via the centsayWallet it will have already had the client side cryptographically secure nonce added and a hash value created, as such we have no idea what your actual data is in this case. For data submitted via the email gateway ([centsay@opencpes.com](mailto:centsay@opencpes.com) we only store your data for the short period of time between you submitting it to us, and our creation of the validation record. In basic terms we create a one way hash (with some added salt data to add additional security), the value of which can be used to validate the original data, but the validation record itself cannot be used to reconstruct the original data. Once the validation record is created we delete your data from our system as we no longer need it or want it.

For #2 and #3 we don’t distribute your data outside of one very limited use case: if you submit evidence and request validation of the evidence by a third party that already has the data we will send the data to that third party to validate the evidence. For example if you have a CCSK certification and want to create a record with a validated copy of it you would submit the email address and validation code associated with the CCSK certification, while processing it we would use the CCSK verification system to validate this data. As with #1 we then delete all the data once the validation record is created. Please note we do not support validation yet, so currently we do not transfer your data in any way, shape or form.

All other cases of data distribution are up to you, for example if you apply for a job with a company and the company wants to validate your data you will need to send your data directly to the company.

## How do I share my data with a third party if they need to validate it?

Simple: you send it to the third party in some pre-agreed way (e.g. email or a secure web form). OpenCPEs is not involved in the transfer or delivery of your data to any parties requesting it. This is one of our major strategies for privacy protection. We believe the data owner should have direct control over distributing their data to third parties that request it.

## How does a third party validate my data?

Currently we have a set of command line tools that run in a Linux/UNIX environment and a GUI client on top of them that is available for MacOS only at this time. We are working on additional tools and software. The software and data is available at https://opencpes.com/software-data-download/

## How do I opt-in?

If you want to participate you you can get the technical beta for Apple iOS when it is released or simply email any images or PDF’s you want to have created and recorded with a validation record in our OpenCPEs OCL blockchain by emailing [centsay@opencpes.com](mailto:centsay@opencpes.com).

## How do I opt-out?

If you want to opt-out at a later date you simply stop submitting data to the OpenCPEs OCL blockchain. You can also optionally delete all your accumulated evidence so that it no longer exists, the validation records in our OpenCPEs OCL blockchain cannot be used to recreate the data that was submitted and used to create the validation records.

## Is this a social scoring / rating system?

No. By definition we only accept data users submit about themselves. The data and the value of the centsay is held in a user controlled wallet, we cannot disclose what is in a user’s wallet (we don’t have it) and we can’t disclose the evidence (we delete it immediately once we create a validation record).
This system is designed to allow security professionals to make specific claims about their education, certification, training, professional activities and so on. The user decides what is submitted.

## Why don’t you send confirmation emails?

We currently do not send email data out of our system to other parties (including the original submitter) in order to minimize the chance of any data leakage or meta data analysis. Confirmation messages are not needed for the OpenCPEs centsayWallet as it can simply submit a record and then check the OpenCPEs OCL blockchain to ensure the record was created properly.

## How does identity management work?

Another major security feature of OpenCPEs is that identity management is done on the client side and not centrally. This prevents any possible data breach of stored data since 1) all the data we store is public which means 2) the data we store is not sensitive or identifiable.

Longer term, with the centsayWallet there will be secure methods that allow you to prove control over email addresses, domain names, social media accounts and so on, allowing you to add identity information to the data in your centsayWallet that has been confirmed by trusted parties of your choosing.
