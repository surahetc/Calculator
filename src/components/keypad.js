import React from 'react';
import Button from './button'

export default function Keypad(props) {
        return(
            <div>
                <div>
                    <Button label={"+"} onClick={props.onClick} special="operator"/>
                    <Button label={"-"} onClick={props.onClick} special="operator"/>
                    <Button label={"/"} onClick={props.onClick} special="operator"/>
                    <Button label={"*"} onClick={props.onClick} special="operator"/>
                </div>

                <div>
                    <Button label={"0"} onClick={props.onClick} special="num"/>
                    <Button label={"1"} onClick={props.onClick} special="num"/>
                    <Button label={"2"} onClick={props.onClick} special="num"/>
                    <Button label={"3"} onClick={props.onClick} special="num"/>
                </div>


                <div>
                    
                    <Button label={"4"} onClick={props.onClick} special="num"/>
                    <Button label={"5"} onClick={props.onClick} special="num"/>
                    <Button label={"6"} onClick={props.onClick} special="num"/>
                    <Button label={"7"} onClick={props.onClick} special="num"/>
                </div>


                <div>
                    
                    <Button label={"8"} onClick={props.onClick} special="num"/>
                    <Button label={"9"} onClick={props.onClick} special="num"/>
                    <Button label={"."} onClick={props.onClick} special="point"/>
                    <Button label={"Clear"} onClick={props.onClick} special="clear"/>
                </div>

                

                <div>
                    
                    
                    <Button label={"Ans"} onClick={props.onClick} special="ans" />
                </div>


                

            </div>
        )

      
  }