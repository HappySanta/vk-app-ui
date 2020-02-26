Компонент для выбора страниц

Внутри компонента дожны быть страницы с атрибутом ```id``` в ```activePage``` надо передавать один из этих ```id```

```jsx harmony
 initialState = {activePage:"main", activePopup:null};

<PageRoot popup={<PageRoot activePage={state.activePopup}>
<PageDialog onClose={() => setState({activePopup:null})} id="info">
Вы открыли попап, теперь закрывайте
</PageDialog>
</PageRoot>} activePage={state.activePage}>
    <div id="main">
        <h1>Главная страница</h1>
        <Button onClick={() => setState({activePage:"book"})}>Открыть книгу</Button>
       
    </div>
    <div id="book">
        <h1>Книга</h1>
        <p>
        Скажи ка дядя, ведь не даром....
        </p>
        <Button mode="secondary" onClick={() => setState({activePage:"main"})}>Назад</Button>    
        <Button mode="outline" onClick={() => setState({activePopup:"info"})}>Показать попап</Button>    
    </div>
</PageRoot>
```