function especionaLoginADMIN(login, senha){
    if (login === process.env.LOGIN_ADMIN && senha === process.env.SENHA_ADMIN){
        return true
    } 
}

export default especionaLoginADMIN
