'use strict';

export default class {
    name:string;
    key:string;
    accessToken:string;

    constructor(key,token) {
        this.key = key;
        this.accessToken = token;
    }


    mergeStoryPoint(cards){
        var total = 0;
        var regexp = /\((.*)\)/;

        cards.forEach (function (row) {
            var matchResult =  row.name.match(regexp);
            if(matchResult!=null){
               total += parseFloat(matchResult[1]);
            }
        });
      return total;
    }

    addCard(listID,name,desc){
        let options = {
        'method' : 'post',
        'muteHttpExceptions' : true,
        'payload' : {
            'name'      : name,
            'desc'      : desc,
            'due'       : '',
            'idList'    : listID,
            'urlSource' : ''
            }
        };
        Logger.log(UrlFetchApp.fetch(`https://api.trello.com/1/cards/?key=${this.key}&token=${this.accessToken}`,options));
    }

    getLists(boardID) {

        var response = UrlFetchApp.fetch(`https://api.trello.com/1/boards/${boardID}/lists?key=${this.key}&token=${this.accessToken}&fields=name`);
        return JSON.parse(response.getContentText());
    }

    //リスト内、カード配列取得
    getCards(list){
      var response = UrlFetchApp.fetch(`https://api.trello.com/1/lists/${list}/cards?key=${this.key}&token=${this.accessToken}`);
      return JSON.parse(response.getContentText());
    }


}
