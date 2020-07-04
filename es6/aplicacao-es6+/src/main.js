import api from './api';

class App {

    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');

        this.form();
    }

    form(){
        this.formEl.onsubmit = (event) => this.adicionar(event);
    }

    setLoading( loading = true ) {
        if(loading == true ) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }


    async adicionar(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.lenght === 0 ) {
            return;
        }

        this.setLoading();
    
    try {
        const response = await api.get(`/repos/${repoInput}`);
            
        // const { name, description, html_url, owner: { avatar_url } }

        this.repositories.push({
            name: name,
            description: description ,
            titulo: '',
            url_avatar: avatar_url ,
            link_btn: html_url
        });

        console.log(this.repositories);

        this.inputEl.value = '';
        
        this.render();

    } catch(error) {
        alert('Repositório não existe!');
    }
        // temos que deixar como false, para ele sumir depois de aparecer
        this.setLoading( false );
    }

    // Método Renderizar
    render(){

        this.listEl.innerHTML = '';

        this.repositories.forEach( repo => {

            
            let liEl = document.createElement('li');
            
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.url_avatar );

            let titleEl = document.createElement('h1');
            titleEl.appendChild(document.createTextNode(repo.titulo));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repo.link_btn);
            linkEl.appendChild(document.createTextNode('Acessar'));
            
            liEl.appendChild(imgEl);
            liEl.appendChild(titleEl);
            liEl.appendChild(descEl);
            liEl.appendChild(linkEl);

            this.listEl.appendChild(liEl);

        });

    }


}

const meuApp = new App();