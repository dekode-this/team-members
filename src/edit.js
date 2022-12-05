import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const ALLOWED_BLOCKS = ['blocks-course/team-member'];
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={[ALLOWED_BLOCKS]}
				template={[
					[
						'blocks-course/team-member',
						{
							name: 'Name 1',
							bio: 'Bio 1',
						},
					],
					[
						'blocks-course/team-member',
						{
							name: 'Name 2',
							bio: 'Bio 2',
						},
					],
				]} // an arrary of arrays, the second item in this array are attributes
			/>
		</div>
	);
}
