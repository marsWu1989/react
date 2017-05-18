import React from 'react';
import { Link } from 'react-router';

import s from './Tcontact';

function Tcontact() {
    return (
        <div className={s.Tcontact}>
            <div className={s.title}>联系我们</div>
            <div className={s.contact}><Link to="mailto:AIP@moji.com">AIP@moji.com</Link></div>
        </div>
    );
}

export default Tcontact;
