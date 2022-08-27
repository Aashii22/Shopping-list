import React, { Component } from 'react'

const items= ["Milk", "Coffee", "Oranges", "Bread"];
class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            showItems: items,
        };
    }

    matches = (listItem, searchItem) => {
        if(searchItem.length> listItem.length)
        return false;

        if(listItem.slice(0, searchItem.length).toLocaleLowerCase() === searchItem.toLocaleLowerCase())
        return true;
        else
        return false;
    }

    filterItems = (itemName) => {
        this.setState({
            ...this.state,
            showItems: [],
        }, ()=> {

            for(var i=0;i<items.length;i++){
                if(this.matches(items[i], itemName)){
                    this.state.showItems.push(items[i]);
                    this.setState({
                        ...this.state,
                        showItems: this.state.showItems,
                    });
                }
            }
        });
    }

    isPresent = (itemName) => {
        let res=false;

        items.map(item => {
            if(item.toLocaleLowerCase() === itemName.toLocaleLowerCase())
            res=true;
        });

        return res;
    }

    addToList = (itemName) => {
        if(this.isPresent(itemName))
        return;
        else
        items.push(itemName);

        console.log(items);
    }

    render() {
        const {showItems} = this.state;

        return (
            <div>
                {showItems.map(item=>
                    <div>
                        <hr/>
                        <b>
                            <i>
                            {item}
                            </i>
                        </b>
                    </div>
                    
                )}
            </div>
        );
    }
}

export default ItemList