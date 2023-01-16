import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function Save({ attributes }) {
    const { name, bio, url, alt, id, socialLinks } = attributes;
    return (
        <div {...useBlockProps.save()}>
            {url && (
                <img
                    src={url}
                    alt={alt}
                    className={id ? `wp-image-${id}` : null}
                />
            )}
            {name && <RichText.Content tagName="h4" value={name} />} {/* only display if the name attribute is returned as true */}
            {bio && <RichText.Content tagName="p" value={bio} />} {/* only display if the bio attribute is returned as true */}
            {socialLinks.length > 0 &&
                <div className='wp-block-blocks-course-team-member-social-links'>
                    <ul>
                        {socialLinks.map((item, index) => {
                            return (
                                <li key={index} data-icon={item.icon}> {/* adding item.icon as a data attribute like this allows us to extract it from the html instead of saving it in the  */}
                                    <a href={item.link}>
                                        <Icon icon={item.icon} />
                                    </a>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}