//import { Sequelize } from 'sequelize/types';
//import Post from '../models/Post';
import Repository from './Repository';
import { Model } from 'sequelize';

export default class PostRepository<T extends Model> implements Repository {
    model: T;

    constructor(model: T) {
        this.model = model; 
    }

    get(id) {
        return this.model.findOne(
            { where: { id } 
        });
    }

    getAll(page, limit) {
        return this.model.findAll();
    }    
    
    create(data) {
        return this.model.create( data );
    }    
    
    update(id, data) {
        return this.model.update(data, {
            where: {
                id,
            }
          });
    }    
    
    remove(id) {
        this.model.destroy({
          where: {
            id,
          }
        });
    }    

}