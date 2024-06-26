import ProsTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: ProsTypes.string,
    alt: ProsTypes.string,
    className: ProsTypes.string,
    fallback: ProsTypes.string,
};

export default Image;
