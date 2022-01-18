class Custom_lodash{
    merge(object, ...values){
        for (let i = 0; i < values.length; i++){
            for (let j in values[i]){
                if (j in object){
                        this.merge(object[j], values[i][j]);
                }   else   {
                    object[j] = values[i][j];
                }
            }
        }
        return object;
    }

    omit(object, paths){
        let filter = [];
        if(typeof paths === "string"){
            paths=[...paths]
        } 

        for (let e in object ){
            if (!this.includes(paths, e)){
                this.push(e)(filter);
            }
        }
        return this.pick(object, filter);
    }

    omitBy(object, predicate = this.identity){
        let result = {};
        for (let e in object){
            if (!predicate(object[e], e)){
                result[e] = object[e];
            }
        }
        return result;
    }

    pick(object, paths){
        let result = {};
        if (Array.isArray(paths)){
            for (let i = 0; i < paths.length; i++){
                result[paths[i]] = object[paths[i]];
            }
        }
        if (typeof paths === "string"){
            result[paths] = object[paths];
        }
        return result;
    }

    pickBy(object, predicate = this.identity){
        return this.omitBy(object, this.negate(predicate));
    }

    toPairs(object){
        return Object.entries(object);
    }

    chunk(array, size = 1) {
        let result = [];
        for (let i = 0; i < Math.ceil(array.length / size); i++){
            result[i] = [];
            for (let j = 0; j < size; j++) {
                if (i * size + j >= array.length){
                    break;
                }
                result[i][j] = array[i*size + j];
            }
        }
        return result;
    }

    compact(array) {
        let result = [];
        for (let i = 0; i < array.length; i++){
            if (array[i] === undefined||array[i] === null||!array[i]){
                continue;
            }
            this.push(array[i])(result);
        }
        return result;
    }

    drop(array, n = 1) {
        let result = [];
        if (n !== 0){
            for (let i = 0; i < array.length - n; i++){
                this.push(array[i + n])(result);
            }
        } else {
            result = array;
        }
        return result;
    }

    dropWhile(array, predicate = this.identity ) {
        let drop;
        for (let i = 0; i < array.length; i++){
            if (!this.iteratee(predicate)(array[i], i, array)) {
                drop = i;
                break;
            }
        }
        return this.drop(array, drop);
    }

    take(array, n = 1){
        if (array.length > n){
            array.length = n;
        }
        return array;
    }

    filter(collection, predicate = this.identity){
        let result = [];
        for (let i = 0; i < collection.length; i++){
            if (this.iteratee(predicate)(collection[i], i, collection)) {
                this.push(collection[i])(result);
            }
        }
        return result;
    }

    find(collection, predicate = this.identity, fromIndex = 0){
        for (let i = fromIndex; i < collection.length; i++){
            fromIndex = i;
            if (this.iteratee(predicate)(collection[i], i, collection)){
                return collection[i];
            }
        }
    }

    includes(collection, value, fromIndex = 0){
        if (typeof collection === "string"){ 
            return collection.substr(fromIndex).indexOf(value) !== (-1);
        }

        collection = this.drop(collection, fromIndex) 
        let e = Object.keys(collection);
        for (let i = 0; i < e.length; i++){
            if (collection[e[i]]== value){
                return true;
            }
        }
        return false;
    }

    map(collection, iteratee = this.identity) {
        let result = [];
        let e = Object.keys(collection);
        for (let i = 0; i < e.length; i++){
            this.push(this.iteratee(iteratee)(collection[e[i]], e[i], collection))(result);
        }
        return result;
    }

    zip(...arrays){
        let result = [];
        for (let i = 0; i < arrays[0].length; i++){
            result[i] = [];
            for (let j = 0; j < arrays.length; j++){
                this.push(arrays[j][i])(result[i]);
            }
        }
        return result;
    }


    //Helpers
    identity(value) {
        return value;
    }

    negate(func){
        return function() {
            return !func.apply(this, arguments);
        };
    }

    matches(source){
        return (object) => {
            for (let i in source){
                if (object[i] !== source[i]){
                    return false;
                }
            }
            return true;
        };
    }

    matchesProperty(path, srcValue){
        return (object) => {
            if (object[path] !== srcValue){
                return false;
            }
            return true;
        };
    }

    iteratee(func){
        switch (typeof func){
            case "string": {
                return this.property(func);
            }
            case "function": {
                return func;
            }
            case "object": {
                if (Array.isArray(func)){
                    return this.matchesProperty(...func);
                }
                return this.matches(func);
            }
        }
    }

    property(path){
        return (object) => {
            return object[path];
        };
    }

    push(elem){
        return (array) => {
            array[array.length] = elem;
        };
    }
}

let _ = new Custom_lodash;

module.exports = {
    merge:_.merge,
    omit:_.omit,
    omitBy:_.omitBy,
    pick:_.pick,
    pickBy:_.pickBy,
    toPairs:_.toPairs,
    chunk:_.chunk,
    compact:_.compact,
    drop:_.drop,
    dropWhile:_.dropWhile,
    take:_.take,
    filter:_.filter,
    find:_.find,
    includes:_.includes,
    map:_.map,
    zip:_.zip,
    identity:_.identity,
    negate:_.negate,
    matches:_.matches,
    matchesProperty:_.matchesProperty,
    iteratee:_.iteratee,
    property:_.property,
    push:_.push,
};