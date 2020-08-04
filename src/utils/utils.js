export const joinClasses = (root = '', modifiers = '', otherClasses = '') => {

    const modifiersArray = modifiers.split(' ')
    const otherClassesArray = otherClasses.split(' ')

    return modifiers ?
        [root, ...modifiersArray.map(type => `${root}--${type}`), ...otherClassesArray].join(' ')
        : root ?
            [root, ...otherClassesArray].join(' ')
            : otherClassesArray.join(' ')
};