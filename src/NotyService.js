import Noty from 'noty';
import 'noty/lib/noty.css';

const isClient = typeof window !== 'undefined';
const BASE_OPTIONS = {
	layout: 'bottomRight',
	theme: 'mint',
	timeout: 5000,
	progressBar: true,
	closeWith: ['click'],
}

export default class NotyService {
	constructor(userOptions = {}) {
		this.defaultOptions = {
			...BASE_OPTIONS,
			...userOptions,
		}
	}

	_notify(options) {
		if (!isClient) return null;
		
		const opts = {
			type: 'alert',
			...this.defaultOptions,
			...options,
		}
		return new Noty(opts).show();
	}

	show(text, options = {}) {
		return this._notify({ type: 'alert', text, ...options });
	}

	success(text, options = {}) {
		return this._notify({ type: 'success', text, ...options });
	}

	error(text, options = {}) {
		return this._notify({ type: 'error', text, ...options });
	}

	warning(text, options = {}) {
		return this._notify({ type: 'warning', text, ...options });
	}

	info(text, options = {}) {
		return this._notify({ type: 'info', text, ...options });
	}

	closeAll() {
		if (isClient) Noty.closeAll();
	}
}
