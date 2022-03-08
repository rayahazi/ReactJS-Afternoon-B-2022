import './App.css';
import Header from './Header'

function App() {

  return (
    <div className="App">
      <Header headerTxt="my prop 1"/>
      <Header headerTxt="my prop 2"/>
      <Header headerTxt="my prop 3"/>
      <Header headerTxt="my prop 4"/>
      <Header headerTxt="my prop 5"/>
    </div>
  );
}

export default App;

/* Create a function component - UserName
it will get first-name and last-name as props
and will show each one on a button. 

Call the UserName component in App.js 3 times
with 3 different names
*/
