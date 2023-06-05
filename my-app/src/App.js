import logo from './logo.svg';
import './App.css';

export const App = () => {
	return document.createElement(
		'div',
		{ className: 'App' },
		document.createElement(
			'header',
			{ className: 'App-header' },
			document.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			document.createElement(
				'p',
				null,
				'Edit ',
				document.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			document.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			document.createElement('span', { id: 'spanDate' }),
		),
	);
};

const year = new Date(); //декларативный
document.getElementById('spanDate').innerHTML = year.getFullYear(); //императивный
