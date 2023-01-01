# BaayMax 😎

> Hey everyone, I wanted to let you all know that I have decided to archive the BaayMax repository. As many of you know, BaayMax is a tool for developers to generate intuitive, unique, and flexible portfolio sites. While it has been a useful tool for many of you, my schedule has become too busy to properly maintain it. However, I am not abandoning the project completely! I have plans to build a much more stable release and version of BaayMax that will not only be accessible for developers, but also for designers and non-developers. My goal is to create a product that is useful for a wider range of users and can be easily accessed and used by anyone. Thank you for your understanding and support as I work towards creating a better product. Stay tuned for updates on the new release of BaayMax!


Generating of portfolio site just got easier. BaayMax a tool for developers which enables generating of `intuitive`, `unique`, `flexible` portfolio site ready for deployment.

With just a command, your portfolio is ready.

Checkout Live Version: [baaymax portfolio](https://benrobo.vercel.app/)

Watch brief video about #Baaymax [BaayMax Video](https://youtu.be/X_cHNdnG4Bo)

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/baaymax (2).gif?raw=true">


<img src="https://github.com/Benrobo/baaymax-assets/blob/main/cli.png?raw=true">

## Getting Started 😎

### To get started in using baaymax, make sure `Nodejs` and `Git` are preinstalled on your PC.

<br>

> check if `nodejs` and `git` are installed using the below commands.

#### Git

```bash 
    node --version
    # v16.4.2
```

#### Nodejs

```bash
    git --version
    # git version 2.35.1.windows.2
```

If the above requirement are `checked`, it time to generate your personal portfolio.

### Install `BaayMax` globally on your pc using any of the below comamnds. 🙌

`NPM`
```bash
    npm i -g baaymax
```
`YARN`
```
    yarn add global baaymax
```

### Check if it installed globally on your pc by running : ✌

```
    baaymax
```

A screen below should be printed out within your terminal

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/cli.png?raw=true">

### Generate your own portfolio. 💖❤
using `baaymax --init <project_name>` would run you through the setup, kindly follow all instructions carefully.

```
    baaymax --init portfolio-v3
```

Once all instructions have been met carefully, you would be prompted to open your portfolio site within `vscode`. If you have vscode installed as your default editor choose `Yes` otherwise `No`.

### Start the development server using ✔

```bash
    npm run dev
```

Open `localhost:3000/` within your browser.

## Congratulation 🎉🎉🎉

you now have your own personal portfolio site ready to use which can now be deployed.

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/app.png?raw=true">


## Configure your portfolio.

Before running your portfolio, make sure you follow the below `instructions` carefully.

### Setp 1
Configure your information found in `...data/usersInfo.json`. This file contain your core information about you and some other stuff.
> . This can be done after making use of the [BAAYMAX_CLI APP](https://github.com/Benrobo/baaymax-cli/)

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/2.png?raw=true">

### Setp 2
Configure your favorites `programming languages` or `tools` found in `...data/languages.json`. Go to [Devicons.dev](https://devicon.dev/) select (3) your favorites tools and replace the ones found within this file.

> . This can be done after making use of the [BAAYMAX_CLI APP](https://github.com/Benrobo/baaymax-cli/)


<img src="https://github.com/Benrobo/baaymax-assets/blob/main/5.png?raw=true">


### Setp 3
Configure your social accounts found in `...data/socials.json`.

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/3.png?raw=true">


### Setp 4
Configure your personal `projects` found in `...data/projects.json`.

> . This can be done after making use of the [BAAYMAX_CLI APP](https://github.com/Benrobo/baaymax-cli/)

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/4.png?raw=true">

### Setp 5
Configure your personal `projects` found in `...confid/index.js`.

BaayMax uses EmailJs a javascript library for sending mails right into your inbox. So do the following.

1. Visit https://emailjs.com.
2. Create an account.
3. Follow the instructions on setting up yours @ https://www.emailjs.com/docs/sdk/installation/. If you feel lost checkout my old [Youtube Video](https://www.youtube.com/watch?v=XdXo9rravmk&t=1762s) where I explain how to send mails using this library. [ Disclaimer: the video was made when I was still a beginner, so take whatever you see as a beginner. ].
Replace the below config with yours, if not, users wont be able to send MESSAGE to your inbox.

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/1.png?raw=true">

### Step 6

Dont forget to setup your `Emailjs Template` as shown in the picture, if you feel like adding a different style, also update the `template` object found in `/components/contact/index.js <line 86:90>`

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/emailjs.PNG?raw=true">

```javascript
    86 const templateParams = {
    87    from_name: name,
    88    sender_email: email,
    89    message: message
    90 };
```

### Step 7

Upload your `CV / RESUME` file within the `public/CV` folder with the name `resume.pdf` just as seen in the picture below.

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/cv.PNG?raw=true">

# Customizing your site theme.
This can be done by simply updating some of the `color codes` found in `tailwind.config.js`

<img src="https://github.com/Benrobo/baaymax-assets/blob/main/color.png?raw=true">

> ALSO, IF YOU FEEL NOTHING CHANGE AFTER MAKING NECESSARY UPDATES, SIMPLY CLEAR `CACHE STORAGE` ALONG WITH `LOCALSTORAGE`.


## Disclaimer 😢

> if you run into an `error` kindly post it within the github issue tab here [Raise Error](https://github.com/Benrobo/baaymax-cli/issues)
