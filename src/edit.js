// eslint-disable-next-line no-use-before-define
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks allowedBlocks={["core/image"]} />
		</div>
	);
}
