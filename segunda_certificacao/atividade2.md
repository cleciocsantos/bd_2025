# Banco de Dados

## 2ª Certificação

### **Atividade Avaliativa 2 --- 3,0 Pontos --- Grupos de 3 Pessoas**

Seu grupo deve implementar um **sistema web completo** com:

-   Banco de dados
-   Servidor web
-   Front-end

O sistema deve conter **3 tabelas**, sendo que **uma delas com chaves
estrangeiras** para as outras duas.\
Cada tabela deve possuir suas próprias páginas com operações **CRUD**:
inserir, consultar, atualizar e excluir.

Os projetos completos devem ser compactados em uma pasta `.zip`. O
professor recolherá o arquivo ao final da aula, para continuidade e
conclusão em **08/12/2025**.

------------------------------------------------------------------------

## **Opções de Tema**

1.  Sistema Escolar --- *Alunos, Cursos e Matrículas*
2.  Clínica Médica --- *Pacientes, Médicos e Consultas*
3.  Loja de Roupas --- *Clientes, Produtos e Vendas*
4.  Academia --- *Alunos, Planos e Pagamentos*
5.  Transporte Urbano --- *Motoristas, Ônibus e Viagens*
6.  Cinema --- *Filmes, Salas e Sessões*
7.  Restaurante --- *Clientes, Pratos e Pedidos*
8.  Hotel --- *Hóspedes, Quartos e Reservas*
9.  Sistema de Eventos --- *Participantes, Palestras e Inscrições*

------------------------------------------------------------------------

# **Detalhamento dos Temas**

------------------------------------------------------------------------

## **1) Sistema Escolar --- Alunos, Cursos e Matrículas**

### **Tabelas**

-   **Aluno** (id, nome, data_nascimento)
-   **Curso** (id, nome, carga_horaria)
-   **Matricula** (id, id_aluno, id_curso, data_matricula)

### **Consultar**

-   Consulta por **alunos**: mostrar quantidade de matrículas e link
    para lista com cursos, cargas horárias e datas.
-   Consulta por **cursos**: mostrar quantidade de matrículas e link
    para lista com alunos, datas de nascimento e datas.

------------------------------------------------------------------------

## **2) Clínica Médica --- Pacientes, Médicos e Consultas**

### **Tabelas**

-   **Paciente** (id, nome, telefone)
-   **Medico** (id, nome, especialidade)
-   **Consulta** (id, id_paciente, id_medico, data, diagnostico)

### **Consultar**

-   Consulta por **pacientes**: quantidade de consultas e link para
    lista com médicos, especialidades, datas e diagnósticos.
-   Consulta por **médicos**: quantidade de consultas e link para lista
    com pacientes, telefones, datas e diagnósticos.

------------------------------------------------------------------------

## **3) Loja de Roupas --- Clientes, Produtos e Vendas**

### **Tabelas**

-   **Cliente** (id, nome)
-   **Produto** (id, nome, preco)
-   **Venda** (id, id_cliente, id_produto, data, quantidade)

### **Consultar**

-   Consulta por **clientes**: quantidade de compras e link com
    produtos, preços, datas e quantidades.
-   Consulta por **produtos**: quantidade de vendas e link com clientes,
    datas e quantidades.

------------------------------------------------------------------------

## **4) Academia --- Alunos, Planos e Pagamentos**

### **Tabelas**

-   **Aluno** (id, nome)
-   **Plano** (id, nome, valor_mensal)
-   **Pagamento** (id, id_aluno, id_plano, data_pagamento)

### **Consultar**

-   Consulta por **alunos**: quantidade de pagamentos e link com planos,
    valores e datas.
-   Consulta por **planos**: quantidade de pagamentos e link com alunos
    e datas.

------------------------------------------------------------------------

## **5) Transporte Urbano --- Motoristas, Ônibus e Viagens**

### **Tabelas**

-   **Motorista** (id, nome)
-   **Onibus** (id, placa)
-   **Viagem** (id, id_motorista, id_onibus, destino, data)

### **Consultar**

-   Consulta por **motoristas**: quantidade de viagens e link com
    placas, destinos e datas.
-   Consulta por **ônibus**: quantidade de viagens e link com
    motoristas, destinos e datas.

------------------------------------------------------------------------

## **6) Cinema --- Filmes, Salas e Sessões**

### **Tabelas**

-   **Filme** (id, titulo, duracao)
-   **Sala** (id, numero, capacidade)
-   **Sessao** (id, id_filme, id_sala, horario)

### **Consultar**

-   Consulta por **filmes**: quantidade de sessões e link com salas,
    capacidades e horários.
-   Consulta por **salas**: quantidade de sessões e link com filmes,
    durações e horários.

------------------------------------------------------------------------

## **7) Restaurante --- Clientes, Pratos e Pedidos**

### **Tabelas**

-   **Cliente** (id, nome)
-   **Prato** (id, nome, preço)
-   **Pedido** (id, id_cliente, id_prato, quantidade)

### **Consultar**

-   Consulta por **clientes**: quantidade de pedidos e link com pratos,
    preços e quantidades.
-   Consulta por **pratos**: quantidade de pedidos e link com clientes e
    quantidades.

------------------------------------------------------------------------

## **8) Hotel --- Hóspedes, Quartos e Reservas**

### **Tabelas**

-   **Hospede** (id, nome)
-   **Quarto** (id, numero, tipo)
-   **Reserva** (id, id_hospede, id_quarto, data_entrada, data_saida)

### **Consultar**

-   Consulta por **hóspedes**: quantidade de reservas e link com
    quartos, tipos, datas de entrada e saída.
-   Consulta por **quartos**: quantidade de reservas e link com
    hóspedes, datas de entrada e saída.

------------------------------------------------------------------------

## **9) Sistema de Eventos --- Participantes, Palestras e Inscrições**

### **Tabelas**

-   **Participante** (id, nome, email)
-   **Palestra** (id, titulo, palestrante, horario)
-   **Inscricao** (id, id_participante, id_palestra, data_inscricao)

### **Consultar**

-   Consulta por **participantes**: quantidade de inscrições e link com
    títulos das palestras, palestrantes, horários e datas.
-   Consulta por **palestras**: quantidade de inscrições e link com
    participantes, e-mails e datas.
