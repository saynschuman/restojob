import { Address } from '../../../types';
import * as React from 'react';
import * as classNames from 'classnames';
import { InputCheckbox } from '../../../components/common/InputCheckbox/InputCheckbox';
const CSS = require('./CategorySelect.styl');

export interface Category {
    title: string;
    image: string;
    specializations: string[];
}

export interface CategorySelectProps {
    categories: Category[];
}

export interface CategorySelectState {
    currentCategory: Category;
}

export class CategorySelect extends React.PureComponent<CategorySelectProps, CategorySelectState> {

    state = {
        currentCategory: null,
    };

    renderSpecializations() {
        if (!this.state.currentCategory) {
            return;
        }

        return (
            <>
                <h3 className={CSS.currentCategoryTitle}>
                    {__t('publishVacancyPage.chooseSpecialization')}
                    <span className={CSS.currentCategoryWord}>{this.state.currentCategory.title}</span>
                </h3>
                {this.state.currentCategory.specializations.map((spec, index) => {
                    return <InputCheckbox title={spec} key={index} className={CSS.checkbox}/>;
                })}
            </>
        );
    }

    render() {
        return (
            <>
                <div className={CSS.categorylist}>
                    {this.props.categories.map((category, index) => {
                        const isCurrent = this.state.currentCategory && this.state.currentCategory.title === category.title;
                        return (
                            <div
                                className={classNames(
                                    CSS.categoryTab,
                                    { [CSS.active]: isCurrent },
                                )}
                                style={{ backgroundImage: `url(${category.image})` }}
                                key={index}
                                onClick={() => {
                                    this.setState({ currentCategory: category });
                                }}
                            >
                                {/*<img src={category.image} alt={category.title} className={CSS.categoryBg}/>*/}
                                <span className={CSS.categoryTitle}>{category.title}</span>
                            </div>
                        );
                    })}
                </div>

                {this.renderSpecializations()}
            </>
        );
    }
}
