/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    entries: []
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}


// Finish / fix this when you get to Chapter 6

// export const getEntries = () => {
//     return fetch("http://localhost:8088/entries") // Fetch from the API - path to the resource is your function argument
//         .then(response => JSON.parse(response)) // Parse as JSON
//         .then(entries => database[entries].push(data))
// }