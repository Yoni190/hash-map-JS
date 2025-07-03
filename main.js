import { LinkedList } from "./list.js";

class HashMap {
    load_factor = 0.8
    capacity = 16
    bucket = new Array(this.capacity)


    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
        } 

    set(key, value){
        let hashCode = this.hash(key)
        if(this.bucket[hashCode] === undefined){
            const list = new LinkedList()
            list.append(value)
            this.bucket[hashCode] = list
        } else {
            this.bucket[hashCode].append(value)
        }
    }
}

const hash = new HashMap()

hash.set('name', 'yonatan')

console.log(hash.bucket)