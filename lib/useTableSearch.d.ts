declare type optionsType = {
    defaultPageSize: number;
};
export default function useTableSearch<T>(service: () => Promise<T>, options: optionsType): {
    onSearch: (values: any) => void;
    pagination: {
        [key: string]: any;
        current: number;
        pageSize: number;
        total: number;
        totalPage: number;
        onChange: (current: number, pageSize: number) => void;
        changeCurrent: (current: number) => void;
        changePageSize: (pageSize: number) => void;
    };
    tableProps: {
        [key: string]: any;
        dataSource: any[];
        loading: boolean;
        onChange: (pagination: import("@ahooksjs/use-request/lib/antdTypes").PaginationConfig, filters?: any, sorter?: any) => void;
        pagination: import("@ahooksjs/use-request/lib/antdTypes").PaginationConfig;
    };
    sorter?: any;
    filters?: any;
    reset: () => void;
    fetches: {
        [x: string]: import("@ahooksjs/use-request/lib/types").FetchResult<import("@ahooksjs/use-request/lib/types").PaginatedFormatReturn<any>, import("@ahooksjs/use-request/lib/types").PaginatedParams>;
    };
    loading: boolean;
    data: import("@ahooksjs/use-request/lib/types").PaginatedFormatReturn<any> | undefined;
    error: Error | undefined;
    params: import("@ahooksjs/use-request/lib/types").PaginatedParams;
    cancel: import("@ahooksjs/use-request/lib/types").noop;
    refresh: () => Promise<import("@ahooksjs/use-request/lib/types").PaginatedFormatReturn<any>>;
    mutate: import("@ahooksjs/use-request/lib/types").Mutate<import("@ahooksjs/use-request/lib/types").PaginatedFormatReturn<any>>;
    run: (args_0: {
        current: number;
        pageSize: number;
        sorter?: any;
        filters?: any;
    }, ...args_1: any[]) => Promise<import("@ahooksjs/use-request/lib/types").PaginatedFormatReturn<any>>;
    unmount: () => void;
};
export {};
