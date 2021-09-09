import React from 'react';

export default function Screen(props) {




      return (
          <input className="screen" onChange={props.handleChange} type="text" placeholder="Enter your calculation here" value={props.output}/>
      );
  }