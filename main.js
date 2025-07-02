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
        this.bucket[hashCode] 
    }
}

const hash = new HashMap()
const list = new LinkedList()
list.append(5)
console.log(list.toString())
console.log(hash.hash("sita"))