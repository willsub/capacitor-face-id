# Capacitor Face ID Plugin

[![npm version](https://badge.fury.io/js/%40willsub-npm%2Fcapacitor-face-id.svg)](https://badge.fury.io/js/%40willsub-npm%2Fcapacitor-face-id)

Allow users to authenticate with Face ID or Touch ID on iOS devices.

<img src="https://cdn4.iconfinder.com/data/icons/apple-touch-id/512/Touch_ID-512.png" width="50" alt="Touch ID" />
<img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/face_ID-512.png" width="50" alt="Face ID" />

#### NOTE

If you are switching from [capacitor-face-id](https://github.com/danielsogl/capacitor-face-id) to this plugin,
please note that some breaking changes have been made to the API.

## Installation

```sh
pnpm install @willsub-npm/capacitor-face-id
npm install @willsub-npm/capacitor-face-id
yarn add @willsub-npm/capacitor-face-id
```

## Setup

On iOS, you must add an entry to your target’s `Info.plist`:

1. Go to the settings for your app’s target (not the project) in Xcode.
1. Click on the `Info` tab.
1. Add a property to the properties list.
1. Select `Privacy - Face ID Usage Description` as the key.
1. Set the value to the prompt you want to show to the user the first
time a Face/Touch ID authorization is attempted. Example:

```
Access to the app requires authentication.
```

## Usage

```ts
import { Plugins } from '@capacitor/core';
import { FaceIdPluginBiometryType, FaceIdPluginErrorCode } from '@willsub-npm/capacitor-face-id';

const { FaceId } = Plugins;
const appName = 'My Great App';

async function biometricAuth() {
  const authCheck = await FaceId.isAvailable();
  const authType = authCheck.value;

  if (authType !== FaceIdPluginBiometryType.none) {
    try {
      await FaceId.auth({
        reason: 'Please authenticate',
        fallbackTitle: '' // Don't show a fallback button
      });
    } catch (error) {
      let message;
  
      switch (error.code) {
        // This happens if the user disables biometric access in Settings
        case FaceIdPluginErrorCode.biometryNotAvailable:
          message = `In order to use ${authType}, you must enable it in Settings > ${appName}.`;
          break;
  
        case FaceIdPluginErrorCode.biometryNotEnrolled:
          message = `In order to use ${authType}, you must set it up in the Settings app.`;
          break;
  
        default:
          message = 'Feel free to try again.';
      }
  
      await showAlert({
        header: `${authType} Error`,
        message: `${error.message} ${message}`
      });
    }
  } else {
    // use fallback authentication here
  }
}
```

## API

The complete API is documented [here](./src/definitions.ts).
