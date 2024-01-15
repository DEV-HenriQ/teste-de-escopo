// Problema:

/* function imprimirNivelDeAcesso(usuario)
{
    if (usuario.admin) {
        let nivel = "Admin";
    }
    else {
        let nivel = "User";
    }
    
    console.log(`Nível de acesso: ${nivel}`);
}

imprimirNivelDeAcesso({admin:true}) */

// Resolução:

function imprimirNivelDeAcesso(usuario)
{
    let nivel
    if (usuario.admin) {
        nivel = "Admin";
    }
    else {
        nivel = "User";
    }
    
    console.log(`Nível de acesso: ${nivel}`);
}

imprimirNivelDeAcesso({admin:true})

// Desafio feito no instagram. O problema era o escopo da variavel 'nivel'. Ao declarar dentro dos if/else a variável não poderia ser usada globalmente. Para resolver isso, declaramos ela no escopo onde ela iria ser chamada.