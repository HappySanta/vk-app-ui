Кнопка бывает двух видов: для десктопа и для мобайла, это регулируется свойством ```mobile={true/false}```

Чтобы не прописывать в каждой кнопке свойство mobile можно опреденить глобальную переменную ```window._hsMobileUI=true/false```


```jsx
<Button>Desktop button</Button>
```

Различные значения свойства ```type``` для кнопок

```jsx
<table cellPadding={5}>
    <tr>
        <td>type/mobile</td>
        <td>true</td>
        <td>false</td>
    </tr>
    <tr>
        <td>default</td>
        <td>
            <Button type="default">Desktop button default</Button>
        </td>
        <td>
            <Button mobile={true} type="default">Mobile button default</Button>
        </td>
    </tr>
    <tr>
        <td>secondary</td>
        <td>
            <Button type="secondary">Desktop button secondary</Button>
        </td>
        <td>
            <Button mobile={true} type="secondary">Mobile button secondary</Button>
        </td>
    </tr>
    <tr>
        <td>transparent</td>
        <td>
            <Button type="transparent">Desktop button transparent</Button>
        </td>
        <td>
            <Button mobile={true} type="transparent">Mobile button transparent</Button>
        </td>
    </tr>
</table>
```

Кнопка - ссылка.
Для кнопки можно укзаать атрибут ```href```, в этом случае она преобразуется в ссылку если не задавать атрибут ```component```.
Внутри приложения ВК используйте ```target="_blank"``` для всех ссылок есои вам явно не нужно иное.

```jsx
<Button href="https://vk.com/in" target="_blank">Button as Link</Button>
```

Кнопка с ```loading={true}```

```jsx 
<Button loading={true}>Press me</Button>
```

Такое удобно применять когда необходимо сделать асинхронное действие

```jsx
initialState = {rocket:false, server:false};
<div>
    <Button onClick={ () => setState({rocker:true}) & setTimeout(() => setState({rocker:false}), 2000) } 
            loading={state.rocker}>Start rocket</Button>
            {" "}
    <Button type="secondary" 
            onClick={ () => setState({server:true}) & setTimeout(() => setState({server:false}), 2000) } 
            loading={state.server}>Super long button stop server</Button>
</div>
```

По умолчанию размер кнопки при пеходе из ```loading=false``` > ```loading=true``` будет сохранен. 
Это можно отключить если установить свойство ```fixedWidth={false}```

```jsx
initialState = {rocket:false, server:false};
<div>
    <Button onClick={ () => setState({rocker:true}) & setTimeout(() => setState({rocker:false}), 2000) } 
            fixedWidth={false}
            loading={state.rocker}>Start rocket</Button>
            {" "}
    <Button type="secondary" 
            fixedWidth={false}
            onClick={ () => setState({server:true}) & setTimeout(() => setState({server:false}), 2000) } 
            loading={state.server}>Super long button stop server</Button>
</div>
```