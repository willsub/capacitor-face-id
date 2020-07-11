// @ts-ignore
import { PluginResultError } from '@capacitor/core'

declare module '@capacitor/core' {
  interface PluginRegistry {
    FaceId: FaceIdPlugin;
  }
}

/** The values returned by isAvailable() */
export enum FaceIdPluginBiometryType {
  none = 'None',
  touchID = 'Touch ID',
  faceID = 'Face ID'
}

export interface FaceIdPluginIsAvailableResult {
  /** Returns available biometry type or 'None' if unavailable */
  value: FaceIdPluginBiometryType;
}

export interface FaceIdPluginAuthOptions {
  /**
   * Localized string to display as the authentication reason.
   * Defaults to "Access requires authentication".
   */
  reason?: string;

  /**
   * The localized title for the fallback button.
   * An empty string removes the button.
   * Omitting this shows the iOS default.
   */
  fallbackTitle?: string;

  /**
   * See https://developer.apple.com/documentation/localauthentication/lacontext/1622329-touchidauthenticationallowablere
   * Defaults to 60.
   */
  touchIDReuseDuration: number;

  /**
   * The localized title for the cancel button in the dialog
   * presented to the user during authentication. Omitting this
   * or passing an empty string displays the iOS default.
   */
  localizedCancelTitle?: string;
}

/**
 * If the auth() function throws an exception, the error object
 * contains a .code property which will contain one of these strings,
 * indicating what the error was.
 *
 * See https://developer.apple.com/documentation/localauthentication/laerror
 * for a description of each error code.
 */
export enum FaceIdPluginErrorCode {
  appCancel = "appCancel",
  authenticationFailed = "authenticationFailed",
  invalidContext = "invalidContext",
  notInteractive = "notInteractive",
  passcodeNotSet = "passcodeNotSet",
  systemCancel = "systemCancel",
  userCancel = "userCancel",
  userFallback = "userFallback",
  biometryLockout = "biometryLockout",
  biometryNotAvailable = "biometryNotAvailable",
  biometryNotEnrolled = "biometryNotEnrolled"
}

export interface FaceIdPluginResultError extends PluginResultError {
  code: FaceIdPluginErrorCode
}

export interface FaceIdPlugin {
  /**
   * Return the type of biometric authorization that is available (if any).
   *
   * @returns {Promise}
   * @resolve {value: FaceIdPluginIsAvailableResult}
   * @rejects PluginResultError
   */
  isAvailable(): Promise<FaceIdPluginIsAvailableResult>;

  /**
   * Prompts the user for biometric authentication.
   *
   * @returns {Promise<void>}
   * @resolve void
   * @rejects FaceIDPluginResultError
   */
  auth(options?: FaceIdPluginAuthOptions): Promise<void>;
}
