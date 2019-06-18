class Doctor {
    constructor()
    {
        this.title = document.querySelector("#title");
        this.description = document.getElementById("description");
        this.load = this._loadJsonFile();
        this.load.then(() => this._listenPartOfBody());        
    }

    _loadJsonFile()
    {
        return fetch('./data.json').then(response => {
            return response.json();
            }).then(data => {
            this.data = data.data
            return this.data;
            }).catch(err => {
            
            });
    }

    _listenPartOfBody()
    {     
       this.data.map(val => {
           let part = document.getElementById(val.name);
           part ? part.addEventListener('click', (e) => this._activeOnePartOfBody(part, val)) : null;
       });
    }

    _activeOnePartOfBody(part, val)
    {
        let active = document.getElementsByClassName("active")[0];
        active ? active.classList.remove('active') : null;
        part.classList.add('active');
        this.description.innerHTML = val.description;
        this.title.innerHTML = val.title;
    }
}

export { Doctor as default };
