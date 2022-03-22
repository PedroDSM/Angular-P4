import { Item } from "src/app/Models/NavItems";

export const LinksNavMenu:Item[] = [
    {
        title:'Formularios',
        permiso: ['ADMIN'],
        links:[
            {
                name:'Formularios Productoras',
                link:'FPR',
            },
            {
                name:'Formularios Idiomas',
                link:'FI',
            },
            {
                name:'Formularios Clasificaciones',
                link:'FC',
            },
            {
                name:'Formularios Categorias',
                link:'FCA',
            },
            {
                name:'Formulario Peliculas',
                link:'FP',
            },
            {
                name:'Formularios Actores',
                link:'FA',
            },
        ]
    },
    {
        title:'Listas',
        permiso: ['ADMIN', 'USER'],
        links:[
            {
                name:'Lista Productoras',
                link:'LPR',
            },
            {
                name:'Lista Idiomas',
                link:'LI',
            },
            {
                name:'Lista Clasificaciones',
                link:'LC',
            },
            {
                name:'Lista Peliculas',
                link:'LP',
            },
            {
                name:'Lista Actores',
                link:'LA',
            },
            {
                name:'Lista Categorias',
                link:'LCA',
            },
        ]
    }
]





