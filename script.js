
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
      faultyItems.style.visibility.value = "visible"
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

      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for Launch.`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`

      if (fuelLevelInput < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey."
         launchStatus.innerHTML = "Shuttle not Ready for Launch"
         launchStatus.style.color = "red"
         faultyItems.style.visibility = "visible"
      }
      
      if (cargoMassInput > 10000) {
         cargoStatus.innerHTML - "There is too much mass for the shuttle to take off"
         launchStatus.innerHTML = "Shuttle not Ready for Launch"
         launchStatus.style.color = "red"
         faultyItems.style.visibility = "visible"
      }

      if (fuelLevelInput >= 10000 && cargoMass <= 10000){
         launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is Ready for Launch"
      }
            
   });// end of submit add event listener
});

//notes
//do visibility after data is set
//if you have your code where oyu have a bunch of validators you need a way to track if it passed everything before you have the rest of the code moving forward

//The list of shuttle requirements (a list means that it is an array), the div with the id faultyItems, should be updated if something is not ready for launch.

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
