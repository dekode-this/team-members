import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const ALLOWED_BLOCKS = ['blocks-course/team-member'];
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={[ALLOWED_BLOCKS]}
				template={[
					['blocks-course/team-member',],
					['blocks-course/team-member',],
					['blocks-course/team-member',],
				]} // an arrary of arrays, the second item in this array are attributes
			/>
		</div>
	);
}
