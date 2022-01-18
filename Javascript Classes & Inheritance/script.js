class Builder {
    constructor(value=0) {
      this.storedValue =value
    }

    get(){
        console.log(this.storedValue)
    }

    plus(e){
        this.storedValue +=e;
        return this;
    }
  }

class IntBuilder extends Builder{
    minus(...param){
        param.forEach((e)=>{
            this.storedValue-=e;
        })
        return this;
    }

    multiply(...param){
        param.forEach((e)=>{
            this.storedValue*=e;
        })
        return this;
    }

    divide(...param){
        param.forEach((e)=>{
            this.storedValue/=e;
        })
        return this;
    }

    mod(e){
        this.storedValue%=e;
        return this;
    }
}

function StringBuilder(value='') {
    this.storedValue = value
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus= function(e){
    this.storedValue = this.storedValue.slice(0,-e)
    return this
}

StringBuilder.prototype.multiply= function(e){
    let tmp = this.storedValue
    for(let i = 0; i<e;i++){
        this.storedValue+=` ${tmp}`
    }
    return this
}
StringBuilder.prototype.divide= function(e){
    let k = Math.floor(this.storedValue.length / e)
    this.storedValue = this.storedValue.slice(0,k)
    return this
}

StringBuilder.prototype.remove= function(e){
    if(this.storedValue.includes(e)){
        let arr = this.storedValue.split('')
        arr.splice(arr.indexOf(e[0]),e.length)
        this.storedValue = arr.join('')
    }
    return this
}

StringBuilder.prototype.sub= function(e,n=this.storedValue.length){
    this.storedValue = this.storedValue.substr(e,n)
    return this
}

