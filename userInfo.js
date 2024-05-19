const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
const modifiedNames = formatArrayStrings( processArray([1, 2, 3, 4, 5]),names);
console.log(createUserProfiles(names, modifiedNames));