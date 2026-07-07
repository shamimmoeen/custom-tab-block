import { useBlockProps } from '@wordpress/block-editor';
import Tabs from './tabs';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save( { className: 'custom-tab-block' } ) }>
			<Tabs attributes={ attributes } />
		</div>
	);
}
