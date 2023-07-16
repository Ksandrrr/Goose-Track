export const isUserLogin = ({auth}) => auth.isLogin;
export const getAuth = ({auth}) => {
    const {isLogin, loading, token,error } = auth;
    return {isLogin, loading, token,error};
}
export const getUser = ({ auth }) => auth.user;