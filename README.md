# Syndrome Surveillance

This repository is a website for use by Clackamas County.  These are developer notes.
I have included notes that assume the reader is using a Mac OSX or Linux command line.

## setting up your development environment

### Installing node

This site is a ReactJS app so you will need to have NodeJS (verson 6.10.2) installed on your computer to run it.  You can install the node version manager (nvm) with the following command.

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

The program `nvm` will be available from your command line once you source the project from your shell. To source your profile from your shell run `. ~/.bash_profile` or open a new terminal window.

Now that `nvm` is installed you can install node and set a default node version:

```bash
nvm install 6.10.2 && nvm alias default 6.10.2
```

You will see that you have a successful install of node if you check the versions of `node` & `npm` and see

```bash
$ node -v
v6.10.2
$ npm -v
3.10.10
```

### Integrated Development Environment (IDE)

You will want to set up an IDE before you begin making contributions to this code base. I am using VS Code to develop this site and collaboration will be easiest if we use the same IDE as one another.

A download of VS Code is available [here](https://code.visualstudio.com/download). Once you have installed the editor and you have the program open you can open the command pallet (shift + command + P) and search for `install 'code' command in PATH`.  Once you run that command from the command pallet, you can type `code <directory name>` to open any directory in VS Code from the command line.

## Cloning the repository

Navigate to a repository where you would like to store the source code.  Then run

```bash
git clone https://github.com/codeforpdx/syndromsurveillance.git
code mva-site
```

## Running the site locally

If you have the repository open in VS Code, you can open a terminal ``control + ` `` and run `npm install`.  This will install all of the project dependencies.  To then run the project run `npm start` and navigate to `localhost:8080` in your browser.
