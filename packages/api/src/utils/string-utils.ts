import { get, toString } from "lodash";

export const getAsString = (object: any, path: string) => toString(get(object, path));