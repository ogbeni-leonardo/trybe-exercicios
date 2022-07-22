# EXERCÍCIOS

## EXERCÍCIO 1

Como primeira tarefa, você deve usar o **Redux** para gerenciar o estado do componente `TrafficSignal`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

A função `renderSignal` retorna o **src** da imagem do sinal de trânsito e recebe como parâmetro uma **_string_** que deve vir da **store**.

O componente `TrafficSignal` tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

## EXERCÍCIO 2

Como segunda tarefa, você deve usar o **Redux** para gerenciar o estado do componente `Cars`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

Seu reducer deve ter 3 estados, `redCar`, `blueCar` e `yellowCar` e os 3 devem ser do tipo **_bool_**. Ao clicar no botão _Move_, o estado de seu respectivo carro deve mudar para que o carro ande. Já fizemos todo o CSS para que você se preocupe apenas com a lógica do exercício, ele encontra-se no arquivo **App.css**.

## EXERCÍCIO 3

Como terceira tarefa, você deve juntar seus 2 reducers anteriores em um único reducer, usando o `combineReducers`. Talvez haja uma mudança no estado de seu reduce, então certifique-se que ambos os componentes continuem funcionando após a união.

