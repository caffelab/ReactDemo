import {Component} from 'react';
import IndexNav from '../Nav/IndexNav';
import IndexItem from '../Item/IndexItem';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            category : '',
            url : "127.0.0.4/api/index/getLists"
        }
    }

    loadCategory(){
        fetch(this.state.url,{
            method:'GET'
        }).then(res=>res.json()).then(data=>{
            this.setState({category:data});
        });
    }
    render(){
        return (
            <div>
                <IndexNav/>
                this.state.category.map(function(cat){
                    <IndexItem>{cat.data}</IndexItem>
                })
            </div>
        );
    }
}

export default Index;