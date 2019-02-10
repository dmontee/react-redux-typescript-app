import { ActionType } from "typesafe-actions";

import { test } from "./actions";

enum TestActionTypes {
    TEST = "@@TestActions/TEST",
};

type TestAction = ActionType<typeof test>;

export {
    TestActionTypes,
    TestAction,
}
