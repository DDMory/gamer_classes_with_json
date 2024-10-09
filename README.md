# Escrevendo as Classes de um Jogo

---

## Contexto

Desafio de implementação de condigo visando aplicar em pratica aquilo que foi estudado a respeito de JSON.

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

<p>
se mago -> no ataque exibir (usou magia).<br>
se guerreiro -> no ataque exibir (usou espada).<br>
se monge -> no ataque exibir (usou artes marciais).<br>
se ninja -> no ataque exibir (usou shuriken).
</p>

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada

---

# Creditos

Creditos ao especialta ***Felipe Agular*** que propos esse desafio e as informações sobre seu comportamento