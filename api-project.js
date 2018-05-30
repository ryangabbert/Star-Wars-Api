function scrollWin(x, y) {
  window.scrollBy(x, y);
}

var starWarsList = document.querySelector('ul');

document.getElementById("btn-one").addEventListener("click", function(){
fetch('https://swapi.co/api/people/1/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(json) {
  starWarsList.innerHTML = ''
  //let people = json.results; 
  
    
  let listItemOne = document.createElement('li'); 
  
    listItemOne.innerHTML = '<li>' + 'Name:   ' +  json.name +'</li>'
    starWarsList.appendChild(listItemOne);  

    let listItemTwo = document.createElement('li'); 
    listItemTwo.innerHTML = '<li>' + 'Height: ' + json.height +'</li>'
    starWarsList.appendChild(listItemTwo);  

    let listItemThree = document.createElement('li'); 
    listItemThree.innerHTML = '<li>' + 'Mass: ' + json.mass +'</li>'
    starWarsList.appendChild(listItemThree);  

    let listItemFour = document.createElement('li'); 
    listItemFour.innerHTML = '<li>' + 'Hair Color: ' + json.hair_color +'</li>'
    starWarsList.appendChild(listItemFour); 
    
    let listItemFive = document.createElement('li'); 
    listItemFive.innerHTML = '<li>' + 'Eye Color: ' + json.eye_color +'</li>'
    starWarsList.appendChild(listItemFive);  

    let listItemSix = document.createElement('li'); 
    listItemSix.innerHTML = '<li>' + 'Birth Year: ' + json.birth_year +'</li>'
    starWarsList.appendChild(listItemSix);  

    let listItemSeven = document.createElement('li'); 
    listItemSeven.innerHTML = '<li>' + 'Gender: ' + json.gender +'</li>'
    starWarsList.appendChild(listItemSeven);  
   
  })
});
 
document.getElementById("btn-two").addEventListener("click", function(){
fetch('https://swapi.co/api/people/2/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(Force) {

  //let people = json.results; 
    starWarsList.innerHTML = ''
    let listItemEight = document.createElement('li'); 
    listItemEight.innerHTML = '<li>' + 'Name:   ' +  Force.name +'</li>'
    starWarsList.appendChild(listItemEight);  

    let listItemNine = document.createElement('li'); 
    listItemNine.innerHTML = '<li>' + 'Height: ' + Force.height +'</li>'
    starWarsList.appendChild(listItemNine);  

    let listItemTen = document.createElement('li'); 
    listItemTen.innerHTML = '<li>' + 'Mass: ' + Force.mass +'</li>'
    starWarsList.appendChild(listItemTen);  

    let listItemEleven = document.createElement('li'); 
    listItemEleven.innerHTML = '<li>' + 'Hair Color: ' + Force.hair_color +'</li>'
    starWarsList.appendChild(listItemEleven); 
    
    let listItemTwelve = document.createElement('li'); 
    listItemTwelve.innerHTML = '<li>' + 'Eye Color: ' + Force.eye_color +'</li>'
    starWarsList.appendChild(listItemTwelve);  

    let listItemThirteen = document.createElement('li'); 
    listItemThirteen.innerHTML = '<li>' + 'Birth Year: ' + Force.birth_year +'</li>'
    starWarsList.appendChild(listItemThirteen);  

    let listItemFourteen = document.createElement('li'); 
    listItemFourteen.innerHTML = '<li>' + 'Gender: ' + Force.gender +'</li>'
    starWarsList.appendChild(listItemFourteen);  
  })
});


document.getElementById("btn-three").addEventListener("click", function(){
fetch('https://swapi.co/api/people/3/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(lightSide) {
  starWarsList.innerHTML = ''
  //let people = json.results; 
  
    let listItemFifteen = document.createElement('li'); 
    listItemFifteen.innerHTML = '<li>' + 'Name:   ' +  lightSide.name +'</li>'
    starWarsList.appendChild(listItemFifteen);  

    let listItemSixteen = document.createElement('li'); 
    listItemSixteen.innerHTML = '<li>' + 'Height: ' + lightSide.height +'</li>'
    starWarsList.appendChild(listItemSixteen);  

    let listItemSeventeen = document.createElement('li'); 
    listItemSeventeen.innerHTML = '<li>' + 'Mass: ' + lightSide.mass +'</li>'
    starWarsList.appendChild(listItemSeventeen);  

    let listItemEighteen = document.createElement('li'); 
    listItemEighteen.innerHTML = '<li>' + 'Hair Color: ' + lightSide.hair_color +'</li>'
    starWarsList.appendChild(listItemEighteen); 
    
    let listItemNineteen = document.createElement('li'); 
    listItemNineteen.innerHTML = '<li>' + 'Eye Color: ' + lightSide.eye_color +'</li>'
    starWarsList.appendChild(listItemNineteen);  

    let listItemTwenty = document.createElement('li'); 
    listItemTwenty.innerHTML = '<li>' + 'Birth Year: ' + lightSide.birth_year +'</li>'
    starWarsList.appendChild(listItemTwenty);  

    let listItemTwentyOne = document.createElement('li'); 
    listItemTwentyOne.innerHTML = '<li>' + 'Gender: ' + lightSide.gender +'</li>'
    starWarsList.appendChild(listItemTwentyOne);  
  })
});

