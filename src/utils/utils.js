export const joinClasses = (root = '', modifiers = [], otherClasses = []) => {
    // otherClasses = otherClasses ? otherClasses : [];
    return modifiers ?
        [root, ...modifiers.map(type => `${root}--${type}`), ...otherClasses].join(' ')
        : root ?
            [root, ...otherClasses].join(' ')
            : otherClasses.join(' ')
};