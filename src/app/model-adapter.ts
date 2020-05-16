export interface ModelAdapter<T> {
    adapt(object: any): T;
}
