// export const isUserLogin = ({auth}) => auth.isLogin;
export const getTask = ({tasks}) => {
    const {items,loading } = tasks;
    return {items,loading};
}
// export const getUser = ({ auth }) => auth.user;