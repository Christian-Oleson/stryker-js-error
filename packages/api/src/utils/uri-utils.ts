import { getAsString } from "../utils/string-utils";

export function getUrlFromEnvironment(): string {
    let remoteURL = getAsString(window, "ENV.URL");

    if (!remoteURL) {
        remoteURL = "https://fakeUri.christianoleson.com";
    }

    return remoteURL;
}