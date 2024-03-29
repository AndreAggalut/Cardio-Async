const fs = require('fs').promises;
/*
All of your functions must return a promise!
*/
/*
Create another function of append since we going to use it a lot 
*/
function log(value) {
  return fs.appendFile('./log.txt', `${value} ${Date.now()}\n`);
}
/* 
Every function should be logged with a timestamp.
If the function logs data, then put that data into the log
ex after running get('user.json', 'email'):
  sroberts@talentpath.com 1563221866619

If the function just completes an operation, then mention that
ex after running delete('user.json'):
  user.json succesfully delete 1563221866619

Errors should also be logged (preferably in a human-readable format)
*/

/**
 * Logs the value of object[key]
 * @param {string} file
 * @param {string} key
 */
// function get(file, key) {
//   //The promises way....
//   // 1. Read the file
//   const readPromise = fs.readFile(file, 'utf-8');
//   // 2. handle the promise -->
//   // .then() always accept callback function()
//   return readPromise
//     .then(data => {
//       console.log(data);
//       // 3. Parse the data from string to JSON.
//       const parsed = JSON.parse(data);
//       console.log(parsed);
//       // 4. Use the key to get the  value at object[key]
//       // {
//       //   "firstname": "Andrew",
//       //   "lastname": "Maney",
//       //   "email": "amaney@talentpath.com"
//       // }
//       const value = parsed[key];
//       if (!value) return log(`ERROR ${key} invalid key on ${file}`);
//       console.log(value);
//       // 5. append the log file with that above value
//       // you wanna make sure you want to return these promises.
//       return log(value);
//     })
//     .catch(err => log(`ERROR no such file or directory ${file}`));
// }

// ASYNC WAY
async function get(file, key) {
  try {
    // 1.read file
    // 2.handle async data
    const data = await fs.readFile(file, 'utf8');
    // 3. parse data from string --> JSON
    const parsed = JSON.parse(data);
    // 4. use the key to get the value at object[key]
    const value = parsed[key];
    // 5. append the log file with the value
    return log(value);
  } catch (err) {
    log(`ERROR no such file or directory ${file}`);
  }
}
/**
 * Sets the value of object[key] and rewrites object to file
 * @param {string} file
 * @param {string} key
 * @param {string} value
 */
function set(file, key, value) {}

/**
 * Deletes key from object and rewrites object to file
 * @param {string} file
 * @param {string} key
 */
function remove(file, key) {}

/**
 * Deletes file.
 * Gracefully errors if the file does not exist.
 * @param {string} file
 */
function deleteFile(file) {}

/**
 * Creates file with an empty object inside.
 * Gracefully errors if the file already exists.
 * @param {string} file JSON filename
 */
function createFile(file) {}

/**
 * Merges all data into a mega object and logs it.
 * Each object key should be the filename (without the .json) and the value should be the contents
 * ex:
 *  {
 *  user: {
 *      "firstname": "Scott",
 *      "lastname": "Roberts",
 *      "email": "sroberts@talentpath.com",
 *      "username": "scoot"
 *    },
 *  post: {
 *      "title": "Async/Await lesson",
 *      "description": "How to write asynchronous JavaScript",
 *      "date": "July 15, 2019"
 *    }
 * }
 */
function mergeData() {}

/**
 * Takes two files and logs all the properties as a list without duplicates
 * @param {string} fileA
 * @param {string} fileB
 * @example
 *  union('scott.json', 'andrew.json')
 *  // ['firstname', 'lastname', 'email', 'username']
 */
function union(fileA, fileB) {}

/**
 * Takes two files and logs all the properties that both objects share
 * @param {string} fileA
 * @param {string} fileB
 * @example
 *    intersect('scott.json', 'andrew.json')
 *    // ['firstname', 'lastname', 'email']
 */
function intersect(fileA, fileB) {}

/**
 * Takes two files and logs all properties that are different between the two objects
 * @param {string} fileA
 * @param {string} fileB
 * @example
 *    difference('scott.json', 'andrew.json')
 *    // ['username']
 */
function difference(fileA, fileB) {}

module.exports = {
  get,
  set,
  remove,
  deleteFile,
  createFile,
  mergeData,
  union,
  intersect,
  difference,
};
