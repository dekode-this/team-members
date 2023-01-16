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
		id: {
			type: 'number'

		},
		alt: {
			type: 'string',
			source: 'attribute', // this tells it to take it's value from the markup, to take its source from the images attributes
			selector: 'img', // this tells it what element type to target to obtain the alt tag from
			attribute: 'alt', // this tells it which attribute to use in this case the alt attribute of the image
			default: ''
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
			default: ''
		},
		socialLinks: {
			type: 'array',
			default: [
				{ link: 'https://facebook.com', icon: 'facebook' },
				{ link: 'https://instagram.com', icon: 'instagram' },
			],
			source: 'query',
			selector: '.wp-block-blocks-course-team-member-social-links ul li',
			query: {
				icon: {
					source: 'attribute',
					attribute: 'data-icon',
				},
				link: {
					selector: 'a',
					source: 'attribute',
					attribute: 'href',
				},
			}
		},
	},
	edit: Edit, // this is how to use the default function
	save: Save,
});
