---
path: renaming-default-branch
date: 2020-07-10T19:29:04.345Z
title: Renaming the default branch
description: Quickly rename the default git branch for new repositories
---
## Quickstart

Execute the following script in a terminal window to rename your default branch to `main`. If you want to use a different name then follow the steps outlined in the explanation below and update the appropriate values.

```sh
curl https://raw.githubusercontent.com/jamiedavenport/scripts/main/rename-master.sh | sh -
```

The source code for this script can be found <a href="https://github.com/jamiedavenport/scripts/blob/main/rename-master.sh" target="_blank" rel="noreferrer noopener">here</a>. Read on for an explanation of how it works.

## Explanation 

The following 4 lines of code are executed on your machine. To understand how this changes the default branch name, we first need to understand init templates and the Git `HEAD`.

```sh
#!/bin/sh

DIR=~/.git/templates/git.git
mkdir -p $DIR
git config --global init.templateDir "$DIR"
echo 'ref: refs/heads/main' > $DIR/HEAD
```

### Init templates
When we first initialise a new Git repository using `git init`, the command creates a directory which contains files and folders specific to git workflows. In addition to this setup, the command also copies over files from a template directory.

```sh
DIR=~/.git/templates/git.git
mkdir -p $DIR
git config --global init.templateDir "$DIR"
```

These commands create a new template directory and update the .gitconfig to use it.

### Git `HEAD`
You can think of the `HEAD` as the current branch. It is stored as a file in the `.git` directory.

```sh
echo 'ref: refs/heads/main' > $DIR/HEAD
```

By adding this file to the git init template we ensure that the `HEAD` will be set to our new name instead of the default of `master`.
