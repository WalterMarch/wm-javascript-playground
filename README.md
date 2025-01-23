# JavaScript

**JavaScript** is a high-level language traditionally used to add interactivity and pizazz to websites. As such, it is very popular and widely used.

With the Node.js runtime, it is also easy to write and execute **JavaScript** scripts that are command-line scripts.

## File Extension

`.js`

## Execute Application Scripts

```bash
cd <path/to/file>
node <filename>.js
```

## configit.sh

This repository's *devcontainer.json* uses a `postCreateCommand` to run `configit.sh`.

This script uses information particular to the user of the repository.

```shell
#!/bin/bash

git config --global user.email "yourEmail@mail.com"
git config --global user.name "yourGitUserName"
git config --global push.autoSetupRemote true
git config --global push.default current
git config --global init.defaultBranch main
git config --global --add safe.directory $1
```
