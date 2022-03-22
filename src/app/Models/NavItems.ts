export interface Item {
    title: string;
    links: Link[];
    permiso: string[];
}

export interface Link {
    name: string;
    link: string;
}
