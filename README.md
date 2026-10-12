# Portomonte: Reconstrução

Jogo de estratégia original no universo Carcaça, desenvolvido como **PWA mobile-first**. Campanha de 30 dias, mapa interativo, construção, produção, intrigas, acontecimentos com escolhas e batalhas contra incursões. Interface e textos em português.

## Publicar pelo GitHub Pages

1. Crie um repositório público no GitHub ou abra o repositório existente.
2. **Descompacte o ZIP**. Envie `index.html`, `sw.js`, `manifest.webmanifest` e a pasta `icons/`, todos na **raiz** do repositório (o `index.html` não deve ficar dentro de uma pasta extra).
3. Vá a **Settings → Pages → Build and deployment**. Escolha **Deploy from a branch**, branch `main`, pasta `/(root)`, e salve.
4. Espere o deploy terminar. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
5. Com internet, **aguarde o indicador “PRONTO PARA JOGAR SEM INTERNET”** na tela inicial.
6. Android/Chrome: `⋮ → Instalar app` (ou `Adicionar à tela inicial`). iPhone/Safari: `Compartilhar → Adicionar à Tela de Início → Abrir como App Web`.
7. Abra o ícone instalado, depois desligue a internet para testar. Os recursos essenciais são mantidos no cache do aplicativo.

## Como jogar

- O objetivo é reconstruir a cidade e **sobreviver a 30 dias**, resolvendo conflitos políticos e enfrentando ataques dos invasores.
- São **duas ordens por dia** para construir, retirar entulhos, votar políticas ou terminar projetos especiais. Mudar trabalhadores de função não consome ordem.
- Edifícios produtivos só funcionam com trabalhadores. Os habitantes consomem alimentos ao final de cada dia.
- Ataques chegam nos dias **5, 10, 15, 20, 25 e 30**. A força inimiga depende do perigo, corrupção, dia e dificuldade. Defesas, guardas e obras especiais protegem a população.
- O jogo tem **três níveis de dificuldade, dezenas de decisões narrativas, seis grandes projetos e finais diferentes**.

## Salvamento

Salva automaticamente por `localStorage`. Em **Crônicas**, clique em **Exportar Save** para obter uma cópia JSON e **Importar Save** para restaurá-la. O progresso local pode ser apagado caso o navegador limpe os dados do site ou o app seja desinstalado.

## Arquitetura

Jogo completo em **`index.html`**, sem CDN, servidor, login, biblioteca ou internet durante a partida. O `sw.js` armazena recursos essenciais em cache para abrir offline. O manifesto descreve a instalação, e `icons/` contém os ícones locais. O Service Worker exige contexto seguro, como GitHub Pages (HTTPS), não opera com abertura direta via `file://`.

## Atualizações

Ao publicar uma nova versão, aumente o identificador `CACHE_NAME` dentro de `sw.js` (por exemplo `portomonte-pwa-v2`) e ajuste o nome do cache na função `setupOffline()` do HTML para refletir o novo identificador. Assim, o cache antigo é substituído.
