
window.addEventListener("load", function () {
   let form = document.querySelector('form');
   const pilotNameInput = document.querySelector("input[name='pilotName']");
   const copilotNameInput = document.querySelector("input[name='copilotName']");
   const fuelLevelInput = document.querySelector("input[name='fuelLevel']");
   const cargoMassInput = document.querySelector("input[name='cargoMass']");
   const inputs = document.querySelectorAll("input");
   const faultyItems = document.getElementsByClassName("faultyItems");
   console.log(faultyItems)
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");

   form.addEventListener("submit", function (event) {
      let messages = []

      if (!isNaN(pilotNameInput.value)) {
         messages.push("Please try again.  Pilot Name field must include text.");
         alert(messages);
         event.preventDefault()
      } 
      if (!isNaN(copilotNameInput.value)) {
         messages.push("Please try again.  CoPilot Name field must include text.");
         alert(messages);
         event.preventDefault()
      } 

      //(!isNaN(copilotNameInput.value))

      if (isNaN(fuelLevelInput.value)) {
         messages.push("Please try again.  Field must be a number.")
         event.preventDefault()
      }
      if (isNaN(cargoMassInput.value)) {
         messages.push("Please try again.  Field must be a number.")
         event.preventDefault()
      }

      inputs.forEach(input => {
         if (input.value == ""){
            alert("All fields required!")
            event.preventDefault()
         }
      })

         function updateShuttleRequirements(){
            
         }
         faultyItems.style.visibility = "visible"
         console.log(faultyItems.style.visibility);
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for Launch.`
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`
         console.log(pilotStatus.innerHTML,copilotStatus.innerHTML);
         event.preventDefault()
      
         
   });// end of submit add event listener
});


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
