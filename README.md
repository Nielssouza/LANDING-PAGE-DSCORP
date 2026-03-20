# Landing Page DS Corp

Projeto em React + Vite para reproduzir a landing page da DS Corp.

## Requisitos

- Node.js instalado
- Terminal aberto na pasta do projeto

## Como rodar o projeto

No PowerShell, execute:

```powershell
npm.cmd install
npm.cmd run dev
```

Depois disso, abra a URL exibida no terminal. Normalmente:

```text
http://localhost:5173/
```

## Gerar build de produção

```powershell
npm.cmd run build
```

## Rodar a versão de produção

Depois de gerar a build, você pode testar o mesmo servidor usado na Heroku:

```powershell
npm.cmd start
```

Por padrão, o projeto sobe em:

```text
http://localhost:5000/
```

## Visualizar a build localmente com Vite

```powershell
npm.cmd run preview
```

## Deploy na Heroku

O projeto foi preparado para deploy com o buildpack `heroku/nodejs`.

Configurações já prontas:

- `start` em `package.json` usando `node server.js`
- `Procfile` com `web: npm start`
- `server.js` servindo a pasta `dist` com fallback para SPA
- `engines.node` fixado em `24.x`

Passo a passo:

```powershell
heroku login
heroku create nome-do-app
git push heroku main
```

Se quiser definir explicitamente o buildpack:

```powershell
heroku buildpacks:set heroku/nodejs
```

Depois do deploy:

```powershell
heroku open
```
