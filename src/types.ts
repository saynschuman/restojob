export interface Vacancy {
    id: number;
    isArchived: boolean;
    title: string;
    textDescription: string;
    isHot: boolean;
    isRecommended: boolean;
    isActive: boolean;
    isStandard: boolean;
    salaryText: string;
    hasTea: boolean;
    hasPercent: boolean;
    addressesList: Address[];
    specialization: Specialization;
    company: Company;
    publishedDate: string;
    params: any[];
    callbackPhone: string;
    number: string;
    link: string;
}

export interface Specialization {
    id: number;
    title: string;
}

export interface Address {
    color: string;
    station: string;
    coord: string;
    address: string;
}

export interface City {
    id: number;
    name: string;
    dnsAlias: string;
    isActivated?: boolean;
}

export interface Region {
    id: number;
    name: string;
}

export interface Company {
    id: number;
    brend: string;
    brendOfMonth: Date;
    logo: string;
    orgname: string;
    city: City;
    textDescription: string;
    photoSet: string[];
    vacancyPublished?: Vacancy[];
    link?: string;
}

export interface Employee {
    name: string;
    vacancy: string;
    salary: string;
    photo: string;
}

export interface Banner {
    href: string;
    img: string;
}