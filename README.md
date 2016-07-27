# gas-babel-gulp

## how to use


## get trello token

* https://trello.com/app-key

## get slack token
* https://api.slack.com/docs/oauth-test-tokens


## set script property

```js
function setProperties() {
    PropertiesService.getScriptProperties().setProperty("trello_key", "your-trello-key");
    PropertiesService.getScriptProperties().setProperty("trello_token", "your-trello-token");
    PropertiesService.getScriptProperties().setProperty("trello_access_token", "your-trello-access-token");

    PropertiesService.getScriptProperties().setProperty("slack_token", "your-slack-token");
}
```