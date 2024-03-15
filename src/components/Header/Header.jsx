import React from 'react';
import Button from '../Button/Button';
import 
import {useTelegram} from '../../hooks/useTelegram';

const Header = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close the button</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header