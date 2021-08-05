
export interface Cinema {
    id: string;
    slug: string;
    name: string;
}

export interface Market {
    id: string;
    slug: string;
    name: string;
    cinemas: Array<Cinema>;
}
