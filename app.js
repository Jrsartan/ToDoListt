  let btn=document.querySelector("button");
  let inp=document.querySelector("input");
  let ul=document.querySelector("ul");

//btn function
btn.addEventListener("click",function(){
  let item=document.createElement("li");
  ul.appendChild(item);
  item.innerText=inp.value;
  inp.value="";
  // creatin a delete button
  let delBtn=document.createElement("button");
      delBtn.innerText="delete";
      delBtn.classList.add("delet");
      item.append(delBtn);
});
let del=document.querySelectorAll(".delet");
  for(delBtn of del){
    delBtn.addEventListener("click",function(){
      let par=this.parentElement;
    });
  }
  ul.addEventListener("click",function(ev){
         if(ev.target.nodeName=="BUTTON"){
            let listitem=ev.target.parentElement;
            listitem.remove();
            console.log("deleted");
         }
      }); 