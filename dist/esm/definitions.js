/**
 * If the auth() function throws an exception, the error object
 * contains a .code property which will contain one of these strings,
 * indicating what the error was.
 *
 * See https://developer.apple.com/documentation/localauthentication/laerror
 * for a description of each error code.
 */
export var FaceIDPluginErrorCode;
(function (FaceIDPluginErrorCode) {
    FaceIDPluginErrorCode["appCancel"] = "appCancel";
    FaceIDPluginErrorCode["authenticationFailed"] = "authenticationFailed";
    FaceIDPluginErrorCode["invalidContext"] = "invalidContext";
    FaceIDPluginErrorCode["notInteractive"] = "notInteractive";
    FaceIDPluginErrorCode["passcodeNotSet"] = "passcodeNotSet";
    FaceIDPluginErrorCode["systemCancel"] = "systemCancel";
    FaceIDPluginErrorCode["userCancel"] = "userCancel";
    FaceIDPluginErrorCode["userFallback"] = "userFallback";
    FaceIDPluginErrorCode["biometryLockout"] = "biometryLockout";
    FaceIDPluginErrorCode["biometryNotAvailable"] = "biometryNotAvailable";
    FaceIDPluginErrorCode["biometryNotEnrolled"] = "biometryNotEnrolled";
})(FaceIDPluginErrorCode || (FaceIDPluginErrorCode = {}));
//# sourceMappingURL=definitions.js.map