import { LinkedList } from "./list.js";

class HashMap {
    load_factor = 0.8
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
        if(size > max){
            this.buckets.length = this.buckets.length * 2
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
}

const hash = new HashMap()

hash.set("stone", 'yonatan')
hash.set("sui", 'ronaldo')

hash.remove('sui')

// hash.set('name', 'test')
// hash.set('name', 'suii')
// hash.set('name', 'sdl')
// console.log(hash.get('sui'))

// console.log(hash.has('sui'))
console.log(hash.buckets)
