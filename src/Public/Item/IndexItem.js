import {Component} from 'react';

class IndexItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:''
        }
    }
    render(){
        return(
            <li>
                <div className="card-name">
                    <img src={}/>
                    {this.state.info}
                </div>
                <ol className="card-kind">
                    <li></li>
                </ol>
            </li>
        );
    }
}