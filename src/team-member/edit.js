import { useEffect, useState } from '@wordpress/element';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";

function Edit({ attributes, setAttributes, noticeOperations, noticeList, noticeUI }) {

    const { name, bio, url, id, alt } = attributes;
    const [blobURL, setBlobURL] = useState(); // the second arrgument is the setter for the state, The useState() function is left with an empty argument to set it as underfined to beggin.
    // the fist value of useState is the current value of the state and the second value is the function we will use to update the state




    //console.log(isBlobURL(url)); // this will return true while the image is being uploaded and then once it is uploaded it will return false
    //console.log(url); // while the image is being uploaded this will return a blob url and then once it is uploaded it will return the actual url
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
    const onUploadError = (message) => {
        noticeOperations.removeAllNotices(); // this clears the exisiting notices to avoid stacking when the isers attempts a new not allowed file type.
        noticeOperations.createErrorNotice(message) // create error notice is a function that is inside the Object noticeOperations.
    }

    // Edge case if the user refreshes the browser while the image is still in blobURL status to prevent the spinner from endlessly spinning.
    useEffect(() => {
        if (!id && isBlobURL(url)) { // if there is not id which indicates the image is not uploaded to the media library && and there is a blobURL then run this function.
            setAttributes({
                url: undefined, // clear the image url
                alt: '' // set the alt tag to be an empty string
            })
        }
    }, []) // passing an empty array of dependencies will prevent useEffect from running on every render. We only want to check for blobURLs when the component mounts for the first time aftet the user has refreshed the browser, so on first load this function clears any blobURL content.

    useEffect(() => {
        if (isBlobURL(url)) { // this if statement checks if the url is a blob url. If ture it will run the function
            setBlobURL(url); // so now stored in our 'state' we have a reference to the blob url even after it has left the DOM.
        } else { // once the state changes and the url is no longer a blob url but is an actual url we need to revoke the blob url to prevent a memory leak.
            revokeBlobURL(blobURL); // blobURL is the one we have store in the 'state'. See previous lines -> const [blobURL, setBlobURL] = useState();
            setBlobURL(undefined); // this clears url we stored out of the current 'state'
        }
    }, [url]) // this useEffect will run evcery time our url attribute changes, e.g. between blob url to actual url.


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
                onError={onUploadError}
                accept="image/*"
                allowedTypes={['image']}
                disableMediaButtons={url}
                notices={noticeUI} // this is the prop to display the error message using withNotices Higher Order Component
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