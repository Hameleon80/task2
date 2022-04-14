import { Categories } from "../store/constants";

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'
];
/**
 * Counts active and archive notes.
 * 
 * @param activeNotes array of active notes
 * @param archiveNotes array of archive notes
 * @returns array with data like ['Category', 'number of active notes', number of archive notes]
 */
export function PrepareDataToArchiveTable(activeNotes: string[], archiveNotes: string[]):string[] {
    let resultData:string[] = [];
    Categories.forEach((value)=>{
        let activeNotesNumber = CountNotesByCategory(activeNotes, value);
        let archiveNotesNumber= CountNotesByCategory(archiveNotes, value);
        resultData.push(value + '|' + activeNotesNumber + '|' + archiveNotesNumber);
    })

    return resultData;
}

/**
 * Counts number of notes in category
 * 
 * @param notes array of notes
 * @param category category name
 * @returns number of notes in category
 */
function CountNotesByCategory (notes: string[], category: string):number {
    let result = 0;

    for(const value of notes){
        const tempArr = value.split('|');
        if(tempArr[2] === category){
            result++;
        }
    }
    return result;
}
/**
 * Get values from form of modal window and add in string.
 * 
 * @param data dates from form
 * @returns string that separate each value by '|'
 */
export function getNoteFromForm(data: [string, Date, string, string]): string{
    let result = '';
    console.log(data);
    data.forEach((value)=>{
        if(value instanceof Date){
            result.concat(
                months[value.getMonth()] + ' ' +
                (value.getDate() < 10 ? '0' + value.getDate() : value.getDate()) + ', ' +
                value.getFullYear() + '|'
            )
        }
        result.concat(value + '|')
    })
    const text = data[data.length-1].toString();
    result.concat(findDatesInString(text));
    return result;
}

/**
 * finds dates in string
 * 
 * @param {string} inner
 * @returns {string}
 */
const findDatesInString = (inner: string) => {
    const regex = /\d+\/\d+\/\d+/g;
    const array = Array.from(inner.matchAll(regex));
    let result = '';

    for (let i = 0; i < array.length; i++) {
        i === 0 ? result += array[i] : result += ', ' + array[i];
    }

    return result;
}