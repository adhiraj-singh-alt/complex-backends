/* eslint-disable */
export default async () => {
    const t = {
        ["./common/enums/index"]: await import("./common/enums/index")
    };
    return { "@nestjs/swagger": { "models": [[import("./common/dto/base.entity"), { "BaseEntity": { uuid: { required: true, type: () => String, format: "uuid" }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./common/dto/query-filters.dto"), { "FiltersDto": { page: { required: false, type: () => Number, default: 0 }, limit: { required: false, type: () => Number, default: 10 }, name: { required: false, type: () => String }, sort: { required: false, enum: t["./common/enums/index"].SortOrder } } }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }]] } };
};