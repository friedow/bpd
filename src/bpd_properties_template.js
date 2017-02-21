/**
* PLEASE COPY AND RENAME THIS FILE BY REMOVING "_template" FROM ITS NAME.
* THEN ENTER THE DESIRED SETTINGS
*
*/

var settings = {};

/**
* SET YOUR ENCODED GITHUB BASIC AUTH CREDENTIALS HERE
* USE E.G. POSTMAN TO CREATE THE ENCODED STRING
*
*/
settings["gitHubAuthToken"] = "";

/**
* CONFIGURE THE API-ENDPOINTS TO YOUR NEEDS HERE.
* PLEASE REMOVE TRAILING SLASHES (✓: [...].org | ✘: [...].org/)
*
* KEEP IN MIND THAT YOU MIGHT NEED A CORS PROXY TO ALLOW API-CALLS TO COVERALLS OR SONARQUBE.
* TRAVIS AND GITHUB ARE CURRENTLY WORKING FINE WITHOUT A PROXY.
*
*/
settings["travisApi"] = "https://api.travis-ci.org";
settings["gitHubApi"] = "https://api.github.com";
settings["sonarqubeApi"] = "https://www.sonarqube.org";
settings["coverallsApi"] = "https://coveralls.io";

module.exports = settings;
