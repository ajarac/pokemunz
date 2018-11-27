import React from 'react';
import { Pager } from 'react-bootstrap';

const Page = ({ prev, next }) => (
	<Pager>
		<Pager.Item previous onClick={prev}>
			&larr; Previous Page
		</Pager.Item>
		<Pager.Item next onClick={next}>
			Next Page &rarr;
		</Pager.Item>
	</Pager>
);

export default Page;
