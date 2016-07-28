# gas trello library

This library is tool for Google Apps Script and Trello.

# how to use

## GAS Project key

```
MpfmjTa4_sjhSr-E0nzJ8YFv93CYKtC0D
```

## get trello token

* https://trello.com/app-key

## sample code

```js
function usage(){
    var key = "your-trello-key";
    var token = "your-trello-token";

    var trello = new Trello(key, token);
    trello.getLists("your-trello-boardid");
    trello.addCard("your-board-list-id", "test", "test decs");
}

```
