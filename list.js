export class LinkedList {

    constructor(){
        this.head = null
        this.tail = null
    }

    append(key, value){
        if(this.head === null){
            const node = new Node(key, value, null)
            this.head = node
            this.tail = node
        } else {
            const node = new Node(key, value, this.head)
            this.head = node
        }
    }

    prepend(key, value){
        if(this.tail === null){
            const node = new Node(key, value, null)
            this.head = node
            this.tail = node
        } else {
            const node = new Node(key, value, null)
            this.tail.nextNode = node
            this.tail = node
        }
    }

    size(){
        let listSize = 0
        let temp = this.head
        while(temp !== null){
            listSize++
            temp = temp.nextNode
        }
        return listSize
    }

    getHead(){
        return this.head
    }

    tail(){
        return this.tail;
    }

    at(index){
        let t = 0
        let temp = this.head
        while(t !== index){
            temp = temp.nextNode
            t++
        }
        return temp
    }

    pop(){
        let temp = this.head
        if(temp.nextNode === null){
            this.head = null
        } else{
            while(temp.nextNode.nextNode !== null){
                temp = temp.nextNode
            }
            temp.nextNode = null
        }
    }

    contains(value){
        let temp = this.head
        while(temp !== null){
            if(temp.value === value){
                return true
            }
            temp = temp.nextNode
        }
        return false
    }

    containsKey(key){
        let temp = this.head
        while(temp !== null){
            if(temp.key === key){
                return true
            }
            temp = temp.nextNode
        }
        return false
    }

    find(value){
        let temp = this.head
        let index = 0
        while(temp.value !== value){
            index++
            temp = temp.nextNode
        }
        return index
    }

    findValue(key){
        let temp = this.head
        while(temp !== null){
            if(temp.key === key){
                return temp.value
            }
            temp = temp.nextNode
        }
    }

    editValue(key, value){
        let temp = this.head
        while(temp !== null){
            if(temp.key === key){
                temp.value = value
                return true
            }
            temp = temp.nextNode
        }
    }

    removeKey(key){
        let temp = this.head
        while(temp !== null){
            if(this.head.key === key){
                if(this.head.nextNode === null){
                    this.head = null
                    return true
                } else {
                    this.head = this.head.nextNode
                    return true
                }

            } else {
                if(temp.nextNode.key === key){
                    temp.nextNode = temp.nextNode.nextNode
                    return true
                }
            }
            temp = temp.nextNode
        }
    }

    toString(){
        let string = ""
        let temp = this.head
        while(temp !== null){
            string += `( ${temp.value} ) -> `
            temp = temp.nextNode
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







