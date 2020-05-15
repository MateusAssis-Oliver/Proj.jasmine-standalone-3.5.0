//Algoritmo de Euclides MDC usando a recursividade

function mdcRecursive( a, b ) {

    //Se caso o segundo numro for 0 retorna o primiro numero 
    if ( b == 0 ) {

        return a;
    }
    //retorna o primeiro numero junto com  resto da divisão entre o primeiro e so segundo numero 
    return mdcRecursive( b, a % b );
}