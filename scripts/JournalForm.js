// Define and export a function that returns the HTML for the journal form and its input fields
    // Declare a variable to store the form HTML
    // Return HTML string

export const JournalForm = () => {
    let formHTML = `
        <fieldset>
            <label for="entryDate">Date of Entry</label>
            <input type="date" name="entryDate" class="entryForm__date">
        </fieldset>
        <fieldset>
            <label for="entryConcepts">Concepts Covered</label>
            <input type="text" name="entryConcepts" class="entryForm__concepts">
        </fieldset>
        <fieldset>
            <label for="entryText">Journal Entry</label>
            <textarea id="entryText" name="entryText"></textarea>
        </fieldset>
        <fieldset>
            <label for="entryMood">Mood for the Day</label>
            <select id="entryMood" name="entryMood">
                <option value="">Please select an option</option>
                <option value="carefree">Carefree</option>
                <option value="nervous">Nervous</option>
                <option value="content">Content</option>
                <option value="upset">Upset</option>
                <option value="calm">Calm</option>
                <option value="tense">Tense</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="alert">Alert</option>
                <option value="bored">Bored</option>
                <option value="confused">Confused</option>
                <option value="confident">Confident</option>
            </select>
        </fieldset>
        <button class="entryButton" type="button">Record Journal Entry</button>`
    return formHTML
}