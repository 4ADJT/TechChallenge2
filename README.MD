# Rotina de execução do pacote completo

Este documento descreve como executar toda a rotina do EZBlue.

## Atualização dos submódulos

Após o repositório principal, será necessário trazer os módulos presentes no pacote para executar a aplicação distribuída com o módulo EUREKA.

 - "***git submodule status***" - Possibilita checar o status atual de todos os submódulos, além de suas branchs definidas.

 - "***git submodule update --init --recursive --remote***" - Faz a obtenção de todos os arquivos dos submódulos para execução do pacote completo.

## Execução

O procedimento de execução é executado 100% com Docker Compose, então basta executar o comando
"**docker-compose up -d**", e isso irá carregar os dois bancos de dados (MongoDB e PostgresSQL), além dos submódulos da aplicação.

### Acesso das rotas

Todas as rotas estão acessíveis pela porta padrão 8080.

 - Cada módulo possui sua porta independete, porém todos percorrem o gateway da aplicação que converge o acesso em uma única porta (a já citada 8080).
 - Vide a caracteristica de cada módulo para identificar as rotas disponíveis.

# Outras considerações da rotina de execução

É possível alterar o arquivo submodule manualemnte por branch ou commit:

* Selecionando a Branch/commit: **git submodule set-branch -b [[branch]] [[Repo]]**
* Sincronizando os módulos: **git submodule sync**
* Aplicando o update recursivo em todos os módulos: **git submodule update --recursive --remote**
