export default interface Repository {
    get(id) ;
    getAll(page, limit);
    create(data);
    update(id, data) ;
    remove(id);

}


