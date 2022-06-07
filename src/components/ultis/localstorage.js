export function checkToken() {
    const Token = JSON.parse(localStorage.getItem('isLogin'))
    if(Token) {
        return true
    }
    return false
}