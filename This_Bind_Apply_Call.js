person.logInfo.bind(lena, 'Frontend', '8-800-555-35-35')();
person.logInfo.call(lena, 'Frontend', '8-800-555-35-35');
person.logInfo.apply(lena, ['Frontend', '8-800-555-35-35']);

/*
bind - привязывает контекст к определенной функции или обьекту .bind(обьектПривязки)
call - работает так ж как bind, но вызывается сразу, в отличие от bind в котором мы сами его вызываем
apply - отличается от call только тем, что параметры передаются в массиве
*/