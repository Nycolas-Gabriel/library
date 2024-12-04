# Usar uma imagem oficial do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos do front-end para o diretório onde o Nginx serve os arquivos
COPY ./ /usr/share/nginx/html/

# Expor a porta 80 para acesso ao front-end
EXPOSE 80
