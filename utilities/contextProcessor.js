/**
 * ContextProcessor file
 */
class ContextProcessor {

    /**
     * Initialize test context
     */
    constructor() {
        this.testContext = this.testContext ? this.testContext : new Map();
        this.featureContext = this.featureContext ? this.featureContext : new Map();
        this.scenarioContext = this.scenarioContext ? this.scenarioContext : new Map();
    }

    /**
     * Returns the entire testContext map
     * @return {Map} testContext
     */
    getTestContext() {
        return this.testContext;
    }

    /**
     * Returns testContext value for key
     *
     * @param {String} key - the variable to return from the testContext
     * @return {Map} testContext
     */
    getTestContextByKey(key) {
        if (!this.testContext.has(key)) {
            const err = `Key '${key}' is not present in testContext. Please use post!`;
            throw err;
        }
        return this.testContext.get(key);
    }

    /**
     * Sets new testContext variables to map
     * @param {Map} map - the variable to set to the testContext
     */
    postTestContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (me.testContext.has(key)) {
                const err = `Key '${key}' already exists in testContext. Please use put!`;
                throw err;
            } else {
                me.testContext.set(key, value);
            }
        });
    }

    /**
     * Updates testContext variables on map. If key is not present new entries will be created.
     * @param {Map} map - the variable to set to the testContext
     */
    putTestContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (map.has(key)) {
                console.log(`Key ${key} already exists in testContext. Will be updated!`);
            }
            me.testContext.set(key, value);
        });
    }

    /**
     * Cleans the testContext object
     */
    deleteTestContext() {
        console.log('testContext object was successfully cleared');
        this.testContext = new Map();
    }

    /**
     * Returns the entire featureContext map
     * @return {Map} featureContext
     */
    getFeatureContext() {
        return this.featureContext;
    }

    /**
     * Returns featureContext value for key
     *
     * @param {String} key - the variable to return from the featureContext
     * @return {Map} featureContext
     */
    getFeatureContextByKey(key) {
        if (!this.featureContext.has(key)) {
            const err = `Key '${key}' is not present in featureContext. Please use post!`;
            throw err;
        }
        return this.featureContext.get(key);
    }

    /**
     * Sets new featureContext variables to map
     * @param {Map} map - the variable to set to the featureContext
     */
    postFeatureContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (me.featureContext.has(key)) {
                const err = `Key '${key}' already exists in featureContext. Please use put!`;
                throw err;
            } else {
                me.featureContext.set(key, value);
            }
        });
    }

    /**
     * Updates featureContext variables on map. If key is not present new entries will be created.
     * @param {Map} map - the variable to set to the featureContext
     */
    putFeatureContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (me.featureContext.has(key)) {
                console.log(`Key ${key} already exists in featureContext. Will be updated!`);
            }
            me.featureContext.set(key, value);
        });
    }

    /**
     * Cleans the featureContext object
     */
    deleteFeatureContext() {
        console.log('featureContext object was successfully cleared');
        this.featureContext = new Map();
    }

    /**
     * Returns the entire scenarioContext map
     * @return {Map} scenarioContext
     */
    getScenarioContext() {
        return this.scenarioContext;
    }

    /**
     * Returns scenarioContext value for key
     *
     * @param {String} key - the variable to return from the scenarioContext
     * @return {Map} scenarioContext
     */
    getScenarioContextByKey(key) {
        if (!this.scenarioContext.has(key)) {
            const err = `Key '${key}' is not present in scenarioContext. Please use post!`;
            throw err;
        }
        return this.scenarioContext.get(key);
    }

    /**
     * Sets new scenarioContext variables to map
     * @param {Map} map - the variable to set to the scenarioContext
     */
    postScenarioContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (me.scenarioContext.has(key)) {
                const err = `Key '${key}' already exists in scenarioContext. Please use put!`;
                throw err;
            } else {
                me.scenarioContext.set(key, value);
            }
        });
    }

    /**
     * Updates scenarioContext variables on map. If key is not present new entries will be created.
     * @param {Map} map - the variable to set to the scenarioContext
     */
    putScenarioContext(map) {
        const me = this;
        map.forEach((value, key) => {
            if (me.scenarioContext.has(key)) {
                console.log(`Key ${key} already exists in scenarioContext. Will be updated!`);
            }
            me.scenarioContext.set(key, value);
        });
    }

    /**
     * Cleans the scenarioContext object
     */
    deleteScenarioContext() {
        console.log('scenarioContext object was successfully cleared');
        this.scenarioContext = new Map();
    }
}

module.exports = new ContextProcessor();
