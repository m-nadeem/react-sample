
export class DataService {    
    private url: any  = process.env.REACT_APP_API_URL;
    public async getData(): Promise<any> {
         return fetch('./clinics.json');
    }
}