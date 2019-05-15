import { action } from "typesafe-actions";

import { TestActionTypes } from "./types";

const test = (payload: string) => action(TestActionTypes.TEST, payload);

export { test };
