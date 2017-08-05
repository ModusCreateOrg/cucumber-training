/* eslint-disable no-param-reassign,no-plusplus */
/**
 * CommonUtils file
 */
class CommonUtils {

    /**
     * Clones an existing object into a new one.
     * If keys is provided then only those will be added to the new object.
     * If keys is not provided the it will perform a 1:1 clone of source object
     *
     * @param {Object} obj The object from which to copy
     * @param {Array} [keys=Object.keys(obj)] List of keys to be copied from the oldObj
     * @return {Object} newObj The new test data object
     */
    static cloneObj(obj, keys) {
        const newObj = {};

        if (!keys) {
            keys = Object.keys(obj);
        }

        for (let i = 0; i < keys.length; i++) {
            if (!obj[keys[i]]) {
                console.log(`Invalid property ${keys[i]} provided for source object. Key ignored.`);
            }
            newObj[keys[i]] = obj[keys[i]];
        }

        return newObj;
    }
}

module.exports = new CommonUtils();
