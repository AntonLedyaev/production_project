import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'shared/Button';
import { ThemeButton } from 'shared/Button/ui/Button';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleTranslation = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTranslation}
        >
            {t('Язык')}
        </Button>
    );
};
