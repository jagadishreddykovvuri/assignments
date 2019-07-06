import React from 'react';
import StrikeText from './components/StrikeText';
import Images from './components/Images';
import StateMessage from './components/StateMessage'
import Greeting from './components/Greeting'
import Favorite from './components/Favorite'
import Checkbox from './components/Checkbox'
import DropDown from './components/Dropdown'
import Disabler from './components/Disabler'
import Stopwatch from './components/Stopwatch'
import Chat from './components/Chat'

function App() {
  return (
     <div>
        <h1>Strike text</h1>
        <StrikeText Text="hi how are you"/>
        <h1>Images</h1>
        <Images styleName="Normal" name="Normal image"/>
        <Images styleName="Rounded" name="Rounded corner image "/>
        <Images styleName="Circle" name="Circular Image"/>
        <h1>State message</h1>
        <StateMessage styleName="WellDone" name="Well Done!" text="you successfully read this important alert message."/>
        <StateMessage styleName="HeadsUp" name="Heads up!" text="This alert needs your attention, but it'not super important."/>
        <StateMessage styleName="Warning" name="Warning!" text="Better check yourself, you're not looking too good."/>
        <StateMessage styleName="OhSnap" name="Oh snap!" text="Change a few things up and try submitting again."/>
        <h1>Greeting</h1>
        <Greeting/>
        <h1>Favorite Dessert</h1>
        <Favorite flavour={["Vanilla","ButterScotch","Chocolate","Strawberry","jagadish"]}/>
        <h1>Checkbox</h1>
        <Checkbox cities={["Hyderabad","Bangalore","Delhi","Mumbai"]}/>
        <h1>DropDown</h1>
        <DropDown states={["Andra pradesh","Maharastra","Karnataka","Madhya pradesh","Calcutta","TamilNadu","Kerala","Punjab","Rajasthan","Goa"]}/>
        <h1>Disabler</h1>
        <Disabler/>
        <h1>STOP WATCH</h1>
        <Stopwatch/>
        <h1>CHATBOX</h1>
        <Chat/>
    </div>
  );
}

export default App;
