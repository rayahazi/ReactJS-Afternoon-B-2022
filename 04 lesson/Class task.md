# Class task

> props, state, conditional rendering, random, list rendering

1. Create db of animals:
   - Create new file `data.js`
   - in that file - create 3 arrays with 10 animals each one.
     - array of land animals
     - array of flying animals
     - array of sea animals
   - each object in the array will have:
     - unique id (use random value)
     - animal name
     - image of that animal (string to URL)
2. Create 3 components in the components folder.

   - OnLand
   - Fly
   - InTheSea
     each component will render the right array of animals for its type.
     - Show all the details for each animal in a nice way (boostrap)

3. In app.js

   - Create header - of welcome
   - Add radio inputs to allow the user to select **only 1 option**.
   - After the user picked his favorite area - and pressed the button - show the right component.

4. Add `How many animals?`

- Add in `App.js` - input. It will take the number of animals the visitor wants to see.
- In the code - add that option:
  - Pick randomally the number of animals the user wants from the array, and show it to the user.
  - note: The value of `numOfAnimals` will be sent as prop to each component.
