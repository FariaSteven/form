Formulário do usuário

• Definição dos campos obrigatórios

• Campos:
    Text
    Number
    TextArea
    Date
    Radio
    Range
    Checkbox
  
• Endereço:
    Cep
    Google API

• Campos especiais:
    Files upload
    Image upload
    Text with multi-select Ajuda no preenchimento 
    Autopreenchimento
    Placeholder

•Stepper:
    Salvar a cada step. Ou seja, ao voltar um step já preenchido deve ser possível recuperar os dados.

• Segurança
• Acessibilidade
• Formulário de criação
• Formulário de edição
• Abstrair os componentes do formulário para que possa ser possível utilizar o mesmo componente de um formulário de criação e edição. • Tratamento de erros
• Erros do usuário (ausência ou erro no preenchimento das informações)
• Erros nas chamadas

== Etapas do projeto

Etapa 1 - Criação do formulário básico no Front-end utilizando:
Campos de texto, email, senha, TextArea, controle de erros e Stepper. No step 1 deve solicitar apenas algumas informações: nome, email, senha e confirmação de senha, Inclusive deve ter uma regra de negócio para que a senha seja a mesma nós dois campos.

Etapa 2 - Criação do back-end com: GraphQL, Mongoose e MongoDB. Considerando salvar os dados do primeiro step logo após o preenchimento e os dados dos demais passo somente no final.

Etapa 3 - Criação do formulário de edição (usando os mesmos componentes do Front-end)

Etapa 4 - Testes no front-end com Jest e Cypress 

Etapa 5 - Incrementar o formulário, com: possibilidade de recuperar os dados ao voltar para uma etapa anterior do formulário e demais campos não utilizados na etapa 1.

Etapa 6 - Testes no back-end