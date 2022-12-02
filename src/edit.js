import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const ALLOWED_BLOCKS = [ 'blocks-course/team-member' ]; 
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ [ ALLOWED_BLOCKS ] } />
		</div>
	);
}
