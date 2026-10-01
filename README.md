# aws-study-hub

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

## Como o Kiro foi usado neste projeto

1. **Spec:** comecei com o modo Spec. O Kiro gerou requisitos, design técnico e lista de tarefas, e executei as tarefas com o "Run all tasks". Foi ótimo para organizar, mas consumiu muitos créditos para um site simples.
2. **Recomeço no Vibe:** com um escopo bem menor (uma roleta e duas telas), recriei o projeto no modo Vibe, mais rápido e mais barato.
3. **Ajustes em pedidos pequenos:** layout em duas telas, cores da AWS, animação da roleta e o botão "Verificar resposta" foram feitos um pedido de cada vez no Vibe.
4. **Prompt final:** consolidei tudo em um único prompt que recria o site inteiro: [`prompt-final.md`](prompt-final.md).

## Recursos do Kiro vistos no workshop

| Recurso | O que faz | Usei neste projeto? |
|---|---|---|
| **Vibe Coding** | Implementação rápida de funcionalidades com auxílio de IA | Sim |
| **Spec (Desenvolvimento Orientado a Especificações)** | Planeja e implementa funcionalidades complexas em vários arquivos | Sim |
| **Steering** | Ensina ao Kiro os padrões e convenções do projeto | Não |
| **Direção avançada** | Dá controle mais preciso do comportamento da IA | Não |
| **Agent hooks** | Automatizam fluxos de trabalho repetitivos | Não |
| **MCP (Model Context Protocol)** | Amplia as capacidades do Kiro | Não |
| **Kiro Powers** | Integrações e ferramentas pré-construídas | Não |
| **Kiro CLI** | Fluxos de trabalho na linha de comando | Não |
| **Kiro Web** | Delegação de tarefas para desenvolvimento autônomo no navegador | Não |

## O que aprendi

- **Spec** é ótimo para projetos grandes e estruturados, mas custa mais créditos.
- **Vibe** é melhor para o que é pequeno e direto.
- Pedidos pequenos e específicos funcionam melhor do que um pedido enorme.
- Vale testar no navegador entre um pedido e outro, para descobrir cedo o que não ficou como se queria.

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

## Como rodar localmente

1. Baixe `index.html`, `style.css` e `script.js` na mesma pasta.
2. Abra o `index.html` no Chrome ou no Edge (se necessário, arraste o arquivo para a janela do navegador).

Não precisa instalar nada.

## Próximos passos

- Colocar o site no ar com o GitHub Pages.
- Adicionar mais serviços e certificações.
- Experimentar outros recursos do Kiro, como Steering e Hooks.
- Permitir responder por voz.
- Corrigir a resposta com IA (Amazon Bedrock).

## Aviso

- As explicações dos serviços foram **geradas por IA** e podem conter imprecisões. Confira na [documentação oficial da AWS](https://docs.aws.amazon.com/).
- Este é um projeto de estudo e **não tem vínculo oficial com a AWS**.
