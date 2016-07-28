var global = this;function create() {
}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Trello = _interopRequire(require("./trello.es6"));

/**
*

* @param {string} key Trello key
* @param {string} token Trello access token
* @return {class} Trello return Trello class
*/
global.create = function (key, token) {
    return new Trello(key, token);
}
//let trello = new Trello(trello_key, trello_access_token);
;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./trello.es6":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _default = (function () {
    var _class = function _default(key, token) {
        _classCallCheck(this, _class);

        this.key = key;
        this.accessToken = token;
    };

    _createClass(_class, {
        getListStoryPoint: {
            value: function getListStoryPoint(cards) {
                var total = 0;
                var regexp = /\((.*)\)/;

                cards.forEach(function (row) {
                    var matchResult = row.name.match(regexp);
                    if (matchResult != null) {
                        total += parseFloat(matchResult[1]);
                    }
                });
                return total;
            }
        },
        addCard: {
            value: function addCard(listID, name, desc) {
                var options = {
                    method: "post",
                    muteHttpExceptions: true,
                    payload: {
                        name: name,
                        desc: desc,
                        due: "",
                        idList: listID,
                        urlSource: ""
                    }
                };
                Logger.log(UrlFetchApp.fetch("https://api.trello.com/1/cards/?key=" + this.key + "&token=" + this.accessToken, options));
            }
        },
        getLists: {
            value: function getLists(boardID) {

                var response = UrlFetchApp.fetch("https://api.trello.com/1/boards/" + boardID + "/lists?key=" + this.key + "&token=" + this.accessToken + "&fields=name");
                return JSON.parse(response.getContentText());
            }
        },
        getCards: {

            //リスト内、カード配列取得

            value: function getCards(list) {
                var response = UrlFetchApp.fetch("https://api.trello.com/1/lists/" + list + "/cards?key=" + this.key + "&token=" + this.accessToken);
                return JSON.parse(response.getContentText());
            }
        }
    });

    return _class;
})();

module.exports = _default;

},{}]},{},[1]);
