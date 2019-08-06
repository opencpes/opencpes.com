# How We Protect Your Privacy in OpenCPEs

Let’s say you want to register an OpenCPEs record that contains just your email address and your Social Security Number. If you create a document such as “johnsmith@example.org:740-00-1234” and hash it you would have a piece of data that is now very easy to brute force. Your email address is generally not that secret, and trying every hash value of 000-00-0000 through 999-99-9999 will take seconds on modern hardware. If you published this hash an attacker would be able to discover your SSN relatively quickly if they tried.

In order to protect client data from these brute force attacks the OpenCPEs centsiWallet creates a random value (a secret “nonce”) that is 1024 bits in length, prefixes this to the client data and then takes a 512 bit hash of this.

In mathematical terms it’s simple: we have a hash function with 2^512 possible outputs and a guarantee of at least 2^1024 possible inputs (the secret nonce) plus whatever the value of the actual data is. If an attacker were to try and brute force search for client data they would end up with multiple inputs (many, many, many thousands) that hash to the public hash value. Effectively the data the OpenCPEs centsiWallet submits is random noise.

This means that even if the OpenCPEs OCL blockchain servers are compromised they will not be able to recover the original client data if the OpenCPEs centsiWallet was used.

Even if you do not use the OpenCPEs centsiWallet we take steps to protect your data by adding a random 1024 bit nonce to the client provided data before creating a hash of it and storing the new hash in the OpenCPEs OCL blockchain. At all times we provide a high degree of transparency and clarity on what data we are processing and how we are processing it, additionally, you can download the source code and all data at any time you wish.
