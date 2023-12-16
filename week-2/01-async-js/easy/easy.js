//===================================================================================

let count = 0;

function incrementCounter() {
  count++;
  console.log(" setinterval"+ count);
}

// setInterval(incrementCounter, 1000); // Increment counter every 1000ms (1 second)

//===================================================================================

function incrementCounter() {
    count++;
    console.log(count);
    setTimeout(incrementCounter, 1000); // Call incrementCounter again after 1000ms (1 second)
  }
  
//   incrementCounter(); // Start the counter

//===================================================================================

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

// Read contents of a file
fs.readFile('mynewfile1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Contents:', data);

  // Expensive operation - Increasingly expensive setTimeout
  const increasinglyExpensiveOperation = (milliseconds) => {
    if (milliseconds > 10000) {
      console.log('Finished increasingly expensive operation');
      return;
    }

    console.log(`Performing an operation taking ${milliseconds} milliseconds...`);
    setTimeout(() => {
      increasinglyExpensiveOperation(milliseconds * 2); // Double the time for the next operation
    }, milliseconds);
  };

//   increasinglyExpensiveOperation(1000); // Start with an operation taking 1000 milliseconds
});

//===================================================================================

const content = 'Hello, this is the content that will be written to the file.';

fs.writeFile('mynewfile1.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully!');
});

