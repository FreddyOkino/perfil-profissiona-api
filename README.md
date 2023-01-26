# Perfil Profissional

Projeto perfil profissional, implementado no módulo 2 do curso fábrica de programado em High Tech Cursos.

Este projeto implementa uma **API** em **NodeJS**, utilizando ***Express*** como gerenciador de requisições **HTTP**, banco de dados não relacional **MongoDB** e o framework ODM **Mongoose** para intermediar a comunicação entre a aplicação e o banco de dados.

O projeto trata-se de uma aplicação de gerenciamento de perfis profissionais e conexões entre eles. Portanto é possível cadastrar perfis, conectar perfis e a comunicação entre perfis por meio de notificações.

Este documento tem por objetivo detalhar os elementos no projeto do Perfil Profissional, incluindo dependências, *scripts* de execução, definição de entidades e *endpoints*.

----
## Entidades
---
- Perfil
- Notificacao

## Perfil

Atributo | Tipo
-------- | ------
nome | String*
dataNascimento | Date*
disponibilidadeMudanca | Boolean*
disponibilidadeHorario | Enum< Meio Periodo, Integral >*
skills | Array< String* >
educacao | Array< educacao* >
certificacoes | Array< Certificacao >
experiencias | Array< Experiencia >
usuario | Usuario*
conexoes | Array< Perfil >

## Notificacao
Atributo | Tipo
---- | ----
tipo | Enum [ "Contato", "Solicitação de amizadade" ]*
titulo | String*
descricao | String
lida | Boolean*
remetente | Perfil*
destinatario | Perfil*

> Entidades marcadas com asterisco são entidades obrigatórias. As definições das mesmas estão abaixo.

## Entidades Internas

### Educacao

Atributo | Tipo
---- | ----
instituições | String
ingresso | Date
conclusao | Date
nivelEscolaridade | Enum [ "Ensino Fundamental", "Ensino Médio", "Ensino Superior", "Pós-Graduação", "mestrado", "Doutorado" ]
completo | Boolean

### Certificacao

Atributo | Tipo
---- | ----
instituições | String
titulo | String
cargaHoraria | Number

### Experiencia

Atributo | Tipo
---- | ----
instituições | String
ingresso | Date
conclusao | Date

### Usuario

Atributo | Tipo
---- | ----
email | String
senha | String

# Endpoints

## Perfil
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/perfil | GET | Não | Últimos 5 perfis autenticados | Lista de Perfis JS
/perfil/:id | GET | Não | Buscara um perfil por ID | Perfil JSON
/perfil | POST | Não | Cadastrar um perfil | Perfil JSON
/perfil/:id | PUT | Sim | Editar um perfil | Perfil JSON
/perfil/conexao | POST | Sim | conecta dois perfis (Conexão/Amizade) | Mensagem JSON

## Login
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/login | POST | Não | Efetuar autenticação do usuário | Token, Email e Perfil

## Notificação
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/notificacao/:id  | GET | Sim | Buscar uma notificação por ID | Notificação JSON
/notificacao/perfil/:id | GET | Sim | Buscar todas as notiicações do perfil por ID | Lista de notificações JSON
/notificacao | POST | Sim | Cadastrar uma nova notificação | Notificação JSON
/notificacao/lida/:id | PUT | Sim | Muda o *status* da notificação para "lida" | Notificação JSON