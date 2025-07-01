class HashMap {
    load_factor = null
    capacity = null

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
        } 
}

const hash = new HashMap()

console.log(hash.hash("rasa"))