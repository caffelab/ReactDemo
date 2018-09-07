import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import './NavStyle.css';
class IndexNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            srcImg:this.props.srcImg ? this.props.srcImg:''
        }
    }
    onLoadFunc(){
        this.setState({
            srcImg:require('../../static/images/bq.png')
        });
    }

    onErrorFunc(){
        this.setState({
            srcImg:require('../../static/images/bq.png')
        });
    }

    onPerClickFunc(){
        console.log('1');
    }
    render(){
        let props = this.props;
        let {srcImg} = this.state;
        return(
            <div>
                <div className="header">
                    <img src={require('../../static/images/index.png')} className="index"/>
                    <img {...props} src={srcImg} onLoad={this.onLoadFunc.bind(this)} onError={this.onErrorFunc.bind(this)} onClick={this.onPerClickFunc} className="per-icon"/>
                </div>
                <div className="h44"></div>
                <div className="index-banner">
                    <img src={require('../../static/images/index-banner.png')} className="index-banner-img"/>
                </div>
            </div>
        );
    }
}

export default IndexNav;