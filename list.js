export class LinkedList {

    list = []

    append(value){

        const node = new Node(value, null)

        if(this.list.length > 0){
            this.list.at(-1).nextNode = node
        }

        this.list.push(node)
    }

    prepend(value){
        let pointer = null

        if(this.list.length > 0){
            pointer = this.list[0]
        }
        
        const node = new Node(value, pointer)
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
    value = null
    nextNode = null

    constructor(value, nextNode){
        this.value = value
        this.nextNode = nextNode
    }
}







