'use client';

import React, { ChangeEvent } from 'react';
import {
    FilterCheckbox,
    FilterCheckboxProps,
} from '@/components/shared/filter-checkbox';
import { Input } from '@/components/ui';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
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
}: Props) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchValue(e.target.value);
    };

    const list = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
        : defaultItems.slice(0, limit);
    return (
        <div className={className}>
            <p className={'font-bold mb-3'}>{title}</p>

            {showAll && (
                <div className={'mb-5'}>
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className={'bg-gray-50 border-none'}
                    ></Input>
                </div>
            )}

            <div
                className={
                    'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'
                }
            >
                {list.map((item: FilterCheckboxProps, index: number) => (
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

            {items.length > limit && (
                <div
                    className={
                        showAll ? 'border-t border-t-neutral-100 mt-4' : ''
                    }
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={'text-primary mt-3'}
                    >
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};
