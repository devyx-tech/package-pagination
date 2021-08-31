import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { Repository, ObjectLiteral } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
export default function pagination<Entity extends ObjectLiteral>(options: IPaginationOptions, repo: Repository<Entity>, findOptions: FindManyOptions): Promise<Observable<Pagination<Entity>>>;
//# sourceMappingURL=pagination.d.ts.map