import Logger from 'mini-logger';

let logger = Logger({
	dir: './logs',
	categories: ['http'],
	format: '[{category}.]YYYY-MM-DD[.log]',
	timestamp: true
});

export default logger;