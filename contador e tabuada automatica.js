/* eu fiz um repetidor semi automatico, eu usei o While que significa ENQUANTO e coloquei a variavel contador com o valor de menor que o valor escolhido, esse valor escolhido é o tanto 
de vezes que eu quero que seja repetido a minha escrita da linha 15, e coloquei na linh de baixo o contador somando +1 todas as vezes, esse +1 
é para que ele leia ue eu estou acrescentando em cada linha um numero a mais, se na primeira linha era 1, somando +1 a linha de baixo seria 2
e vai indo ate bater o total que eu coloquei na linha de cima, e abri outro console.log com a vriavel 'contador' novamente e fiz a mesma coisa
falando o numero menor que o escolhido, igual na primeira linha do WHILE, e coloquei o console.log de baixo para dizer se é verdadeiro ou falso
o numro escolhido das vaiaveis, se realmente é menor que ou se eu coloquei um numero maior errado.
*/


contador = 0

while (contador < 5)
{
    contador = contador + 1  

    console.log ('Santos Serie B')
    console.log (contador < 5)
    console.log (' contador: ', contador)
    console.log ('')

}

console.log (Boolean (5))

console.log ('')

/*eu fiz um contador de tabuada automatico, usando o "While" que significa ENQUANTO, e coloquei a variavel contador e menor que 100, e comecei
colocando para que a variavel contador vá pulando de 1 em 1, por isso o sinal de + na linha 31, e depois abri o console.log para colocar a 
string da escrita da conta e virgula, e coloquei a variavel que vai contando +1 e depois a virgula  mais uma string com o sinal de igual para o texto
e novmente o contador para fazer vezes a tabuada do 7, por isso o sinal de vezes '*' e depois abri um if e else para colocar o valor do contador 
com procentagem por 2 e igual a 0, que é a conta para saber se é impar ou par, e coloquei o console.log do if para dizer que era par, e o else
para dizer que era impar.
*/

contador = 0

while (contador < 100) 
{
    contador = contador + 1
    console.log ('7 x', contador, '=', contador * 7)
   

    if (contador%2 ==0)
        console.log("Azul")
    
    else console.log("vermelho")

    console.log('')
    }
