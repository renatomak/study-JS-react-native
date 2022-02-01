export class SistemaAutenticacao{
    static login(auteticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(auteticavel)){
            return auteticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(auteticavel){
        return "autenticar" in auteticavel && auteticavel.autenticar instanceof Function;
    }
}