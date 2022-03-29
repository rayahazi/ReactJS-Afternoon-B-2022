# Class task

> props, state, conditional rendering, random, list rendering

### 1. Create db of animals:

- create new file `data.js`
- in that file - create 3 arrays with 10 animals for each one.
  - array of land animals
  - array of flying animals
  - array of sea animals
- each animal object in the array will have:
  - unique id (use random value)
  - animal name
  - image of that animal (string to URL)

### 2. Create 3 component in the components folder

- OnLand
- Fly
- InTheSea

Each component will render the right aray of animals for its type.

- Show all the details for each animal in a nice way. (bootstrap).

### 3. In App.js

- Create header - of welcome
- Add radio inputs to allow the user to select **only 1 option**.
- After user picked the favorite area - and pressed the button - show the right component.

### 4. Add `how many animals?`

* Add in `App.js` - input. It will take the number of animals the visitor wants to see
* In the code - add that option:
    * Pick randomally the number of animals the user wants from the array, and show the data to the user. 

> note: the value of `numOfAnimals` will be sent as a prop to each component
