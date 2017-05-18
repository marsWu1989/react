import React from 'react';

import s from './Banner';

function Banner(img) {
    if (img.data) {
        return (
            <banner
                className={s.banner}
                dangerouslySetInnerHTML={{ __html: img.data.data.content }}
            />
        );
    }
}

export default Banner;
