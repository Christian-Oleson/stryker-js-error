import { getUrlFromEnvironment } from "../utils/uri-utils";
import setWindow from "./test-utils/setWindow";

describe("getUrlFromEnvironment", () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it.each([
    [ "", "https://fakeUri.christianoleson.com" ],
    [ "https://christianoleson.com/Blog", "https://christianoleson.com/Blog", ],
  ])
  ("should return something in window.", (uriValue: string, expectedUriValue: string) => {
    // Arrange
    if (uriValue.length > 0) {
      setWindow("ENV", uriValue)
    }

    // Act
    const url = getUrlFromEnvironment();

    // Assert
    expect(url).toBe(expectedUriValue);
  });
});