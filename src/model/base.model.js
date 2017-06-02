// ajax base
import axios from 'axios';

export default class BaseModel {
	constructor(props) {
		this.method = 'get';
		this.timeout = 3000;	
		this.params = {};
		this.host = 'https://api.douban.com/v2/';
		this.url = '';
	}
	set(params) {
		this.params = Object.assign({}, this.params, params);
	}
	async go(cb) {
		this.url = this.host + this.path;
		let params;
		if (this.method == 'get') {
			params = this.jsonToStr();
			this.url += `?${params}`;
			try {
				let res = await axios({
										method: this.method,
										timeout: this.timeout,
										url: this.url
									});
				cb(res.data);
			} catch(e) {
				cb(e);
			}
		}
	}
	jsonToStr() {
		let strArr = [];
		for (let i in this.params) {
			strArr.push(`${i}=${this.params[i]}`);
		}
		return strArr.join('&');
	}
}