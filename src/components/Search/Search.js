import React, {useContext} from 'react';
import './Search.scss';
import { AlertContext } from '../../context/alert/alertContext';

export const Search = () => {
    const {showAlert} = useContext(AlertContext);
    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            showAlert('Кто-то нажал Enter!', 'success');
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя"
                onKeyPress={onSubmit}
            />
        </div>
    )
}
