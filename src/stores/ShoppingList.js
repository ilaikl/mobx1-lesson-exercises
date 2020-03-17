import { observable, action } from 'mobx'
import { Item } from './Item'

export class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }

    @action addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }


    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (itemName) => {

        let index = this.list.indexOf(this.list.find(i => i.name === itemName))

        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
}