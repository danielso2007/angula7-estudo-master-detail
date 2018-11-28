import { Category } from './pages/categories/shared/category.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './pages/entries/shared/entry.model';


export class InMemoryDatabase implements InMemoryDbService {

  createDb(): any {
    let categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamentos de contas de casa'},
      {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
      {id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc.'},
      {id: 4, name: 'Salário', description: 'Recebimento de salário'},
      {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'},
    ];

    let entries: Entry[] = [
      {id: 1, name: 'Gás de Cozinha', description: 'Gás', type: Entry.types.expense, amount: '70,52', date: '14/11/2018', paid: true, categoryId: categories[0].id, category: categories[0]} as Entry,
      {id: 2, name: 'Suplementos', description: 'Suplementos diversos', type: Entry.types.renevue, amount: '85,90', date: '20/11/2018', paid: false, categoryId: categories[1].id, category: categories[1]} as Entry,
      {id: 3, name: 'Salário de empresa XPTO', description: 'Salário da empresa', type: Entry.types.expense, amount: '1758,90', date: '25/11/2018', paid: true, categoryId: categories[2].id, category: categories[2]} as Entry,
    ];

    return { categories, entries };
  }
}
