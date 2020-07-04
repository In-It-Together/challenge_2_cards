# Challenge 2 - Let's Create Some Cards

Thanks for joining our mini coding challenge. [Check out our past work!](https://github.com/In-It-Together?q=challenge) **Follow the instructions below to work alongside us.**

## Challenge Scope

This challenge will be occurring on July 3rd, 9am - 2:30pm. If you're coming here after the fact, check out people's buttons at the bottom of this readme. Let's build some cards in React!

<img src='https://media.giphy.com/media/xT9DPlAUKTl1GeZjC8/giphy.gif' />

Cards are used in various places. You might be familiar with cards if you ever shopped online and looked through a catalogue. When we say cards, we're really saying any container of information with similar structured items arranged in a row, column or grid. Saying 'cards' is easier than 'containers of information', so we'll stick with the term cards.

![image info](./images/cards.png)

This is a great opportunity to stretch your React muscles. React is all about Components/Composition, and a Card is a perfect candidate to get into the React mindset. Generally the flow of creating cards through React is as follows:

- Create or Find a source of data that contains the UNIT of information you want. For clothing this might mean your data is an array of objects describing a clothing item (name, price, description etc.), and each object has the same keys. **The boilerplate code has an example data source in data.js**.

```javascript
export const boilerPlateData = [
  {
    id: 1,
    name: "Toothpaste",
    price: 4.44,
    description: "Fluoride-Flavored Toothpaste, Yum!"
  },
  {
    id: 2,
    name: "Baseball",
    price: 7.32,
    description: "Do not combine with window!"
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 65.0,
    description: "What is the sun? I don't know."
  }
];
```

- Map over the source of data, and take the data in each item and turn them into JSX elements (or a whole other component). **We provided a simple example of this in App.js.**

```javascript
import React from "react";
import { boilerPlateData } from "./data.js";

export default () => {
  const generateCardsFromData = collection => {
    return collection.map(item => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };

  return <>{generateCardsFromData(boilerPlateData)}</>;
};
```

## Set Up
*Must have Git CLI installed for this walkthrough.*
1. To begin clone this repository to your machine.
    - Navigate to your desired directory in terminal.
    - Clone the repo by entering `gcl https://github.com/In-It-Together/challenge_2_cards.git`
    - Navigate into the repo `cd challenge_2_cards`
1. **Create your own branch**
    - This step is very important as you'll be working in a repository shared with others.
    - Run `git checkout -b <YOUR NAME HERE>`
    - **This is one of the most important steps, pull requests sent to master will be denied.**
1. Install your dependencies.
    - Run `npm install` in your terminal.
1. Run your local server.
    - Run `npm start` in your terminal.
    - Open `localhost:1234` in your prefered browser.
1. Have fun working on your card component!!

## After the hackathon.
1. Double check the work is in a seperate branch.
1. Create a commit.
    - `git add .`
    - `git commit '<Your commit message here>'`
    - `git push`
1. We'll add a link to your branch in our readme.



