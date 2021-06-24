# Belcher's To Do Board

This is a client side only To Do board where a user can Add new cards, 
and then drag and drop them into the progress columns.

The drag and drop feature is using [React Beautiful DND](https://www.npmjs.com/package/react-beautiful-dnd)
Reasons for using this library are:
- I don't forsee this app needing the full abilities of the something like [React DND](https://www.npmjs.com/package/react-dnd)
or custom writing my own drag and drop functionalities.
- This is a new library I haven't used before and wanted to experiment.
- It also had all the functionality necessary for this stage of the app.

When a card is put in the Done column some confetti will drop on the screen.
This is done using [React Confetti](https://www.npmjs.com/package/react-confetti)
Reasons for using this library:
- Ran out time and needed some confetti to end the day.

***NOTE:*** All changes will disappear when page is refreshed.

## Deployed Using Surge

You can find a deployed version of the app here: [vivacious-value.surge.sh](https://vivacious-value.surge.sh/)

## Local Development

In the project directory, you can run:

### `yarn install`

To get all the dependencies. Then run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Future Improvements

- On the front end the `App.js` currently holds much of the functional logic.
Would ideally like to break this into a separate component to keep the file a bit cleaner.
- In some areas there are some repetitions of css for griding. This needs to be abstracted
out to be reusable.
- Replace the current method of showing confetti to use [react-spring](https://www.npmjs.com/search?q=react-spring)
to better ease in and ease out the transitions of showing the confetti.
- Add ability to update an existing card.
- Add ability to add new columns and re-arrange columns.
- Show user image in the Select to assign user.
- Potentially add Cypress testing.
 
