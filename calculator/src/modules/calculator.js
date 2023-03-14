// 초기값 
// const INITIALSTATE = {
//     input: '',  
//     todos: [{
//         id: 1,
//         text: '리덕스',
//         done: false
//     }]
// };
const INITIALSTATE = {
    inputValue: "0",
    buttonArray: [
      { text: "C", background: "#A29D95", color: "#111111" },
      { text: "+/-", background: "#A29D95", color: "#111111" },
      { text: "%", background: "#A29D95", color: "#111111" },
      { text: "÷", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "7", background: "#484242", color: "#ffffff", type: "number" },
      { text: "8", background: "#484242", color: "#ffffff", type: "number" },
      { text: "9", background: "#484242", color: "#ffffff", type: "number" },
      { text: "x", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "4", background: "#484242", color: "#ffffff", type: "number" },
      { text: "5", background: "#484242", color: "#ffffff", type: "number" },
      { text: "6", background: "#484242", color: "#ffffff", type: "number" },
      { text: "-", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "1", background: "#484242", color: "#ffffff", type: "number" },
      { text: "2", background: "#484242", color: "#ffffff", type: "number" },
      { text: "3", background: "#484242", color: "#ffffff", type: "number" },
      { text: "+", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "0", background: "#484242", color: "#ffffff", type: "number" },
      { text: ".", background: "#484242", color: "#ffffff", type: "number" },
      { text: "=", background: "#FFB039", color: "#ffffff", type: "operator" }
    ]
  };

export default function calculator(state = INITIALSTATE, action){
    switch(action.type) {
      default:
        return state;
    }
}

