### Dominoes Game

This is an application that stimulates game of Dominoes between several players.

Messages of what is happening in the game are printed in the middle of the screen. User can decide how many players there will be, from 2 to 5. Also you can choose the speed of the game, if it's too fast. You can pause it to check if everything is correct or reset to zero at any time.

##### Preparations: 

- players pick the same amount of dices from the pile;
- the game automatically sorts them by the most valuable dice;
- random dice is picked from the pile and placed into the table;
- players wait for the user to start the game.

##### Actual game:

- players take turns and play dices into the table;
- if player cannot play any of how dices, he picks random dice from the pile;
- if the pile is empty and player cannot place dice, he skips his turn.

##### Move rules:

- dices are placed into the table, forming a line, that has two ends;
- new dice can be placed only if one of it's ends matches any of table row end.

##### Game end:
- player that places all of his dices first wins;
- if all players skip their turns, game ends with a draw.

***

![image](https://res.cloudinary.com/dkfwehxio/image/upload/v1645657860/Screenshot_2022-02-24_021038_uczjj9.png)

You can see this game [here](https://next-notes.netlify.app/)!

### SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone this repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

```bash
git clone https://github.com/BlackPawsStudio/Dominoes-game/
```

2. Open your copied repo folder in terminal and install necessary modules with command, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

```bash
npm install
```

3. Now you are able to run or build the project:

To run the project write `npm run start` in terminal and live development server will open and start [http://localhost:3000](http://localhost:3000) page in your browser.

Run `npm run build` to build the project. The build files will be stored in the `build/` directory. 
You can go to the `build/` directory and open index.html file to see the results.