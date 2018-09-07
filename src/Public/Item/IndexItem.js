import React,{Component} from 'react';

class IndexItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:''
        }
    }
    render(){
        let list = this.props.cat.data.map(function(ca){
            <li>
                <a>{ca.name}</a>
            </li>
        });
        return(
             <li>
                <div className="card-name">
                    <img src=""/>
                    {this.state.info}
                </div>
                <ol className="card-kind">
                   {list}
                </ol>
            </li> 
        );
    }
}