## Index

- [Intro](#intro)
- [Demo](#demo)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)

## Intro

React and Redux Google Auth2 component.

## Demo

[Live demo](http://react-redux-google-auth2.iding.ir)

## Installation

Use as a node module:

```
npm install react-redux-google-auth2 --save
```

Later in your component:

```
import { GoogleAuth2, SignIn, SignOut, Profile } from "react-redux-google-auth2"
```

and

```
<GoogleAuth2 clientId="ENTER YOUR CLIENT_ID HERE" />

<Profile classes="profile" />

<SignIn text="Login" classes="button" />

<SignOut text="Logout" classes="button" />
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

GoogleAuth2:

| Property | Type   | Default                           |
| :------- | :----- | :-------------------------------- |
| clientId | String |                                   |
| url      | Url    | https://apis.google.com/js/api.js |
| scope    | String | "emails"                          |

SignIn:

| Property | Type   | Default   |
| :------- | :----- | :-------- |
| text     | String | "Sign in" |
| classes  | String |           |

SignOut:

| Property | Type   | Default    |
| :------- | :----- | :--------- |
| text     | String | "Sign out" |
| classes  | String |            |

Profile:

| Property | Type     | Default |
| :------- | :------- | :------ |
| classes  | String   |         |
| onClick  | function |         |

## Examples

[note-manager](https://github.com/iding-ir/note-manager)
