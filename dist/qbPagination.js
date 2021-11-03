"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
async function qbPagination(options, qb) {
    return (0, rxjs_1.from)(qb.getManyAndCount()).pipe((0, rxjs_1.map)(([registers, totalRegisters]) => {
        function regex(phrase, limit, position) {
            phrase = phrase.replace(/limit=\d+/, `limit=${limit}`);
            return phrase.replace(/page=\d+/, `page=${position}`);
        }
        const lastPage = Math.ceil(totalRegisters / +options.limit);
        const registersPageable = {
            items: registers,
            links: {
                first: regex(options.route, +options.limit, 1),
                previous: options.page == 1
                    ? options.route
                    : regex(options.route, +options.limit, Number(options.page) - 1),
                next: options.page >= lastPage
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
    }));
}
exports.default = qbPagination;
//# sourceMappingURL=qbPagination.js.map