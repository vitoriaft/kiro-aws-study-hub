# AWS Study Hub, feito com o Kiro 🎰

Projeto construído com o **Kiro** durante um workshop de imersão em AWS. É uma roleta que sorteia serviços AWS para quem estuda para as certificações fundamentais.

**🔗 Site no ar:** em breve.

![Tela inicial do AWS Study Hub](docs/imagens/01-tela-inicial.png)

## O que é o AWS Study Hub

Um site simples, em HTML, CSS e JavaScript, com uma roleta que sorteia serviços AWS das certificações:

- **AWS Certified Cloud Practitioner (CLF-C02)**
- **AWS Certified AI Practitioner (AIF-C01)**

Você escolhe a certificação, sorteia um serviço, explica com as suas palavras e confere a resposta.

## Objetivo

Estudar para certificação só lendo e decorando funciona pouco. Saber **explicar** um serviço com as próprias palavras é a melhor forma de descobrir o que você realmente aprendeu. A roleta tira a escolha das suas mãos, então você também estuda os serviços que costuma evitar.

Este repositório tem dois objetivos: ajudar quem estuda e **mostrar o que dá para construir com o Kiro**.

## Como usei o Kiro neste projeto

| Etapa | Recurso do Kiro | O que fiz | Por quê |
|---|---|---|---|
| 1 | **Spec** | Descrevi a ideia e o Kiro gerou os requisitos, o design técnico e a lista de tarefas. | Queria planejar o projeto e guardar os documentos para mostrar o processo. |
| 2 | **Spec** | Ajustei os requisitos e o design para rodar só no navegador, sem serviços AWS, sem Node e sem testes automatizados. | Queria um projeto simples, sem custo e sem instalar nada. |
| 3 | **Spec** | Executei as tarefas com o "Run all tasks". | Para ver o Kiro implementar o plano inteiro. |
| 4 | **Vibe** | Adicionei uma segunda certificação (AI Practitioner) com pedidos pequenos. | Era uma mudança pequena e bem definida. |
| 5 | **Vibe** | Recomecei o projeto do zero, com um escopo bem menor: uma roleta e duas telas. | O primeiro projeto estava grande demais para o que eu queria, e o Spec consumiu muitos créditos. |
| 6 | **Vibe** | Ajustei o layout, as cores da AWS, a animação da roleta e criei o botão "Verificar resposta", um pedido de cada vez. | Pedidos pequenos e específicos funcionam melhor e gastam menos créditos. |

O prompt final, que recria o site inteiro, está em [`prompt-final.md`](prompt-final.md).

## Como funciona o site

1. Escolha a certificação.
2. Clique em **Sortear** e veja a roleta passar pelos serviços até parar em um.
3. Explique o serviço com as suas palavras: o que é, para que serve e quando usar.
4. Clique em **Verificar resposta** para conferir a explicação.

| Escolha da certificação | Sorteio |
|---|---|
| ![Tela inicial](docs/imagens/01-tela-inicial.png) | ![Tela do sorteio](docs/imagens/02-tela-sorteio.png) |

| Roleta girando | Serviço sorteado |
|---|---|
| ![Roleta girando](docs/imagens/03-roleta-girando.png) | ![Serviço sorteado](docs/imagens/04-servico-sorteado.png) |

| Verificar resposta | No celular |
|---|---|
| ![Verificar resposta](docs/imagens/05-verificar-resposta.png) | ![Versão para celular](docs/imagens/06-celular.png) |

## Próximos passos

- Colocar o site no ar com o GitHub Pages.
- Adicionar mais serviços e certificações.
- Explorar outros recursos do Kiro vistos no workshop.
- Permitir responder por voz.
- Corrigir a resposta com IA (Amazon Bedrock).

📝 Conceitos e aprendizados em: [`notas.md`](notas.md).
