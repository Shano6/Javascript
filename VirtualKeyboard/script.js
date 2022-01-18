class Keyboard{
    constructor(){
        this.elements={
            main: null,
            keysContainer: null,
            keys: [],
            textarea: null
        }
    
        this.properties={
            capsLock: false,
            shift: false,
            caretPosition:null,
            language: 'eng'
        }

        this.layout = [
            {
            keyCode: "Backquote",
            eng: {
                def: "`",
                caps: "`",
                shift:"~",
                shiftCaps: "~"
            },
            geo: {
                def: "`",
                caps: "`",
                shift:"~",
                shiftCaps: "~"
            }
        }, {
            keyCode: "Digit1",
            eng: {
                def: "1",
                caps: "1",
                shift:"!",
                shiftCaps: "!"
            },
            geo: {
                def: "1",
                caps: "1",
                shift:"!",
                shiftCaps: "!"
            }
        }, {
            keyCode: "Digit2",
            eng: {
                def: "2",
                caps: "2",
                shift:"2",
                shiftCaps: "@"
            },
            geo: {
                def: "2",
                caps: "2",
                shift: "@",
                shiftCaps: '@'
            }
        }, {
            keyCode: "Digit3",
            eng: {
                def: "3",
                caps: "3",
                shift: "#",
                shiftCaps: "#"
            },
            geo: {
                def: "3",
                caps: "3",
                shift: "#",
                shiftCaps: "№"
            }
        }, {
            keyCode: "Digit4",
            eng: {
                def: "4",
                caps: "4",
                shift: "$",
                shiftCaps: "$"
            },
            geo: {
                def: "4",
                caps: "4",
                shift: "$",
                shiftCaps: ";"
            }
        }, {
            keyCode: "Digit5",
            eng: {
                def: "5",
                caps: "5",
                shift: "%",
                shiftCaps: "%"
            },
            geo: {
                def: "5",
                caps: "5",
                shift: "%",
                shiftCaps: "%"
            }
        }, {
            keyCode: "Digit6",
            eng: {
                def: "6",
                caps: "6",
                shift: "^",
                shiftCaps: "^"
            },
            geo: {
                def: "6",
                caps: "6",
                shift: "^",
                shiftCaps: ":"
            }
        }, {
            keyCode: "Digit7",
            eng: {
                def: "7",
                caps: "7",
                shift: "&",
                shiftCaps: "&"
            },
            geo: {
                def: "7",
                caps: "7",
                shift: "&",
                shiftCaps: "&"
            }
        }, {
            keyCode: "Digit8",
            eng: {
                def: "8",
                caps: "8",
                shift: "*",
                shiftCaps: "*"
            },
            geo: {
                def: "8",
                caps: "8",
                shift: "*",
                shiftCaps: "*"
            }
        }, {
            keyCode: "Digit9",
            eng: {
                def: "9",
                caps: "9",
                shift: "(",
                shiftCaps: "("
            },
            geo: {
                def: "9",
                caps: "9",
                shift: "(",
                shiftCaps: "("
            }
        }, {
            keyCode: "Digit0",
            eng: {
                def: "0",
                caps: "0",
                shift: ")",
                shiftCaps: ")"
            },
            geo: {
                def: "0",
                caps: "0",
                shift: ")",
                shiftCaps: ")"
            }
        }, {
            keyCode: "Minus",
            eng: {
                def: "-",
                caps: "-",
                shift: "_",
                shiftCaps: "_"
            },
            geo: {
                def: "-",
                caps: "-",
                shift: "_",
                shiftCaps: "_"
            }
        }, {
            keyCode: "Equal",
            eng: {
                def: "=",
                caps: "=",
                shift: "+",
                shiftCaps: "+"
            },
            geo: {
                def: "=",
                caps: "=",
                shift: "+",
                shiftCaps: "+"
            }
        }, {
            keyCode: "Backspace",
            eng: {
                def: "BACK",
                caps: "BACK",
                shift: "BACK",
                shiftCaps: "BACK"
            },
            geo: {
                def: "BACK",
                caps: "BACK",
                shift: "BACK",
                shiftCaps: "BACK"
            }
        }, {
            keyCode: "Tab",
            eng: {
                def: "TAB",
                caps: "TAB",
                shift: "TAB",
                shiftCaps: "TAB"
            },
            geo: {
                def: "TAB",
                caps: "TAB",
                shift: "TAB",
                shiftCaps: "TAB"
            }
        }, {
            keyCode: "KeyQ",
            eng: {
                def: "q",
                caps: "Q",
                shift: "Q",
                shiftCaps: "q"
            },
            geo: {
                def: "ქ",
                caps: "ქ",
                shift: "ქ",
                shiftCaps: "ქ"
            }
        }, {
            keyCode: "KeyW",
            eng: {
                def: "w",
                caps: "W",
                shift: "W",
                shiftCaps: "w"
            },
            geo: {
                def: "წ",
                caps: "ჭ",
                shift: "ჭ",
                shiftCaps: "წ"
            }
        }, {
            keyCode: "KeyE",
            eng: {
                def: "e",
                caps: "E",
                shift: "E",
                shiftCaps: "E"
            },
            geo: {
                def: "ე",
                caps: "ე",
                shift: "ე",
                shiftCaps: "ე"
            }
        }, {
            keyCode: "KeyR",
            eng: {
                def: "r",
                caps: "R",
                shift: "R",
                shiftCaps: "R"
            },
            geo: {
                def: "რ",
                caps: "ღ",
                shift: "ღ",
                shiftCaps: "რ"
            }
        }, {
            keyCode: "KeyT",
            eng: {
                def: "t",
                caps: "T",
                shift: "T",
                shiftCaps: "t"
            },
            geo: {
                def: "ტ",
                caps: "თ",
                shift: "თ",
                shiftCaps: "ტ"
        }}, {
            keyCode: "KeyY",
            eng: {
                def: "y",
                caps: "Y",
                shift: "Y",
                shiftCaps: "Y"
            },
            geo: {
                def: "ყ",
                caps: "ყ",
                shift: "ყ",
                shiftCaps: "ყ"
            }
        }, {
            keyCode: "KeyU",
            eng: {
                def: "u",
                caps: "U",
                shift: "U",
                shiftCaps: "u"
            },
            geo: {
                def: "უ",
                caps: "უ",
                shift: "უ",
                shiftCaps: "უ"
            }
        }, {
            keyCode: "KeyI",
            eng: {
                def: "i",
                caps: "I",
                shift: "I",
                shiftCaps: "i"
            },
            geo: {
                def: "ი",
                caps: "ი",
                shift: "ი",
                shiftCaps: "ი"
            }
        }, {
            keyCode: "KeyO",
            eng: {
                def: "o",
                caps: "O",
                shift: "O",
                shiftCaps: "o"
            },
            geo: {
                def: "ო",
                caps: "ო",
                shift: "ო",
                shiftCaps: "ო"
            }
        }, {
            keyCode: "KeyP",
            eng: {
                def: "p",
                caps: "P",
                shift: "P",
                shiftCaps: "p"
            },
            geo: {
                def: "პ",
                caps: "პ",
                shift: "პ",
                shiftCaps: "პ"
            }
        }, {
            keyCode: "BracketLeft",
            eng: {
                def: "[",
                caps: "{",
                shift:"{",
                shiftCaps: "["
            },
            geo: {
                def: "[",
                caps: "{",
                shift: "{",
                shiftCaps: "["
            }
        }, {
            keyCode: "BracketRight",
            eng: {
                def: "]",
                caps: "}",
                shift: "}",
                shiftCaps: "]"
            },
            geo: {
                def: "]",
                caps: "}",
                shift: "}",
                shiftCaps: "]"
            }
        }, {
            keyCode: "Backslash",
            eng: {
                def: "\\",
                caps: "|",
                shift: "|",
                shiftCaps: "\\"
            },
            geo: {
                def: "\\",
                caps: "|",
                shift: "|",
                shiftCaps: "\\"
            }
        }, {
            keyCode: "Delete",
            eng: {
                def: "DEL",
                caps: "DEL",
                shift: "DEL",
                shiftCaps: "DEL"
            },
            geo: {
                def: "DEL",
                caps: "DEL",
                shift: "DEL",
                shiftCaps: "DEL"
            }
        },{
            keyCode: "CapsLock",
            eng: {
                def: "CAPS",
                caps: "CAPS",
                shift: "CAPS",
                shiftCaps: "CAPS"
            },
            geo: {
                def: "CAPS",
                caps: "CAPS",
                shift: "CAPS",
                shiftCaps: "CAPS"
            }
        }, {
            keyCode: "KeyA",
            eng: {
                def: "a",
                caps: "A",
                shift: "A",
                shiftCaps: "a"
            },
            geo: {
                def: "ა",
                caps: "ა",
                shift: "ა",
                shiftCaps: "ა"
            }
        }, {
            keyCode: "KeyS",
            eng: {
                def: "s",
                caps: "S",
                shift: "S",
                shiftCaps: "s"
            },
            geo: {
                def: "ს",
                caps: "ს",
                shift: "ს",
                shiftCaps: "ს"
        }}, {
            keyCode: "KeyD",
            eng: {
                def: "d",
                caps: "D",
                shift: "D",
                shiftCaps: "d"
            },
            geo: {
                def: "დ",
                caps: "დ",
                shift: "დ",
                shiftCaps: "დ"
        }}, {
            keyCode: "KeyF",
            eng: {
                def: "f",
                caps: "F",
                shift: "F",
                shiftCaps: "f"
            },
            geo: {
                def: "ფ",
                caps: "ფ",
                shift: "ფ",
                shiftCaps: "ფ"
            }
        }, {
            keyCode: "KeyG",
            eng: {
                def: "g",
                caps: "G",
                shift: "G",
                shiftCaps: "G"
            },
            geo: {
                def: "გ",
                caps: "გ",
                shift: "გ",
                shiftCaps: "გ"
            }
        }, {
            keyCode: "KeyH",
            eng: {
                def: "h",
                caps: "H",
                shift: "H",
                shiftCaps: "h"
            },
            geo: {
                def: "ჰ",
                caps: "ჰ",
                shift: "ჰ",
                shiftCaps: "ჰ"
            }
        }, {
            keyCode: "KeyJ",
            eng: {
                def: "j",
                caps: "J",
                shift: "J",
                shiftCaps: "j"
            },
            geo: {
                def: "ჯ",
                caps: "ჟ",
                shift: "ჟ",
                shiftCaps: "ჯ"
            }
        }, {
            keyCode: "KeyK",
            eng: {
                def: "k",
                caps: "K",
                shift: "K",
                shiftCaps: "k"
            },
            geo: {
                def: "კ",
                caps: "კ",
                shift: "კ",
                shiftCaps: "კ"
            }
        }, {
            keyCode: "KeyL",
            eng: {
                def: "l",
                caps: "L",
                shift: "L",
                shiftCaps: "l"
            },
            geo: {
                def: "ლ",
                caps: "ლ",
                shift: "ლ",
                shiftCaps: "ლ"
            }
        }, {
            keyCode: "Semicolon",
            eng: {
                def: ";",
                caps: ":",
                shift: ":",
                shiftCaps: ";"
            },
            geo: {
                def: ";",
                caps: ":",
                shift: ":",
                shiftCaps: ";"
            }
        }, {
            keyCode: "Quote",
            eng: {
                def: "'",
                caps: "\"",
                shift: "\"",
                shiftCaps: "'"
            },
            geo: {
                def: "'",
                caps: "\"",
                shift: "\"",
                shiftCaps: "'"
            }
        }, {
            keyCode: "Enter",
            eng: {
                def: "ENTER",
                caps: "ENTER",
                shift: "ENTER",
                shiftCaps: "ENTER"
            },
            geo: {
                def: "ENTER",
                caps: "ENTER",
                shift: "ENTER",
                shiftCaps: "ENTER"
            }
        },{
            keyCode: "ShiftLeft",
            eng: {
                def: "SHIFT",
                caps: "SHIFT",
                shift: "SHIFT",
                shiftCaps: "SHIFT"
            },
            geo: {
                def: "SHIFT",
                caps: "SHIFT",
                shift: "SHIFT",
                shiftCaps: "SHIFT"
            }
        }, {
            keyCode: "KeyZ",
            eng: {
                def: "z",
                caps: "Z",
                shift: "Z",
                shiftCaps: "z"
            },
            geo: {
                def: "ზ",
                caps: "ძ",
                shift: "ძ",
                shiftCaps: "ზ"
            }
        }, {
            keyCode: "KeyX",
            eng: {
                def: "x",
                caps: "X",
                shift: "X",
                shiftCaps: "x"
            },
            geo: {
                def: "ხ",
                caps: "ხ",
                shift: "ხ",
                shiftCaps: "ხ"
            }
        }, {
            keyCode: "KeyC",
            eng: {
                def: "c",
                caps: "C",
                shift: "C",
                shiftCaps: "c"
            },
            geo: {
                def: "ც",
                caps: "ჩ",
                shift: "ჩ",
                shiftCaps: "ც"
            }
        }, {
            keyCode: "KeyV",
            eng: {
                def: "v",
                caps: "V",
                shift: "V",
                shiftCaps: "v"
            },
            geo: {
                def: "ვ",
                caps: "ვ",
                shift: "ვ",
                shiftCaps: "ვ"
            }
        }, {
            keyCode: "KeyB",
            eng: {
                def: "b",
                caps: "B",
                shift: "B",
                shiftCaps: "b"
            },
            geo: {
                def: "ბ",
                caps: "ბ",
                shift: "ბ",
                shiftCaps: "ბ"
            }
        }, {
            keyCode: "KeyN",
            eng: {
                def: "n",
                caps: "N",
                shift: "N",
                shiftCaps: "n"
            },
            geo: {
                def: "ნ",
                caps: "ნ",
                shift: "ნ",
                shiftCaps: "ნ"
            }
        }, {
            keyCode: "KeyM",
            eng: {
                def: "m",
                caps: "M",
                shift: "M",
                shiftCaps: "m"
            },
            geo: {
                def: "მ",
                caps: "მ",
                shift: "მ",
                shiftCaps: "მ"
            }
        }, {
            keyCode: "Comma",
            eng: {
                def: ",",
                caps: "<",
                shift: "<",
                shiftCaps: ","
            },
            geo: {
                def: ",",
                caps: "<",
                shift: "<",
                shiftCaps: ","
            }
        }, {
            keyCode: "Period",
            eng: {
                def: ".",
                caps: ">",
                shift: ">",
                shiftCaps: "."
            },
            geo: {
                def: ".",
                caps: ">",
                shift: ">",
                shiftCaps: "."
            }
        }, {
            keyCode: "Slash",
            eng: {
                def: "/",
                caps: "?",
                shift: "?",
                shiftCaps: "/"
            },
            geo: {
                def: "/",
                caps: "?",
                shift: "?",
                shiftCaps: "/"
            }
        }, {
            keyCode: "ArrowUp",
            eng: {
                def: "▲",
                caps: "▲",
                shift: "▲",
                shiftCaps: "▲"
            },
            geo: {
                def: "▲",
                caps: "▲",
                shift: "▲",
                shiftCaps: "▲"
            }
        }, {
            keyCode: "ShiftRight",
            eng: {
                def: "SHIFT",
                caps: "SHIFT",
                shift: "SHIFT",
                shiftCaps: "SHIFT"
            },
            geo: {
                def: "SHIFT",
                caps: "SHIFT",
                shift: "SHIFT",
                shiftCaps: "SHIFT"
            }
        },{
            keyCode: "ControlLeft",
            eng: {
                def: "CTRL",
                caps: "CTRL",
                shift: "CTRL",
                shiftCaps: "CTRL"
            },
            geo: {
                def: "CTRL",
                caps: "CTRL",
                shift: "CTRL",
                shiftCaps: "CTRL"
            }
        },
         {
            keyCode: "Language",
            eng: {
                def: "ქართ",
                caps: "ქართ",
                shift: "ქართ",
                shiftCaps: "ქართ"
            },
            geo: {
                def: "ENG",
                caps: "ENG",
                shift: "ENG",
                shiftCaps: "ENG"
            }
        },
         {
            keyCode: "AltLeft",
            eng: {
                def: "ALT",
                caps: "ALT",
                shift: "ALT",
                shiftCaps: "ALT"
            },
            geo: {
                def: "ALT",
                caps: "ALT",
                shift: "ALT",
                shiftCaps: "ALT"
            }
        }, {
            keyCode: "Space",
            eng: {
                def: "",
                caps: "",
                shift: "",
                shiftCaps: ""
            },
            geo: {
                def: "",
                caps: "",
                shift: "",
                shiftCaps: ""
            }
        }, {
            keyCode: "AltRight",
            eng: {
                def: "ALT",
                caps: "ALT",
                shift: "ALT",
                shiftCaps: "ALT"
            },
            geo: {
                def: "ALT",
                caps: "ALT",
                shift: "ALT",
                shiftCaps: "ALT"
            }
        }, {
            keyCode: "ArrowLeft",
            eng: {
                def: "◄",
                caps: "◄",
                shift: "◄",
                shiftCaps: "◄"
            },
            geo: {
                def: "◄",
                caps: "◄",
                shift: "◄",
                shiftCaps: "◄"
            }
        }, {
            keyCode: "ArrowDown",
            eng: {
                def: "▼",
                caps: "▼",
                shift: "▼",
                shiftCaps: "▼"
            },
            geo: {
                def: "▼",
                caps: "▼",
                shift: "▼",
                shiftCaps: "▼"
            }
        }, {
            keyCode: "ArrowRight",
            eng: {
                def: "►",
                caps: "►",
                shift: "►",
                shiftCaps: "►"
            },
            geo: {
                def: "►",
                caps: "►",
                shift: "►",
                shiftCaps: "►"
            }
        }, {
            keyCode: "ControlRight",
            eng: {
                def: "CTRL",
                caps: "CTRL",
                shift: "CTRL",
                shiftCaps: "CTRL"
            },
            geo: {
                def: "CTRL",
                caps: "CTRL",
                shift: "CTRL",
                shiftCaps: "CTRL"
            }
        }]
    }
   
    init() {
        this.elements.textarea = document.createElement("textarea")
        this.elements.textarea.autofocus = true;
        this.elements.textarea.setAttribute('onblur', 'this.focus()')
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("boardContainer");
        this.elements.keysContainer.appendChild(this._createKeys());
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".key");
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.textarea);
        document.body.appendChild(this.elements.main);

        document.addEventListener('keydown',(e)=>{
            e.preventDefault();
            this._handleKey(e)
        });    

        document.addEventListener('keyup', (e)=>{
            this._highlightKey(e.code)
            if(e.code==="ShiftLeft"||e.code==="ShiftRight"){
                this._toggleShift()()
            }
        });
    }

    _createKeys() {
        const fragment = document.createDocumentFragment();
        this.layout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["Backspace", "Delete", "Enter","ShiftRight"].includes(key.keyCode) !== false;
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");
            switch (key.keyCode) {
                case "Backspace":
                    keyElement.classList.add("Backspace");
                    keyElement.innerHTML = "BACK"
                    keyElement.addEventListener("click", this._backSpace());
                    break;

                case "CapsLock":
                    keyElement.classList.add("CapsLock");
                    keyElement.innerHTML = 'CAPS LOCK'

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("key--active", this.properties.capsLock);
                    });
                    break;

                case "Language":
                    keyElement.classList.add("key--wide");
                    keyElement.innerHTML = this.properties.language=="eng"?"ქართ":"ENG"
                    keyElement.addEventListener("click", () => {    
                        this.properties.language = this.properties.language=="eng"?"geo":"eng"           
                        this._addKeyes() 
                    });
                    break;     

                case "Enter":
                    keyElement.classList.add("Enter","Widekeye");
                    keyElement.innerHTML = "ENTER"
                    this._setEventListener(keyElement,'letter','\n')
                    break;

                case "Space":
                    keyElement.classList.add("Space");
                    this._setEventListener(keyElement,'letter',' ')
                    break;    

                case "Tab":
                    keyElement.classList.add("Tab","tabdel");
                    keyElement.innerHTML = "TAB"
                    this._setEventListener(keyElement,'Tab','  ')
                    break;
                 
                case "Delete":
                    keyElement.classList.add("Delete","tabdel");
                    keyElement.innerHTML = "DEL"
                    keyElement.addEventListener("click", this._delete());
                    break;

                case "ShiftLeft":
                    keyElement.classList.add("ShiftLeft","Shift");
                    keyElement.innerHTML = "SHIFT"
                    keyElement.addEventListener("mousedown", this._toggleShift());
                    keyElement.addEventListener("mouseup", this._toggleShift());
                    break;    

                case "ShiftRight":
                    keyElement.classList.add("ShiftRight","Shift");
                    keyElement.innerHTML = "SHIFT"
                    keyElement.addEventListener("mousedown", this._toggleShift());
                    keyElement.addEventListener("mouseup", this._toggleShift());
                    break;   

                case "AltLeft":
                    keyElement.classList.add("AltLeft");
                    keyElement.innerHTML = "ALT"
                    break;
                
                case "AltRight":
                    keyElement.classList.add("AltRight");
                    keyElement.innerHTML = "ALT"
                    break;
                
                case "ControlLeft":
                    keyElement.classList.add("ControlLeft","Control");
                    keyElement.innerHTML = "CTRL"
                    break;  
                
                case "ControlRight":
                    keyElement.classList.add("ControlRight","Control");
                    keyElement.innerHTML = "CTRL"
                    break;      
                    
                default:
                    let keyValue = key[this.properties.language]
                        [this.properties.capsLock?
                            this.properties.shift?"shiftCaps":"caps":
                            this.properties.shift?"shift":"def"]
                    keyElement.innerHTML = keyValue
                    keyElement.classList.add('key', key.keyCode)
                    this._setEventListener(keyElement,'letter',keyValue)
                    break;
            }
            this._highlighClick(keyElement,key.keyCode)
            fragment.appendChild(keyElement);
            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });
        return fragment;
    }

    _handleKey(e){
        let keyValue
            if(e.code==="Tab"){
                this._addSymbol("Tab", "  ")()
            }else if(e.code==="ShiftLeft"||e.code==="ShiftRight"){
                if(!e.repeat){
                    this._toggleShift()()
                }
            }else if(e.code==="Backspace"){
                this._backSpace()()
            }else if(e.code==="Delete"){
                this._delete()()
            }else if(e.code==="Enter"){
                this._addSymbol("letter", "\n")()
            }else if(e.code==="CapsLock"){
                this._toggleCapsLock();
            }
            else if(["ControlLeft","ControlRight","AltLeft","AltRight"].includes(e.code)){
                //do nothing
            }
            else{
                this.layout.forEach((key)=>{
                    if(key.keyCode==e.code){
                        keyValue=key[this.properties.language][this.properties.capsLock?(this.properties.shift?"shiftCaps":"caps"):(this.properties.shift?"shift":"def")]
                    }
                })
                this._addSymbol('letter',keyValue)(); 
            }
            this._highlightKey(e.code,'active')
    }

    _addKeyes(){
        const keyboard = document.getElementsByClassName('boardContainer')[0]
        const parent = keyboard.parentNode
        const newKeyes = document.createElement("div")
        newKeyes.classList.add('boardContainer')
        newKeyes.appendChild(this._createKeys())
        this.elements.keysContainer=newKeyes
        parent.replaceChild(this.elements.keysContainer,keyboard)
    }

    _toggleShift(){
        return()=>{
            this.properties.shift = !this.properties.shift;
            this._addKeyes()
        }     
    }

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        this._addKeyes()
    }

    _backSpace(){
        return () => {               
            this._getCaret()
            if(this.properties.caretPosition!==0){
                this.elements.textarea.value = 
                    this.elements.textarea.value.slice(0,this.properties.caretPosition-1)+
                    this.elements.textarea.value.slice(this.properties.caretPosition, this.elements.textarea.value.length)
                this._setCaret("Back")
            }   
        }
    }

    _delete(){
        return () => {   
            console.log('bere')            
            this._getCaret()
            if(this.properties.caretPosition!==this.elements.textarea.value.length){
                this.elements.textarea.value = 
                    this.elements.textarea.value.slice(0,this.properties.caretPosition)+
                    this.elements.textarea.value.slice(this.properties.caretPosition+1, this.elements.textarea.value.length)
                this._setCaret("Del")
            }   
        }
    }

    _setEventListener(keyElement, type, symbol){
        keyElement.addEventListener("click", this._addSymbol(type,symbol))
    }

    _addSymbol(type, symbol){
        return ()=>{
            this._getCaret()
            this.elements.textarea.value = 
            this.elements.textarea.value.slice(0,this.properties.caretPosition)+
                symbol+
                this.elements.textarea.value.slice(this.properties.caretPosition,this.elements.textarea.value.length)
            this._setCaret(type)
        }       
    }

    _getCaret(){
        this.properties.caretPosition = this.elements.textarea.selectionStart
    }

    _setCaret(type="letter"){
        if(type=="Back"){
            this.elements.textarea.selectionStart = this.properties.caretPosition-1
            this.elements.textarea.selectionEnd = this.properties.caretPosition-1
            this.properties.caretPosition-=1
        }else if (type=="Tab"){
            this.elements.textarea.selectionStart = this.properties.caretPosition+2
            this.elements.textarea.selectionEnd = this.properties.caretPosition+2
            this.properties.caretPosition+=2
        }else if(type=="Del"){
            this.elements.textarea.selectionStart = this.properties.caretPosition
            this.elements.textarea.selectionEnd = this.properties.caretPosition
        }else{
            this.elements.textarea.selectionStart = this.properties.caretPosition+1
            this.elements.textarea.selectionEnd = this.properties.caretPosition+1
            this.properties.caretPosition+=1
        }
    }

    _highlightKey(code, type){
        let key = document.getElementsByClassName(code)[0]
        if(type==="active"){
            key.style.borderRadius="20px";
            key.style.backgroundColor="#238ca8"
        }else{
            key.style.borderRadius="4px"
            key.style.backgroundColor="#125669"
        }        
    }

    _highlighClick(element,code){
        element.addEventListener('mousedown', ()=>{
            this._highlightKey(code,"active")
        })

        element.addEventListener('mouseup', ()=>{
            this._highlightKey(code)
        })
    }
};

const kbrd = new Keyboard()

kbrd.init();
