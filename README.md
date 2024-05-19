# Redux 
> Source from [Ulbi TV](https://youtu.be/5Qtqzeh5FeM?si=iyEA6glbe6qta3h0)

## General
> Redux – это библиотека для работы с состоянием приложения (хранилище данных).

Часто случаются ситуации, когда состояние компонента из одной ветки, может потребоваться в компоненте другой ветки.  
Можно, конечно вынести состояние в родительский компонент, и потом передавать через пропсы, однако в больших проектах это сильно 
запутывает и усложняет код.

`Redux` справляется с этой проблемой:  
- состояние выносится во внешнюю зависимость, и
- каждый компонент получает какие-то данные уже из этого "глобального" состояния

Считается хорошей практикой хранить данные и логику, которая с ними взаимодействует, отдельно от компонента.

## How does it work?
Смоделируем такую ситуацию:
- есть Банк и в нём хранятся какие-то деньги. В **Redux** это Банк называется `State`.


- в Банк можно положить деньги, или их снять. И такие действия в **Redux** называются `Actions`. Они определяют то, как мы изменяем 
  данные.


- однако нельзя просто так прийти в Банк, открыть ячейку и забрать или положить деньги, но можно попросить работника банка сделать это 
  для нас. Такой работник в **Redux** называется `Dispatch` (_диспетчер_). Прежде, чем как-то изменить состояние, а именно снять или 
  положить деньги, мы должны обратиться к нему и передать `Action`.


- но это всего лишь _диспетчер_, и он тоже не может просто открыть ячейку и выполнить для нас задание (action). Он должен обратиться к 
  какой-то логике. Для этого существует система, хранящая логику этого действия. И эта система называется `Reducer`.  
`Reducer` знает все возможные `actions`, и у него определена логика этих `actions`. В нашем случае, `Reducer` знает, что деньги нужно 
  либо _снять_, либо _зачислить_ на счёт, и уже только он напрямую изменяет `State` (состояние). 


