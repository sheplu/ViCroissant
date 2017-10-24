import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        const teams = [];
        const history = [];
        const stats = [];
        const items = [
            { id: 1, name: 'Croissant' },
            { id: 2, name: 'Pain au chocolat' },
            { id: 3, name: 'Pain au raisin' },
            { id: 4, name: 'Chausson' }
        ];

        return {users, teams, history, stats, items}
    }

}
