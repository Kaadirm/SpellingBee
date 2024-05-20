const fs = require('fs');

const file_path = '../public/dictonaries/turkish.txt';

// Open the file in read mode
fs.readFile(file_path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Read all lines and store them in an array
    const lines = data.split('\n');

    // Remove any leading or trailing whitespace from each line
    const trimmedLines = lines.map(line => line.trim());

    // Convert the array to a JSON string
    const jsonString = JSON.stringify(trimmedLines);

    // Write the JSON string back to the same file
    fs.writeFile(file_path, jsonString, 'utf8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('JSON string has been written to the file.');
    });
});
