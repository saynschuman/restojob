import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Employee } from '../../../types';
const CSS = require('./CatalogItemEmployee.styl');

interface CatalogItemEmployeeProps {
    employee: Employee;
    className?: string;
}

export const CatalogItemEmployee: React.SFC<CatalogItemEmployeeProps>  = (props) => {
    return (
        <div className={classNames(CSS.item, props.className)}>
            <div className={CSS.photoContainer}>
                {props.employee.photo && <img src={props.employee.photo} alt="" className={CSS.photo}/>}
            </div>

            <div className={CSS.content}>
                <a href={'#'} className={CSS.name}>{props.employee.name}</a>
                <div className={CSS.vacancy}>{props.employee.vacancy}</div>
                <div className={CSS.salary}>{props.employee.salary}</div>
            </div>
        </div>
    );
};
