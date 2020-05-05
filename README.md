## Index

- [Intro](#intro)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)

## Intro

React and Redux Google Auth2 component.

## Installation

Use as a node module:

```
npm install react-redux-google-auth2 --save
```

Later in your component:

```
import { GoogleAuth2 } from "react-redux-google-auth2"
```

and

```
<GoogleAuth2 clientId="ENTER YOUR CLIENT_ID HERE" />
```

In reducers:

```
import { googleAuth2Reducer } from "react-redux-google-auth2";
```

and

```
const combinedReducers = combineReducers({
  googleAuth2: googleAuth2Reducer,
});
```

## Documentation

| Property     | Type   | Default                           |
| ------------ | :----- | --------------------------------- |
| clientId     | String |                                   |
| url          | Url    | https://apis.google.com/js/api.js |
| scope        | String | emails                            |
| signInText   | String | Sign in                           |
| signOutText  | String | Sign out                          |
| signInClass  | String |                                   |
| signOutClass | String |                                   |

## Examples

[Github](https://github.com/iding-ir/note-manager)
