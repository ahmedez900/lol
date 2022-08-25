





// let Answer = document.querySelector("[name='username']");
// let thePic = document.querySelector("[class='landing']")
// console.log(thePic);


// document.forms[0].onsubmit = function (e) {
//    let AnswerValed = false;

//    console.log(Answer.value);
//    console.log(Answer.value.length);

//    if (Answer.value == "سمسم" || Answer.value == "السمسم") {
//       AnswerValed = true;
//       thePic.setAttribute("style", "background-image: url(win.jpg)");
//    }

//    if(AnswerValed === false){
//       e.preventDefault()
//    }
// };
let Answer = document.querySelector("[name='username']");
let thePic = document.querySelector("[class='landing']")
let lol = thePic.setAttribute("style", "background-image: url(start.jpg)");


document.querySelector("[value='اعد المحاولة']").setAttribute("style", "display: none;")

document.querySelector("[value='انا متاكد']").onclick = function (e) {
   e.preventDefault()
   let AnswerValed = false;
   
   if (Answer.value == "سمسم" || Answer.value == "السمسم") {
      AnswerValed = true;
      document.querySelector("[name='username']").setAttribute("style", "display: none;")
      document.querySelector("[class='theText']").setAttribute("style", "display: none;")
      document.querySelector("[value='انا متاكد']").setAttribute("style", "display: none;")
      document.querySelector("[name='a7sant']").setAttribute("value", "(انت لسه عايش)احسنت")
      document.querySelector("[name='a7sant']").setAttribute("style", "    right: 60px;width: 141px;height: 63px;border-radius: 12px;border: none;color: #0016ffe3;background-color: #f475c7eb;")
      lol = thePic.setAttribute("style", "background-image: url(win.jpg)");

   }
   
   if(AnswerValed === false){
      lol = thePic.setAttribute("style", "background-image: url(end.jpg)");
      document.querySelector("[name='username']").setAttribute("style", "display: none;")
      document.querySelector("[class='theText']").setAttribute("style", "display: none;")
      document.querySelector("[value='انا متاكد']").setAttribute("style", "display: none;")
      document.querySelector("[value='اعد المحاولة']").setAttribute("style", "    right: 60px; width: 92px; height: 63px; border-radius: 12px; border: none; background-color: black; color: red;")
   }
};



// theForm = document.querySelector("[action]");
// theForm.onsubmit = function (lol) {
//    numValue = document.querySelector("[name='elements']"); 
//    textValue = document.querySelector("[name='texts']");
//    TypeValue = document.querySelector("[name='type']");
//    console.log(numValue.value);
//    console.log(textValue.value);
//    console.log(TypeValue.value);
//    lol.preventDefault();
//    document.querySelector("[class='results']").innerHTML = "";
//    for (let i = 0; i < numValue.value; i++) {
//       thElement = document.createElement(TypeValue.value);
//       thElement.innerHTML = textValue.value;
//       thElement.setAttribute("class", "box");
//       thElement.setAttribute("id", `id-${i + 1}`);
//       thElement.setAttribute("style", "width:200px; color:white;background-color:#FC5E1F;border-radius:5px;padding: 8px;margin:5px;text-align:center");
//       document.querySelector("[class='results']").appendChild(thElement);
//    }
// };
// //css Rulls
// theForm.setAttribute("style", "position: absolute;left: 50%;transform: translate(-50%,0 );display: flex;flex-direction: column;margin-top: 75px; align-items: center;");
// document.querySelector("[name='elements']").setAttribute("style", "height: 29px ;margin-bottom: 12px;background-color: oldlace;width:300px; border-radius: 5px;");
// document.querySelector("[name='texts']").setAttribute("style", "height: 29px;margin-bottom: 12px;background-color: oldlace;width:300px; border-radius: 5px;");
// document.querySelector("[name='type']").setAttribute("style", "height: 35px;margin-bottom: 12px;background-color: oldlace;width:308px; border-radius: 5px;");
// document.querySelector("[name='create']").setAttribute("style", "height: 35px;margin-bottom: 12px;background-color: #00A86F;width:309px; border-radius: 5px; color:white;font-weight:bold;border: none;");
// document.querySelector("[class='results']").setAttribute("style","display: flex;flex-wrap: wrap;width: 678px;");
