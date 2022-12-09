import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";

function Edit({ attributes, setAttributes, noticeOperations, noticeList, }) {

    const { name, bio, url, id, alt } = attributes;
    const onChangeName = (newName) => {
        setAttributes({ name: newName });
    };
    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio });
    };
    const onSelectImage = (image) => {
        if (!image || !image.url) {
            setAttributes({ url: undefined, id: undefined, alt: '' });
            return;
        }
        setAttributes({ url: image.url, id: image.id, alt: image.alt });
    };
    const onSelectURL = (newURL) => {
        setAttributes({
            url: newURL,
            id: undefined,
            alt: '',
        });
    }
    console.log(url);
    return (
        <div {...useBlockProps()}>
            {url && (
                <div className={`wp-block-blocks-course-team-member-img${isBlobURL(url) ? ' is-loading' : ''}`} // note the space, it will add it as a separate class instead of appending it.
                >
                    <img src={url} alt={alt} />
                    {isBlobURL(url) && <Spinner />}
                </div>
            )}
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelectImage} // this handles both upload and insert from media library
                onSelectURL={onSelectURL}
                onError={(err) => console.log(err)}
                //accept="image/*"
                allowedTypes={['image']}
                disableMediaButtons={url}
            />
            <RichText
                placeholder={__('Member Name', 'team-member')}
                tagName="h4"
                onChange={onChangeName}
                value={name}
                allowedFormats={[]}
            />
            <RichText
                placeholder={__('Member Bio', 'team-member')}
                tagName="p"
                onChange={onChangeBio}
                value={bio}
                allowedFormats={[]}
            />
        </div>
    );
}

export default withNotices(Edit);