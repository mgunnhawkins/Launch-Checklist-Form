
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
      
      event.preventDefault();
      if (!isNaN(pilotNameInput.value)) {
         alert("Please try again.  Pilot Name field must include text.");
      } 
      if (!isNaN(copilotNameInput.value)) {
         alert("Please try again.  CoPilot Name field must include text.");  
      } 
      if (isNaN(fuelLevelInput.value)) {
         alert("Please try again.  Field must be a number.");
      }
      if (isNaN(cargoMassInput.value)) {
         alert("Please try again.  Field must be a number."); 
      }

      inputs.forEach(input => {
         if (input.value == ""){
            alert("All fields required!");  
         }
      })//end of form validation

      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch.`
      
      if (fuelLevelInput.value < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey."
         fuelStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle not Ready for Launch"
         launchStatus.style.color = "red"
         
      } 
      
      if (cargoMassInput.value > 10000) {
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
         cargoStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle not Ready for Launch"
         launchStatus.style.color = "red"
         console.log(cargoMassInput);
      } 

      if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
         launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is Ready for Launch"
      }
      faultyItems.style.visibility = "visible"
            
   });// end of submit add event listener
});

//notes




/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
