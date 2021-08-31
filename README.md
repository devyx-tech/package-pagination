
## Description

Custom pagination

## Installation

```bash
$ npm install nestjs-pagination-devyx --save
```

## Function
```bash
import { pagination } from 'jpmelo-package-pagination';

pagination(options: IPaginationOptions, repo: Repository<Entity>, findOptions: FindManyOptions): Promise<Observable<Pagination<Entity>>>;
```

## Example
```bash
import { pagination } from 'jpmelo-package-pagination';

export class CatRepository {
  constructor(
    @InjectRepository(Cat) private catsRepository: Repository<Cat>,
  ) {}

    interface ICatWhere {
      name?: FindOperator<any>;
    }

    async findAll(options: IPaginationOptions,where: ICatWhere): Promise<Observable<Pagination<Cat>>> {
        return pagination(options, this.catsRepository, {
          skip: (+options.page - 1) * +options.limit,
          take: +options.limit,
          order: { created_at: 'DESC' },
          relations: [],
          where: where,
        });
      }

}
```

## Return example
```bash
{
    "items": [
        {
            "id": 1,
            "name": "Cat 1"
        },
        {
            "id": 2,
            "name": "Cat 2"
        }
    ],
    "links": {
        "first": "localhost:3333/cats?&page=1&limit=5",
        "previous": "localhost:3333/cats?&page=1&limit=5",
        "next": "localhost:3333/cats?&page=1&limit=5",
        "last": "localhost:3333/cats?&page=0&limit=5"
    },
    "meta": {
        "currentPage": 1,
        "itemCount": 2,
        "itemsPerPage": 5,
        "totalItems": 2,
        "totalPages": 1
    }
}
```