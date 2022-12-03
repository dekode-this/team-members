import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit'; // this is how to import default fucntions from files in our project
import Save from './save';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'), // includes a translation function, inside is the block title followed by the plugins text-domain
	description: __('A team member item', 'team-members'), // translation function, description, text-domain
	icon: 'admin-users', // dashicon
	parent: ['blocks-course/team-members'], // this is the parent blocks registered name that is in the registration of the block in the parents index.js file
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit, // this is how to use the default function
	save: Save,
});