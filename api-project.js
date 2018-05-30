function scrollWin(x, y) {
  window.scrollBy(x, y);
}

document.getElementById("btn-one").addEventListener("click", function(){
  var starWarsListOne = document.querySelector('ul');
fetch('https://swapi.co/api/people/1/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(json) {
  //let people = json.results; 
  
    let listItemOne = document.createElement('li'); 
    listItemOne.innerHTML = '<li>' + 'Name:   ' +  json.name +'</li>'
    starWarsListOne.appendChild(listItemOne);  

    let listItemTwo = document.createElement('li'); 
    listItemTwo.innerHTML = '<li>' + 'Height: ' + json.height +'</li>'
    starWarsListOne.appendChild(listItemTwo);  

    let listItemThree = document.createElement('li'); 
    listItemThree.innerHTML = '<li>' + 'Mass: ' + json.mass +'</li>'
    starWarsListOne.appendChild(listItemThree);  

    let listItemFour = document.createElement('li'); 
    listItemFour.innerHTML = '<li>' + 'Hair Color: ' + json.hair_color +'</li>'
    starWarsListOne.appendChild(listItemFour); 
    
    let listItemFive = document.createElement('li'); 
    listItemFive.innerHTML = '<li>' + 'Eye Color: ' + json.eye_color +'</li>'
    starWarsListOne.appendChild(listItemFive);  

    let listItemSix = document.createElement('li'); 
    listItemSix.innerHTML = '<li>' + 'Birth Year: ' + json.birth_year +'</li>'
    starWarsListOne.appendChild(listItemSix);  

    let listItemSeven = document.createElement('li'); 
    listItemSeven.innerHTML = '<li>' + 'Gender: ' + json.gender +'</li>'
    starWarsListOne.appendChild(listItemSeven);  
  })
});
 
document.getElementById("btn-two").addEventListener("click", function(){
  var starWarsListTwo = document.querySelector('ul');
fetch('https://swapi.co/api/people/2/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(Force) {
  //let people = json.results; 
  
    let listItemEight = document.createElement('li'); 
    listItemEight.innerHTML = '<li>' + 'Name:   ' +  Force.name +'</li>'
    starWarsListTwo.appendChild(listItemEight);  

    let listItemNine = document.createElement('li'); 
    listItemNine.innerHTML = '<li>' + 'Height: ' + Force.height +'</li>'
    starWarsListTwo.appendChild(listItemNine);  

    let listItemTen = document.createElement('li'); 
    listItemTen.innerHTML = '<li>' + 'Mass: ' + Force.mass +'</li>'
    starWarsListTwo.appendChild(listItemTen);  

    let listItemEleven = document.createElement('li'); 
    listItemEleven.innerHTML = '<li>' + 'Hair Color: ' + Force.hair_color +'</li>'
    starWarsListTwo.appendChild(listItemEleven); 
    
    let listItemTwelve = document.createElement('li'); 
    listItemTwelve.innerHTML = '<li>' + 'Eye Color: ' + Force.eye_color +'</li>'
    starWarsListTwo.appendChild(listItemTwelve);  

    let listItemThirteen = document.createElement('li'); 
    listItemThirteen.innerHTML = '<li>' + 'Birth Year: ' + Force.birth_year +'</li>'
    starWarsListTwo.appendChild(listItemThirteen);  

    let listItemFourteen = document.createElement('li'); 
    listItemFourteen.innerHTML = '<li>' + 'Gender: ' + Force.gender +'</li>'
    starWarsListTwo.appendChild(listItemFourteen);  
  })
});

document.getElementById("btn-three").addEventListener("click", function(){
  var starWarsListThree = document.querySelector('ul');
fetch('https://swapi.co/api/people/3/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(lightSide) {
  //let people = json.results; 
  
    let listItemFifteen = document.createElement('li'); 
    listItemFifteen.innerHTML = '<li>' + 'Name:   ' +  lightSide.name +'</li>'
    starWarsListThree.appendChild(listItemFifteen);  

    let listItemSixteen = document.createElement('li'); 
    listItemSixteen.innerHTML = '<li>' + 'Height: ' + lightSide.height +'</li>'
    starWarsListThree.appendChild(listItemSixteen);  

    let listItemSeventeen = document.createElement('li'); 
    listItemSeventeen.innerHTML = '<li>' + 'Mass: ' + lightSide.mass +'</li>'
    starWarsListThree.appendChild(listItemSeventeen);  

    let listItemEighteen = document.createElement('li'); 
    listItemEighteen.innerHTML = '<li>' + 'Hair Color: ' + lightSide.hair_color +'</li>'
    starWarsListThree.appendChild(listItemEighteen); 
    
    let listItemNineteen = document.createElement('li'); 
    listItemNineteen.innerHTML = '<li>' + 'Eye Color: ' + lightSide.eye_color +'</li>'
    starWarsListThree.appendChild(listItemNineeen);  

    let listItemTwenty = document.createElement('li'); 
    listItemTwenty.innerHTML = '<li>' + 'Birth Year: ' + lightSide.birth_year +'</li>'
    starWarsListThree.appendChild(listItemTwenty);  

    let listItemTwentyOne = document.createElement('li'); 
    listItemTwentyOne.innerHTML = '<li>' + 'Gender: ' + lightSide.gender +'</li>'
    starWarsListThree.appendChild(listItemTwentyOne);  
  })
});

document.getElementById("btn-four").addEventListener("click", function(){
  var starWarsListFour = document.querySelector('ul');
fetch('https://swapi.co/api/people/4/') 
.then(function(response) {   
  return response.json(); 
 
})
.then(function(darkSide) {
  //let people = json.results; 
  
    let listItemTwentyTwo = document.createElement('li'); 
    listItemTwentyTwo.innerHTML = '<li>' + 'Name:   ' +  darkSide.name +'</li>'
    starWarsListFour.appendChild(listItemTwentyTwo);  

    let listItemSixteen = document.createElement('li'); 
    listItemSixteen.innerHTML = '<li>' + 'Height: ' + lightSide.height +'</li>'
    starWarsListThree.appendChild(listItemSixteen);  

    let listItemSeventeen = document.createElement('li'); 
    listItemSeventeen.innerHTML = '<li>' + 'Mass: ' + lightSide.mass +'</li>'
    starWarsListThree.appendChild(listItemSeventeen);  

    let listItemEighteen = document.createElement('li'); 
    listItemEighteen.innerHTML = '<li>' + 'Hair Color: ' + lightSide.hair_color +'</li>'
    starWarsListThree.appendChild(listItemEighteen); 
    
    let listItemNineteen = document.createElement('li'); 
    listItemNineteen.innerHTML = '<li>' + 'Eye Color: ' + lightSide.eye_color +'</li>'
    starWarsListThree.appendChild(listItemNineeen);  

    let listItemTwenty = document.createElement('li'); 
    listItemTwenty.innerHTML = '<li>' + 'Birth Year: ' + lightSide.birth_year +'</li>'
    starWarsListThree.appendChild(listItemTwenty);  

    let listItemTwentyOne = document.createElement('li'); 
    listItemTwentyOne.innerHTML = '<li>' + 'Gender: ' + lightSide.gender +'</li>'
    starWarsListThree.appendChild(listItemTwentyOne);  
  })
});
 
 


 
 

