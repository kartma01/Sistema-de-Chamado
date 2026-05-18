function especionaLoginUser(login, senha){
    if (login === process.env.LOGIN_USER && senha === process.env.SENHA_USER){
        return true
    }
}

export default especionaLoginUser
