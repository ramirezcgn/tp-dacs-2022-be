/* eslint-disable no-unused-vars */
export default interface ExternalRepository {
  get(id: number): Promise<any>;
  getAll(): Promise<any[]>;
  select(id: number, places: number): Promise<any>;
}
