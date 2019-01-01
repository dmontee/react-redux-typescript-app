import { ActionType } from "typesafe-actions";

export const TEST = "TEST";

export type TestAction = ActionType<typeof test>;

const test = (payload: string) => {
    return{
        type: TEST,
        payload
    };
}
