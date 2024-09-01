// Add a "Loading..." row that spans two columns
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.textContent = 'Loading...';
loadingCell.colSpan = 2; // Span across 2 columns
loadingRow.appendChild(loadingCell);
document.querySelector('tbody').appendChild(loadingRow);

// Generate random times between 1 and 3 seconds (1000 to 3000 milliseconds)
const time1 = Math.random() * 3 + 1;
const time2 = Math.random() * 3 + 1;
const time3 = Math.random() * 3 + 1;

// Helper function to create a table row
function createTableRow(column1, column2) {
  const newRow = document.createElement('tr');

  const newCell1 = document.createElement('td');
  newCell1.textContent = column1;

  const newCell2 = document.createElement('td');
  newCell2.textContent = column2;

  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);

  return newRow;
}

// Function to handle promise chain
function promiseChain() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(time1), time1 * 1000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve(time2), time2 * 1000);
  });

  const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve(time3), time3 * 1000);
  });

  Promise.all([promise1, promise2, promise3]).then((times) => {
    // Remove "Loading..." row
    document.querySelector('tbody').removeChild(loadingRow);

    // Add rows for each promise
    document.querySelector('tbody').appendChild(createTableRow('Promise 1', times[0].toFixed(3)));
    document.querySelector('tbody').appendChild(createTableRow('Promise 2', times[1].toFixed(3)));
    document.querySelector('tbody').appendChild(createTableRow('Promise 3', times[2].toFixed(3)));

    // Calculate and add total time row
    const totalTime = (times[0] + times[1] + times[2]);
    document.querySelector('tbody').appendChild(createTableRow('Total', Math.max(times[0], Math.max(times[1], times[2])).toFixed(3)));
  });
}

promiseChain(); // Start the promise chain
