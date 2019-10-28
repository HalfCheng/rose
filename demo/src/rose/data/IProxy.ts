namespace rose {
	/**
	 * 数据代理接口
	 */
    export interface IProxy<T> {

        setData(data: T): IProxy<T>;

        getData(): T;

        setValue<K extends keyof T>(key: K, value: T[K]): void;

        getValue<K extends keyof T>(key: K): T[K];

        register(selector: (data: T) => void, ctx: any): void;

        unregister(selector: (data: T) => void, ctx: any): void;
        
        registerByKey<K extends keyof T>(key: K, selector: (value: T[K]) => void, ctx: any): void;

        unregisterByKey<K extends keyof T>(key: K, selector: (value: T[K]) => void, ctx: any): void;

        unregisterAll(): void;
    }
}