import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../style/food.scss";
class FoodUI extends Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		return (
			<div id="food">
			<div className="header">
			<i className="iconfont">&#xe678;</i>
			<span><i className="iconfont">&#xea76;</i></span>
			<input type="text" placeholder="请输入您想找的优惠" className="text"/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
			axios.get("/index.php?act=index&op=index&ajax=1")
			.then((res)=>{
				dispatch({
					type: "SINGLE_GET_DATA",
					payload: res.data
				})
			})
		}
	}
}

const Food = connect(mapStateToProps, mapDispatchToProps)(FoodUI);

export default Food;