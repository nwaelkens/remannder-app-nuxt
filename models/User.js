export default class User {

    displayName = null;
    avatar = null;
    email = null

    /**
     * Object constructor
     * Used to assign values to object
     * @param data
     */
    constructor(data = {}) {
        Object.assign(this, data)
    }
}
