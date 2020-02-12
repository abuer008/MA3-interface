export const ON_SUBMIT = 'on-submit';
export const USER_NAME = 'user-name';

export const onSubmit = submit => {
    return {type: ON_SUBMIT, submit}
};
export const userName = name => {
    return {type: USER_NAME, name}
};