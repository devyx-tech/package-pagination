import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
export default function pagination(options: IPaginationOptions, repo: Repository<any>, findOptions: FindManyOptions): Promise<Observable<Pagination<any>>>;
//# sourceMappingURL=pagination.d.ts.map