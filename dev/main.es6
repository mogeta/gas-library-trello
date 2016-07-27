import Trello from './trello.es6'

/**
*

* @param {string} key Trello key
* @param {string} token Trello access token
* @return {class} Trello return Trello class
*/
global.create = function(key,token){
    return new Trello(key,token);
}
//let trello = new Trello(trello_key, trello_access_token);
