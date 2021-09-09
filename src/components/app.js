import React from 'react';
import Title from './title'
import Screen from './screen'
import Keypad from './keypad'

export default function App() {

  const [screenData,setScreenData]=React.useState("");

  function handleChange(event)
  {
      var value=event.target.value
      setScreenData(value)
  }

  function handleClick(event)
  {
    var value=event.target.innerHTML;
    if (value==="Clear")
    {
      setScreenData("")
    }
    else if (value==="Ans")
    {
      if(screenData==="")
      {
        setScreenData("");
        return;
      }
      try{
        var ans=eval(screenData);
      }
      catch(err)
      {
          setScreenData("MATH ERROR")
      }
      if (ans===undefined || ans===Infinity)
      {
        setScreenData("MATH ERROR")
      }
      else
      {
        setScreenData(ans)
      }
      

    }
    else{
      if(screenData==="MATH ERROR")
      {
        setScreenData("")
      }
      setScreenData(prevData => {
        setScreenData(prevData+value)
      })

    }
    

  }


  

      return (
          <div>
            <Title name={'Calculator App'}/>
            <Screen output={screenData} handleChange={handleChange}/>
            <Keypad onClick={handleClick} />
          </div>
      );
  }