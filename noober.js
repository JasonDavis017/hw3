// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Parse object and create well-named variables

  // Set Passenger name to First Name and Last Name, separated with a space
  let passengerName = `${ride.passengerDetails.first} ${ride.passengerDetails.last}`
  // Set Passenger Phone Number to the phone number and store as a string
  let passengerPhoneNumber = `${ride.passengerDetails.phoneNumber}`
  // Set Pickup Location to the Address, City, State and Zip
  let pickupLocation = `${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`
  // Set Dropoff Location to the Address, City, State and Zip
  let dropoffLocation = `${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`
  // Store number of passengers in memory
  let numberOfPassengers = ride.numberOfPassengers

  // Set level of service with conditional statements
  // If Purple is requested, service is always purplee
  // Otherwise it is a Noober X, unless there are more than 3 people in car (then Noober XL)

  let serviceRequested
  if (ride.purpleRequested==true) {
    serviceRequested=`Noober Purple`
  } else if (numberOfPassengers > 3 && ride.purpleRequested==false){
    serviceRequested=`Noober XL`
  } else {
    serviceRequested=`Noober X`
  }

  // Print ride in Console in human-readable format
  console.log(`${serviceRequested} Passenger: ${passengerName} - ${passengerPhoneNumber}. Pickup at ${pickupLocation}. Drop-off at ${dropoffLocation}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
