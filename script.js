
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then( function(json){
      const div = document.getElementById("missionTarget");
      let randomPlanet = Math.floor(Math.random() * json.length);
      div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomPlanet].name}</li>
            <li>Diameter: ${json[randomPlanet].diameter}</li>
            <li>Star: ${json[randomPlanet].star}</li>
            <li>Distance from Earth: ${json[randomPlanet].distance}</li>
            <li>Number of Moons: ${json[randomPlanet].moons}</li>
         </ol>
         <img class="center-image" src="${json[randomPlanet].image}"></img>
      `
   });
   
});
window.addEventListener("load", function () {
   let form = document.querySelector('form');
   const pilotNameInput = document.querySelector("input[name=pilotName]");
   const copilotNameInput = document.querySelector("input[name=copilotName]");
   const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   const cargoMassInput = document.querySelector("input[name=cargoMass]");
   const inputs = document.querySelectorAll("input");
   const faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let launchStatus = document.getElementById("launchStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   form.addEventListener("submit", function (event) {
      event.preventDefault();//DO NOT MOVE THIS!!  PREVENTS MAKING AN HTTP REQUEST TO THE SERVER
      for (const input of inputs) {
         if (input.value == ""){
            alert("All fields required!");
            return false;  
         }
      };

      let fieldValues = true
      if (!isNaN(pilotNameInput.value)) {
         alert("Please try again.  Pilot Name field must include text.");
         fieldValues = false;
      } 
      if (!isNaN(copilotNameInput.value)) {
         alert("Please try again.  CoPilot Name field must include text."); 
         fieldValues = false; 
      }
      if (isNaN(Number(fuelLevelInput.value))) {
         alert("Please try again.  Fuel Level must be a number.");
         fieldValues = false;
      } 
      if (isNaN(Number(cargoMassInput.value))) {
         alert("Please try again.  Cargo Mass must be a number."); 
         fieldValues = false;
      }
      if (!fieldValues){
         return false;
      }

   
      faultyItems.style.visibility = "visible"
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`
      
      let readyForLaunch = true
      //fuel level needs to be above or equal to 10000
         //Fuel level high enough for launch - keep this black
         //There is not enough fuel for the journey. - turn this red
      if (fuelLevelInput.value >= 10000){
         fuelStatus.innerHTML = "Fuel level high enough for launch."
         fuelStatus.style.color = "black"
      } else {
         fuelStatus.innerHTML = "There is not enough fuel for the journey."
         fuelStatus.style.color = "red"
         readyForLaunch = false
      }



      //cargo mass needs to be below 10000
         //Cargo mass low enough for launch
         //"There is too much mass for the shuttle to take off."
      if (cargoMassInput.value < 10000){
         cargoStatus.innerHTML = "Cargo mass low enough for launch."
         cargoStatus.style.color = "black"
      } else {
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
         cargoStatus.style.color = "red"
         readyForLaunch = false
      }

      //title should say shuttle not ready for launch if anything is false
      if (readyForLaunch == true){
         launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is Ready for Launch"
      } else {
         launchStatus.innerHTML = "Shuttle not Ready for Launch"
         launchStatus.style.color = "red"
      }

      
       
 
         
   });//end of form validation


      
            

});// end of submit add event listener

//notes




/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
