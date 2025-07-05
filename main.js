import { LinkedList } from "./list.js";

class HashMap {
    load_factor = 0.75
    capacity = 16
    buckets = new Array(this.capacity)


    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
        } 

    set(key, value){
        //Check if expansion of bucket is needed
        const max = this.load_factor * this.capacity
        let size = 0
        this.buckets.forEach((bucket)=>{
            if(bucket !== undefined){
                size += bucket.size()
            }
        })
        if(size >= max){
            this.buckets.length = this.buckets.length * 2
            this.capacity = this.buckets.length
        }
        const hashCode = this.hash(key)
        //If no list in the bucket
        if(this.buckets[hashCode] === undefined){
            const list = new LinkedList()
            list.append(key, value)
            this.buckets[hashCode] = list
        } else {
            if(this.buckets[hashCode].containsKey(key)){
                this.buckets[hashCode].editValue(key, value)
            } else {
                this.buckets[hashCode].append(key, value)
            }
        }
    }

    get(key){
        const hashCode = this.hash(key)
        if(this.buckets[hashCode] !== undefined){
            return this.buckets[hashCode].findValue(key)
        } 
        return null
    }

    has(key){
        const hashCode = this.hash(key)
        if(this.buckets[hashCode] !== undefined){
            return this.buckets[hashCode].containsKey(key)
        } 
        return false
    }
    
    remove(key){
        const hashCode = this.hash(key)
        this.buckets[hashCode].removeKey(key)
    }

    length(){
        let count = 0
        for(const bucket of this.buckets){
            if(bucket !== undefined){
                count += bucket.size()
            }
        }
        return count
    }

    clear(){
        this.buckets = new Array(this.capacity)
    }

    keys(){
        let keysArray = []
        this.buckets.forEach((bucket)=>{
            if(bucket !== undefined){
                keysArray.push(bucket.getKeys())
            }
        })
        return keysArray.flat()
    }

    values(){
        let valuesArray = []
        this.buckets.forEach((bucket)=>{
            if(bucket !== undefined){
                valuesArray.push(bucket.getValues())
            }
        })
        return valuesArray.flat()
    }

    entries(){
        const keys = this.keys()
        const values = this.values()
        const pair = []
        for(let i = 0; i < keys.length; i++){
            pair.push([keys[i], values[i]])
        }
        return pair
    }
}

const test = new HashMap()
 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

  test.set('jacket', 'csd')
 test.set('kite', 'wefc')
 test.set('lion', 'sdf32')


 console.log(test.length())
 //Not expanding
  test.set('moon', 'silver')


 console.log(test.length())

 console.log(test.buckets)