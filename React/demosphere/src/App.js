
import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';
import Cards from './Components/Cards';

function App() {
  // this is the tarika for the correct use 
  const response = [
    {
      itemName :"Nirma",
      itemDate:"20",
      itemMonth:"Jan",
      itemYear:"2005",
    },

    {
      itemName :"Nirma2",
      itemDate:"202",
      itemMonth:"Jan2",
      itemYear:"20052",
    },

    {
      itemName :"Nirma3",
      itemDate:"203",
      itemMonth:"Jan3",
      itemYear:"20053",
    },


  ]
  return (
    <Cards>
      <div>
        <Item name={response[0].itemName} >
          hello ji this is the content of the first item
        </Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName} ></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

        <div className="App">Hello Jee</div>
      </div>
    </Cards>
  );
}

export default App;
