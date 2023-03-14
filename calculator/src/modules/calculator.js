const INITIALSTATE = {
    inputValue: "0",
    buttonArray: [
      { text: "C", id:"reset", background: "#A29D95", color: "#111111" },
      { text: "+/-", id:"", background: "#A29D95", color: "#111111" },
      { text: "%", id:"percent", background: "#A29D95", color: "#111111" },
      { text: "÷", id:"divide", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "7", id:"seven", background: "#484242", color: "#ffffff", type: "number" },
      { text: "8", id:"eight", background: "#484242", color: "#ffffff", type: "number" },
      { text: "9", id:"nine", background: "#484242", color: "#ffffff", type: "number" },
      { text: "x", id:"multiply",background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "4", id:"four", background: "#484242", color: "#ffffff", type: "number" },
      { text: "5", id:"five",background: "#484242", color: "#ffffff", type: "number" },
      { text: "6", id:"six",background: "#484242", color: "#ffffff", type: "number" },
      { text: "-", id:"minus",background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "1", id:"one",background: "#484242", color: "#ffffff", type: "number" },
      { text: "2", id:"two",background: "#484242", color: "#ffffff", type: "number" },
      { text: "3", id:"three",background: "#484242", color: "#ffffff", type: "number" },
      { text: "+", id:"plus",background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "0", id:"zero",background: "#484242", color: "#ffffff", type: "number" },
      { text: ".", id:"comma",background: "#484242", color: "#ffffff", type: "number" },
      { text: "=", id:"equal",background: "#FFB039", color: "#ffffff", type: "operator" }
    ]
  };

const ADD = 'calculator/ADD';
const MINUS = 'calculator/MINUS';
const MULTIPLE = 'calculator/MULTIPLE';
const DIVIDE = 'calculator/DIVIDE';
const RESET = 'calculator/RESET';

export const onAdd = (prev, text) => ({
  type : ADD,
  text
})

export default function calculator(state = INITIALSTATE, action){
    switch(action.type) {
      case ADD: 
      return {
        ...state,
        inputValue : action.text
      }
      default:
        return state;
    }
}

