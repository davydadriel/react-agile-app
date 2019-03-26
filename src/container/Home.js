//Componente de container quer dizer que eu quero utilizar estado dentro do componente.
import React, { Component   } from 'react';

import HomeCard from '../ui/HomeCard';

export default class Home extends Component{
    //Quando extender de Component a unica obrigação é o método render.
    //Esse componente não foi criado como função pois vou manter um estado e outras coisas...

    //função com uma ação.
    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => alert('clicou')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('clicou')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('clicou')
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title}
                        text={this.homeCardReleases.text}
                        action={this.homeCardReleases.action}
                    />
                   { /* forma desconstruida de montar o componente enviando o JSON
                    Este desconstrutor é uma funcionalidade do ES6 para desconstruior os objetos
                    em suas propriedades.*/}
                   <HomeCard {...this.homeCardBacklog} />
                   <HomeCard {...this.homeCardSprints} />
                </div>
            </div> 
        );

    }
}