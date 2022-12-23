  // making para click container
  heading = `<div class="head-click">
  <header>
    <div id="top-div">
      <div id="heading">
        // <i class="fa-brands fa-wolf-pack-battalion"></i>
        <h1 id="back-heading">Back</h1>
      </div>

        <p class="card-chosen"></p>

      <div id="awesome-btn">
        <p id="para">Add item</p>
        <i class="fa-solid fa-dice-d20" id="fa-dice"></i>
      </div>
    </div>
  </header>
  <hr />
 </div> `

  let helloMe = document.querySelector('#hello-me');
  let know = document.querySelectorAll('.list-pop-up-div')
  let specialCard = document.querySelector('#special-card');

  for(let para = 0; para < arr.length; para++) {

    arr[para].addEventListener('click', () => {
      helloMe.innerHTML = paraBox;
      document.querySelector('.lists-div').style.display = "none"
      document.querySelector('#part-1-header').style.display = "none"
      document.querySelector('#special-card').appendChild(know[para])
      document.querySelector('.card-chosen').textContent = arr[para].textContent
   
  
// back - btn
    document.querySelector('.fa-wolf-pack-battalion').addEventListener('click', () => {
      document.querySelector('.lists-div').style.display = "flex"
      document.querySelector('#part-1-header').style.display = "inherit"
      document.querySelector('#hello-me').style.display = "none"
      document.querySelector('.lists-div').appendChild(specialCard);
      
   }); 


   // fa-dice add button
   document.querySelector('#fa-dice').addEventListener('click', () => {
    document.querySelector('#pop-up-index').innerHTML = popUp;

    
    // add
    document.querySelector('#add-btn').addEventListener('click', () => {
      
        ++i;
      document.querySelector('.lists-div').innerHTML += todo
      document.querySelector('.lists-div').style.display = "flex"
      document.querySelector('#part-1-header').style.display = "inherit"
      document.querySelector('#hello-me').style.display = "none"
      document.querySelector('#pop-up').style.visibility = "hidden"
      document.querySelector('.lists-div').appendChild(specialCard);
      console.log(i);
      var g =document.querySelectorAll(`.para-head`);
      console.log(g[i-2])
      g[i-2].textContent = document.querySelector('#todo-input').value
      
    }); // add end


    // close
    document.querySelector('#close-btn').addEventListener('click', () => {
      document.querySelector('#pop-up').style.visibility = "hidden";
    });  // close end


 }); // fa dice add button end


   }); // para-click end


  }     // for loop end
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 // making para click container
//  heading = `<div class="head-click">
//  <header>
//    <div id="top-div">
//      <div id="heading">
//      <i class="fa-solid fa-circle-arrow-left symbol-index3"></i>
//      <font id="back" style="display: inline;">Back</font>
//      </div>
//        <p class="card"></p>
//      <div id="addd-btn">
//        <p id="additem">Add item</p>
//        <i class="fa-solid fa-circle-plus symbol" onclick="popupopen()"></i>
//      </div>
//    </div>
//  </header>
//  <hr />
// </div> `

//  let helloMe = document.querySelector('#hello-me');
//  let know = document.querySelectorAll('.list-pop-up-div')
//  let specialCard = document.querySelector('#special-card');

//  for(let additem = 0; additem < arr.length; additem++) {

//    arr[additem].addEventListener('click', () => {
//      helloMe.innerHTML = heading;
//      document.querySelector('.lists-div').style.display = "none"
//      document.querySelector('#part-1-header').style.display = "none"
//      document.querySelector('#special-card').appendChild(know[additem])
//      document.querySelector('.card').textContent = arr[additem].textContent
// // back - btn
//    document.querySelector('.fa-solid fa-circle-arrow-left symbol-index3').addEventListener('click', () => {
//      document.querySelector('.lists-div').style.display = "flex"
//      document.querySelector('#part-1-header').style.display = "inherit"
//      document.querySelector('#hello-me').style.display = "none"
//      document.querySelector('.lists-div').appendChild(specialCard);
     
//   }); 


//   // fa-dice add button
//   document.querySelector('.fa-solid fa-circle-plus symbol').addEventListener('click', () => {
//    document.querySelector('#newitem').innerHTML = popup;

   
//    // // add
//    // document.querySelector('#add-btn').addEventListener('click', () => {
//    //     ++i;
//    //   document.querySelector('.lists-div').innerHTML += todo
//    //   document.querySelector('.lists-div').style.display = "flex"
//    //   document.querySelector('#part-1-header').style.display = "inherit"
//    //   document.querySelector('#hello-me').style.display = "none"
//    //   document.querySelector('#pop-up').style.visibility = "hidden"
//    //   document.querySelector('.lists-div').appendChild(specialCard);
//    //   console.log(i);
//    //   var g =document.querySelectorAll(`.para-head`);
//    //   console.log(g[i-2])
//    //   g[i-2].textContent = document.querySelector('#todo-input').value
     
//    // }); 
//    document.querySelector('#close-btn2').addEventListener('click', () => {
//      document.querySelector('#popup2').style.display = "none";
//    });  
// });
//   });
//  }     






























