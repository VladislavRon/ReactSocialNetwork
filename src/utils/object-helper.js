export const updateObjInArr = (items, itemId, objPropName, newObjProps) => {
    return items.map(friend => {
        if (friend[objPropName] === itemId){
            return {...friend, ...newObjProps}
        }
        return friend;
    })
}