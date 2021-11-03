import {ObjectLiteral, SelectQueryBuilder} from "typeorm";
import {IPaginationOptions, Pagination} from "nestjs-typeorm-paginate";
import {from, map, Observable} from "rxjs";

export default async function qbPagination<Entity extends ObjectLiteral>(
    options: IPaginationOptions,
    qb: SelectQueryBuilder<Entity>,
): Promise<Observable<Pagination<Entity>>> {
    return from(qb.getManyAndCount()).pipe(
        map(([registers, totalRegisters]) => {
            function regex(phrase: string, limit: number, position: number) {
                phrase = phrase.replace(/limit=\d+/, `limit=${limit}`);
                return phrase.replace(/page=\d+/, `page=${position}`);
            }

            const lastPage = Math.ceil(totalRegisters / +options.limit);

            const registersPageable: Pagination<any> = {
                items: registers,
                links: {
                    first: regex(options.route, +options.limit, 1),
                    previous:
                        options.page == 1
                            ? options.route
                            : regex(options.route, +options.limit, Number(options.page) - 1),
                    next:
                        options.page >= lastPage
                            ? options.route
                            : regex(options.route, +options.limit, Number(options.page) + 1),
                    last: regex(options.route, +options.limit, lastPage),
                },
                meta: {
                    currentPage: +options.page,
                    itemCount: registers.length,
                    itemsPerPage: +options.limit,
                    totalItems: totalRegisters,
                    totalPages: lastPage,
                },
            };
            return registersPageable;
        }),
    );
}