export interface incident{
    name: string,
    id: number,
    priority: number,
    datetime: string,
    locationId: string,
}
export interface location{
    name: string,
    id: string
}
export class incidentViewModel{
    name: string;
    id: number;
    icon: string;
    datetime: string;
    locationName: string;
    description?: string;
}