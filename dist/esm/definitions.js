/** The values returned by isAvailable() */
export var FaceIdPluginBiometryType;
(function (FaceIdPluginBiometryType) {
    FaceIdPluginBiometryType["none"] = "None";
    FaceIdPluginBiometryType["touchID"] = "Touch ID";
    FaceIdPluginBiometryType["faceID"] = "Face ID";
})(FaceIdPluginBiometryType || (FaceIdPluginBiometryType = {}));
/**
 * If the auth() function throws an exception, the error object
 * contains a .code property which will contain one of these strings,
 * indicating what the error was.
 *
 * See https://developer.apple.com/documentation/localauthentication/laerror
 * for a description of each error code.
 */
export var FaceIdPluginErrorCode;
(function (FaceIdPluginErrorCode) {
    FaceIdPluginErrorCode["appCancel"] = "appCancel";
    FaceIdPluginErrorCode["authenticationFailed"] = "authenticationFailed";
    FaceIdPluginErrorCode["invalidContext"] = "invalidContext";
    FaceIdPluginErrorCode["notInteractive"] = "notInteractive";
    FaceIdPluginErrorCode["passcodeNotSet"] = "passcodeNotSet";
    FaceIdPluginErrorCode["systemCancel"] = "systemCancel";
    FaceIdPluginErrorCode["userCancel"] = "userCancel";
    FaceIdPluginErrorCode["userFallback"] = "userFallback";
    FaceIdPluginErrorCode["biometryLockout"] = "biometryLockout";
    FaceIdPluginErrorCode["biometryNotAvailable"] = "biometryNotAvailable";
    FaceIdPluginErrorCode["biometryNotEnrolled"] = "biometryNotEnrolled";
})(FaceIdPluginErrorCode || (FaceIdPluginErrorCode = {}));
//# sourceMappingURL=definitions.js.map