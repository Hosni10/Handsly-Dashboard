export interface User {
    fullName: string;
    usernames: string,
    email: string;
    gender: string;
    profilePic: string;
    password?: string;
    passwordConfirm?: string;
}
