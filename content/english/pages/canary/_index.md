---
title: "Canary Statement"
description: "Warrant Canary"
draft: false
bg_image: "images/canary.jpg"
layout: "single"
---

## /kəˈnɛəɹi/ _{noun}_

1. A small songbird in the finch family, _serinus canaria domestica_, originally native to islands in the North Atlantic.
2. A mechanism to test for unsafe conditions, originating from the use of canaries in coal mines to detect poisonous gases or cave-ins. If the canary died, it was time to get out of the mine. More recently, the term has been used by some online service providers to refer to an affirmative statement, updated regularly, that the provider has not been subjected to certain legal processes. If the statement is not updated in a timely fashion, users may infer that the canary statement may no longer be true.


{{% code file="/pages/canary/canary-statement-signed.txt" %}}

## Verification instructions

You should follow [these instructions to import our gpg key and verify the keyid](/pages/canary/keys.html). Then you may follow these steps to verify this statement:

1. Download the signed [canary statement](/pages/canary/canary-statement-signed.txt)
1. Then run this command in a terminal:

	```
	gpg --auto-key-retrieve --verify canary-statement-signed.txt
	```

1. You should get output that is similar to the following (note the date will change, based on when the canary statement was signed):

    ```
    gpg: Signature made Wed 15 Oct 2025 23:21:00 PDT
    gpg:                using RSA key 12463A8A9661FBB98C15C5F2FB8E49432F2EE9CC
    gpg: Good signature from "Pawprint Prototyping Board <board@pawprintprototyping.org>" [ultimate]
    gpg:                 aka "Totally Legit Agency <info@totallylegit.agency>" [ultimate]
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg:          There is no indication that the signature belongs to the owner.
    Primary key fingerprint: 1246 3A8A 9661 FBB9 8C15 C5F2 FB8E 4943 2F2E E9CC
    ```

You should make sure that it says "Good signature" in the output and confirm that the keyid matches.  If this text has been altered, then this information should not be trusted.

Unless you have taken explicit steps to build a trust path to our GPG key, you will see a warning message similar to:

```
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
```

However, you still should see the “Good signature”.
