'use client';

import React from 'react';
import {
    FilterCheckbox,
    FilterCheckboxProps,
} from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>

            <div className={'mb-5'}>
                <Input
                    placeholder={searchInputPlaceholder}
                    className={'bg-gray-50 border-none'}
                ></Input>
            </div>

            <div
                className={
                    'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'
                }
            >
                {items.map((item, index) => (
                    <FilterCheckbox
                        onCheckedChange={(awsd) => console.log(awsd)}
                        checked={false}
                        key={index}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}
            </div>
        </div>
    );
};