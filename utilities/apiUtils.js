import request from 'request';

/**
 * ApiUtils file
 */
class ApiUtils {

    /**
     * Deletes user credit card information. Should be used with browser.call()
     * E.g.:
     * browser.call(function () {
        return ApiUtils.makeAGetCall().then(function (callResponse) {
            // ...
        })
       })
     *
     * @param {String} url location to make the call
     * @param {Object} params used for the call
     * @param {Object} cookies used for the call
     *
     * @return {Promise} body of the response or undefined if failed
     */
    static makeAGetCall(url, params, cookies) {
        // For demo purposes. Shows how to add cookies to a request to backend
        const jar = request.jar();
        const cookie = request.cookie(`JSESSIONID=${cookies.SESSIONID.value}`);
        jar.setCookie(cookie, url);

        return new Promise((resolve) => {
            request({
                url, // URL to hit
                qs: {
                    client_id: params.client_id,
                    db_key: params.db_key,
                    access_token: params.access_token,
                }, // Query string data
                method: 'GET', // Specify the method
                headers: { // Define headers
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                jar, // Add cookies
            }, (error, response, body) => {
                if (error) {
                    console.log(error);
                    resolve(undefined);
                } else {
                    resolve(JSON.parse(body));
                }
            });
        });
    }
}


module.exports = new ApiUtils();
