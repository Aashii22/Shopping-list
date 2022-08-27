import React, { Component } from 'react'
import ItemList from './ItemList';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state={
            itemName: ""
        };
        this.itemListRef= React.createRef();
    }

    handleItemNameChange = (event) => {
        this.setState({
            itemName: event.target.value
        },() => {
            this.itemListRef.current.filterItems(this.state.itemName);
        });
    }

    handleButtonClick = () => {
        if(this.state.itemName.length>0){
            this.itemListRef.current.addToList(this.state.itemName);
            this.setState({
                itemName: "",
            }, ()=>{
                this.itemListRef.current.filterItems(this.state.itemName);
            })
        }
    }

    handleKeyPress = (event) => {
        if(event.key === "Enter"){
            this.handleButtonClick();
        }
    }
    render() {
        const {itemName} = this.state;
        return (
            <div>
                <div style={{display:"inline-flex"}}>
                    <input 
                    type="text" 
                    value={itemName} 
                    onChange={this.handleItemNameChange}
                    onKeyPress={this.handleKeyPress}
                    style={{height:'2rem', margin:'0.5rem 0rem'}}
                    />
                    <a onClick={this.handleButtonClick} style={{padding:'0rem 0.4rem', height:'2rem', margin:'0rem 0rem'}}>
                        <i class="bi bi-plus-square-fill" style={{fontSize:'2rem'}}/>
                    </a>
                </div>
                
                <ItemList ref={this.itemListRef}/>
            </div>
        );
        
    }
}

export default SearchPanel;