export default class Event {

    content = null;

    eventDate = null;

    user = {};

    /**
     * Object constructor
     * Used to assign values to object
     * @param data
     */
    constructor(data = {}) {
        Object.assign(this, data)
    }
}
