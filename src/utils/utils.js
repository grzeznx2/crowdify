export const joinClasses = (root = '', modifiers = '', otherClasses = '') => {
    console.log(modifiers)

    const modifiersArray = modifiers.split(' ')
    const otherClassesArray = otherClasses.split(' ')

    return modifiers ?
        [root, ...modifiersArray.map(type => `${root}--${type}`), ...otherClassesArray].join(' ')
        : root ?
            [root, ...otherClassesArray].join(' ')
            : otherClassesArray.join(' ')
};
// export const joinClasses = (root = '', modifiers = [], otherClasses = []) => {
//     return modifiers ?
//         [root, ...modifiers.map(type => `${root}--${type}`), ...otherClasses].join(' ')
//         : root ?
//             [root, ...otherClasses].join(' ')
//             : otherClasses.join(' ')
// };