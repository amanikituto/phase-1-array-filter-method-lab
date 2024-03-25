// Function to find matching drivers' names
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find drivers whose names begin with provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to find drivers whose name property matches provided string argument
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Example usage
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Dave", hometown: "Chicago" },
    { name: "Mary", hometown: "Miami" }
  ];
  
  // Test cases
  console.log(findMatching(["John", "Jane", "Dave", "Mary"], "mary")); // Output: ["Mary"]
  console.log(fuzzyMatch(["John", "Jane", "Dave", "Mary"], "ja")); // Output: ["Jane"]
  console.log(matchName(drivers, "Mary")); // Output: [{ name: "Mary", hometown: "Miami" }]
  