document.getElementById("btn-four").addEventListener("click", function(){
fetch('https://swapi.co/api/people/4/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(darkSide) {
  starWarsList.innerHTML = ''
  //let people = json.results; 
  
    let listItemTwentyTwo = document.createElement('li'); 
    listItemTwentyTwo.innerHTML = '<li>' + 'Name:   ' +  darkSide.name +'</li>'
    starWarsList.appendChild(listItemTwentyTwo);  

    let listItemTwentyThree = document.createElement('li'); 
    listItemTwentyThree.innerHTML = '<li>' + 'Height: ' + darkSide.height +'</li>'
    starWarsList.appendChild(listItemTwentyThree);  

    let listItemTwentyFour = document.createElement('li'); 
    listItemTwentyFour.innerHTML = '<li>' + 'Mass: ' + darkSide.mass +'</li>'
    starWarsList.appendChild(listItemTwentyFour);  

    let listItemTwentyFive = document.createElement('li'); 
    listItemTwentyFive.innerHTML = '<li>' + 'Hair Color: ' + darkSide.hair_color +'</li>'
    starWarsList.appendChild(listItemTwentyFive); 
    
    let listItemTwentySix = document.createElement('li'); 
    listItemTwentySix.innerHTML = '<li>' + 'Eye Color: ' + darkSide.eye_color +'</li>'
    starWarsList.appendChild(listItemTwentySix);  

    let listItemTwentySeven = document.createElement('li'); 
    listItemTwentySeven.innerHTML = '<li>' + 'Birth Year: ' + darkSide.birth_year +'</li>'
    starWarsList.appendChild(listItemTwentySeven);  

    let listItemTwentyEight = document.createElement('li'); 
    listItemTwentyEight.innerHTML = '<li>' + 'Gender: ' + darkSide.gender +'</li>'
    starWarsList.appendChild(listItemTwentyEight);  
  })
});

document.getElementById("btn-five").addEventListener("click", function(){
fetch('https://swapi.co/api/people/5/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(falcon) {
  starWarsList.innerHTML = ''
  //let people = json.results; 
  
    let listItemTwentyNine = document.createElement('li'); 
    listItemTwentyNine.innerHTML = '<li>' + 'Name:   ' +  falcon.name +'</li>'
    starWarsList.appendChild(listItemTwentyNine);  

    let listItemThirty = document.createElement('li'); 
    listItemThirty.innerHTML = '<li>' + 'Height: ' + falcon.height +'</li>'
    starWarsList.appendChild(listItemThirty);  

    let listItemThirtyOne = document.createElement('li'); 
    listItemThirtyOne.innerHTML = '<li>' + 'Mass: ' + falcon.mass +'</li>'
    starWarsList.appendChild(listItemThirtyOne);  

    let listItemThirtyTwo = document.createElement('li'); 
    listItemThirtyTwo.innerHTML = '<li>' + 'Hair Color: ' + falcon.hair_color +'</li>'
    starWarsList.appendChild(listItemThirtyTwo); 
    
    let listItemThirtyThree = document.createElement('li'); 
    listItemThirtyThree.innerHTML = '<li>' + 'Eye Color: ' + falcon.eye_color +'</li>'
    starWarsList.appendChild(listItemThirtyThree);  

    let listItemThirtyFour = document.createElement('li'); 
    listItemThirtyFour.innerHTML = '<li>' + 'Birth Year: ' + falcon.birth_year +'</li>'
    starWarsList.appendChild(listItemThirtyFour);  

    let listItemThirtyFive = document.createElement('li'); 
    listItemThirtyFive.innerHTML = '<li>' + 'Gender: ' + falcon.gender +'</li>'
    starWarsList.appendChild(listItemThirtyFive);  
  })
});

document.getElementById("btn-six").addEventListener("click", function(){
fetch('https://swapi.co/api/people/10/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(yoda) {
  starWarsList.innerHTML = ''
  //let people = json.results; 
  
    let listItemThirtySix = document.createElement('li'); 
    listItemThirtySix.innerHTML = '<li>' + 'Name:   ' +  yoda.name +'</li>'
    starWarsList.appendChild(listItemThirtySix);  

    let listItemThirtySeven = document.createElement('li'); 
    listItemThirtySeven.innerHTML = '<li>' + 'Height: ' + yoda.height +'</li>'
    starWarsList.appendChild(listItemThirtySeven);  

    let listItemThirtyEight = document.createElement('li'); 
    listItemThirtyEight.innerHTML = '<li>' + 'Mass: ' + yoda.mass +'</li>'
    starWarsList.appendChild(listItemThirtyEight);  

    let listItemThirtyNine = document.createElement('li'); 
    listItemThirtyNine.innerHTML = '<li>' + 'Hair Color: ' + yoda.hair_color +'</li>'
    starWarsList.appendChild(listItemThirtyNine); 
    
    let listItemForty = document.createElement('li'); 
    listItemForty.innerHTML = '<li>' + 'Eye Color: ' + yoda.eye_color +'</li>'
    starWarsList.appendChild(listItemForty);  

    let listItemFortyOne = document.createElement('li'); 
    listItemFortyOne.innerHTML = '<li>' + 'Birth Year: ' + yoda.birth_year +'</li>'
    starWarsList.appendChild(listItemFortyOne);  

    let listItemFortyTwo = document.createElement('li'); 
    listItemFortyTwo.innerHTML = '<li>' + 'Gender: ' + yoda.gender +'</li>'
    starWarsList.appendChild(listItemFortyTwo);  
  })
});
 
 
 


 
 

