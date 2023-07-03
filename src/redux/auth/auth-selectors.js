export const isUserLogin = ({auth}) => auth.isLogin;
export const getAuth = ({auth}) => {
    const {isLogin, loading, token } = auth;
    return {isLogin, loading, token};
}
export const getUser = ({ auth }) => auth.user;