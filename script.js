let cardData=[];
let datav=[];
let chapsData=[];
///////////////////////////////////////
//////////fetching url using async/////
//////////////////////////////////////
 async function fetchdata(){

    var url=`https://anapioficeandfire.com/api/books?pageSize=50`;
    try{
        let result=await fetch(url);
        let output=await result.json();
        //console.log(output);
        if(output.length>0){
        datav=[...output];}
       createCard(datav);
      // createchaps(datav);
       
        
    }
    catch(error){
        console.log(error);
    }
 }
 fetchdata();

 
 const contain=document.createElement('div');
contain.setAttribute('class','container');

///////////////////////////////////////////
///////////// search box //////////////////
//////////////////////////////////////////

let input=document.createElement('input');
input.setAttribute("id","bkname");
input.placeholder="Enter Book ";
input.type="text";
input.onkeyup=function(){
handleSearch(this);}


document.body.append(input,contain);

//////////////////////////////////////////////////
// create function a div to display book details//
//////////////////////////////////////////////////

function createCard(value){
    const carder=document.createElement('div');
    carder.setAttribute('class','cardee');
    contain.innerHTML='';
  // console.log(value);
    value.forEach((data)=>{
    
    const card = document.createElement('div');
    card.classList.add('cards');

    let Name=document.createElement('h4');
    Name.textContent=`${data.name}`;
    Name.setAttribute('class','name');
    let Isbn=document.createElement('p');
    Isbn.setAttribute('class','isbn');
    Isbn.innerText=`Isbn:${data.isbn}`;
    let Numofpages=document.createElement('p');
    Numofpages.setAttribute('class','nopge');
    Numofpages.innerText=`Number of the Pages:${data.numberofPages}`;
    let Author=document.createElement('h5');
    Author.setAttribute('class','author');
    Author.innerText=`Author:${data.authors}`;
    let Publisher=document.createElement('p');
    Publisher.setAttribute('class','publisher');
    Publisher.innerText=`Publisher:${data.publisher}`;
    let Release=document.createElement('p');
    Release.setAttribute('class','releasedate');
    Release.innerText=`Release Date:${data.released}`;
    let button=document.createElement('button');
    button.setAttribute("type","reset");
    button.setAttribute("class","btn btn-secondary");
    button.innerText="click here characters";
    button.onclick=function(){
    details( data.characters);
  showPopup();}
       
    

   card.append(Name,Isbn,Numofpages,Author,Publisher,Release,button);

carder.appendChild(card);
contain.appendChild(carder);
});

 }
//////////////////////////////////////////
////////search book///////////////////////
/////////////////////////////////////////
 function handleSearch(target) {
    const search = target.value.toLowerCase();
    //console.log(datav);
    const searchMatch = datav.filter((element) => {
     
      return  element.name.toLowerCase().includes(search);
    });
    createCard(searchMatch);
  }
  /////////////////////////////////////////////////
  /////// create a new popup window///////////////
  ////////////////////////////////////////////////
  let newDIV=document.createElement('div');
    newDIV.setAttribute('class','charc');
    newDIV.setAttribute('id','bkname1');
   ;
    document.body.append(newDIV);
    ///////////////////////////////////
    ////////// get data for button/////
    ///////////////////////////////////
 async function details(data){
  
    
    for(let i=0;i<5;i++){
      try{
        const res=await fetch(data[i]);
        const res1=await res.json();
        chapsData.push(res1.name); 
       // console.log(chapsData);
       newDIV.innerHTML=`<h2>Characters</h2>
        <p id="p1"> ${chapsData}</p>
        <button onclick="hidePopup()">Close</button>`
       

      }
    
      catch(err){
        alert(err)
      }
      p1.innertext=`characters:${chapsData[0],chapsData[1],chapsData[2],
        chapsData[3],chapsData[4]}`
    }

  }
  /////////////////////////////////////////////////////////////
  /////////////////popup function/////////////////////////////
  ////////////////////////////////////////////////////////////
  function showPopup() {
    var popup = document.getElementById("bkname1");
    if (popup) {
      popup.style.display = "block";
    }
    else {
      console.error("Popup element not found");
    }
  }
  function hidePopup() {
    var popup = document.getElementById("bkname1");
    if (popup) {
      popup.style.display = "none";
    }
    else {
      console.error("Popup element not found");
    }
  }
 
  

 


  

