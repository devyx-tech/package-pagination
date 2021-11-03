import { ObjectLiteral, SelectQueryBuilder } from "typeorm";
import { IPaginationOptions, Pagination } from "nestjs-typeorm-paginate";
import { Observable } from "rxjs";
export default function qbPagination<Entity extends ObjectLiteral>(options: IPaginationOptions, qb: SelectQueryBuilder<Entity>): Promise<Observable<Pagination<Entity>>>;
//# sourceMappingURL=qbPagination.d.ts.map