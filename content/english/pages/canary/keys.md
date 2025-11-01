---
title: "GPG Keys"
description: "Our GPG Keys and certificates for encryption and signing."
draft: false
layout: "single"
---


Warning: this process is pretty technical, it requires familiarity with OpenPGP and the command-line. It assumes you have the program `gpg` installed.

## Import Pawprint's PGP key

On the terminal, import Pawprint's public OpenPGP key from a keyserver:

<code>gpg --recv-key 12463A8A9661FBB98C15C5F2FB8E49432F2EE9CC</code>
<code>gpg --fingerprint 12463A8A9661FBB98C15C5F2FB8E49432F2EE9CC</code>

The first line will import the key into your keyring, but there is no guarentee that you actually imported the right key. The `--fingerprint` command allows you to see the fingerprint of the key and actually confirm you imported the correct key. You should see output that contains this line:

<pre>
Key fingerprint = 4E07 9126 8F7C 67EA BE88  F1B0 3043 E2B7 139A 768E
</pre>

There is no particular reason that you should trust this key. You can see who has trusted it:

<code>gpg --list-sigs 12463A8A9661FBB98C15C5F2FB8E49432F2EE9CC</code>
