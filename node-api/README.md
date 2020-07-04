# Instalar imagem via Docker
    * docker pull nomeImagem

# Rodar imagem baixada e setar o nome e port
                // name é o nome/apelido que damos para imagem
    *   docker run --name mongodb -p 27017:27017 -d mongo

# Listar todas as imagens
    docker ps -a

# Listar imagens rodando atual
    docker ps -a

# Rodar imagem
    docker start nomeImagem

* * MONGOOSE
    - é usado para utilizar codigos JS que vai substituir os comandos de banco de dados tipo query de select, update, insert e delete