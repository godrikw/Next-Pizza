import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { itemsPizza } from '@/globallyObject/pizzaItems';

export default function Home() {
    return (
        <>
            <Container className={'mt-10'}>
                <Title
                    text={'Все пиццы'}
                    size={'lg'}
                    className={'font-extrabold'}
                />
            </Container>
            <TopBar />
            <Container className={'mt-10 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    {/*Фильтрация*/}
                    <div className={'w-[250px]'}>
                        <Filters />
                    </div>

                    {/*Список товаров*/}
                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            <ProductsGroupList
                                title={'Пиццы'}
                                categoryId={1}
                                items={itemsPizza}
                            />

                            <ProductsGroupList
                                title={'Комбо'}
                                categoryId={2}
                                items={itemsPizza}
                            />

                            <ProductsGroupList
                                title={'Закуски'}
                                categoryId={3}
                                items={itemsPizza}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
