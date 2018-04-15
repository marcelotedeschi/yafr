import _ from 'lodash';


import { FETCH_NEWS } from '../actions';


export default function(state = null, action){
 
    switch(action.type){
        case FETCH_NEWS:
            //console.log(_.mapKeys(action.payload.data.items, 'title'));
            //return _.mapKeys(action.payload.data.items, 'title');
            console.log(action.payload.items);
            return action.payload.items;

        default:
            return state;
    }
}