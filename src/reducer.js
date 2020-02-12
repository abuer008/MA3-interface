import {ON_SUBMIT, USER_NAME, onSubmit, userName} from "./Actions";

const initalState = {
    onSumbit: false,
    userName: ""
};

export const reducer = (previousState = initalState, action) => {
    switch (action.type) {
        case ON_SUBMIT:
            return Object.assign({}, previousState, {
                ON_SUBMIT: onSubmit(action.submit)
            });
        case USER_NAME:
            return Object.assign({}, previousState, {
                USER_NAME: userName(action.name)
            });
        default:
            return previousState;
    }

};

