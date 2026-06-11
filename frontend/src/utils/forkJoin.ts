export type AsyncTask<T> = () => Promise<T>;

type TaskMap = Record<string, AsyncTask<any>>;

type ForkJoinResult<T extends TaskMap> = {
    [K in keyof T]: Awaited<ReturnType<T[K]>>;
};

export async function forkJoin<T extends TaskMap>(tasks: T): Promise<ForkJoinResult<T>> {

    const entries = Object.entries(tasks);

    const results = await Promise.all(
        entries.map(([_, task]) => task())
    );

    return Object.fromEntries(
        entries.map(([key], index) => [key, results[index]])
    ) as ForkJoinResult<T>;
}