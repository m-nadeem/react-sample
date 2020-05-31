
export class DataService {    
    private url: any  = process.env.REACT_APP_API_URL;
    public async getData(): Promise<any> {
         return fetch('https://staging-core.api.drdropin.no/v1/clinics');
    }
}