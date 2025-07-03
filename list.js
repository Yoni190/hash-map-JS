export class LinkedList {

    list = []

    append(key, value){

        const node = new Node(key, value, null)

        if(this.list.length > 0){
            this.list.at(-1).nextNode = node
        }

        this.list.push(node)
    }

    prepend(key, value){
        let pointer = null

        if(this.list.length > 0){
            pointer = this.list[0]
        }
        
        const node = new Node(key, value, pointer)
        this.list.unshift(node)
    }

    size(){
        return this.list.length
    }

    head(){
        return this.list[0]
    }

    tail(){
        return this.list.at(-1);
    }

    at(index){
        return this.list[index]
    }

    pop(){
        this.list.pop();
    }

    contains(value){
        for(const node of this.list) {
            if(node.value === value){
                return true
            }
        }
        return false
    }

    find(value){
        for(const node of this.list){
            if(node.value === value){
                return this.list.indexOf(node)
            }
        }
        return null
    }

    findValue(key){
        for(const node of this.list){
            if(node.key === key){
                return this.list.value
            }
        }
        return null
    }

    toString(){
        let string = "";
        for(const node of this.list){
            string += `( ${node.value} ) -> `
        }

        string += " null"
        return string
    }
}

class Node {
    key = null
    value = null
    nextNode = null

    constructor(key, value, nextNode){
        this.key = key
        this.value = value
        this.nextNode = nextNode
    }
}







