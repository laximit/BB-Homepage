import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GithubIcon from '../assets/icons/github.svg';

function Bookmarks() {
	return(
		<div>
			<BookmarkItem/>
		</div>
	)
}

function BookmarkItem() {
	return (
		<div>
			<img src={GithubIcon}/>
		</div>
	)
}

export default Bookmarks;
