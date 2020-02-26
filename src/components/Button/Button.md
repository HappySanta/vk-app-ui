```jsx
<Button>Desktop button</Button>
```

```jsx
<table cellPadding={5}>
    <tbody>
    <tr>
        <td><code>mode</code></td>
        <td>link</td>
        <td>button</td>
    </tr>
    <tr>
        <td>primary</td>
        <td>
            <Button mode="primary">primary</Button>
        </td>
        <td>
            <Button mode="primary" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">primary url</Button>
        </td>
    </tr>
<tr>
        <td>secondary</td>
        <td>
            <Button mode="secondary">secondary</Button>
        </td>
        <td>
            <Button mode="secondary" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">secondary url</Button>
        </td>
    </tr>
<tr>
        <td>tertiary</td>
        <td>
            <Button mode="tertiary">tertiary</Button>
        </td>
        <td>
            <Button mode="tertiary" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">tertiary url</Button>
        </td>
    </tr>
<tr>
        <td>outline</td>
        <td>
            <Button mode="outline">outline</Button>
        </td>
        <td>
            <Button mode="outline" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">outline url</Button>
        </td>
    </tr>
<tr>
        <td>commerce</td>
        <td>
            <Button mode="commerce">commerce</Button>
        </td>
        <td>
            <Button mode="commerce" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">commerce url</Button>
        </td>
    </tr>
<tr>
        <td>destructive</td>
        <td>
            <Button mode="destructive">destructive</Button>
        </td>
        <td>
            <Button mode="destructive" 
                    href="https://vk.com"
                    rel="noopener noreferrer"
                    target="_blank">destructive url</Button>
        </td>
    </tr>
    </tbody>
</table>
```

## Блочная кнопка на всю ширину
```jsx
<Button mode="primary" wide={true}>primary</Button>
<br/>
<Button mode="secondary" wide={true}>secondary</Button>
```


## Устаревшие типы кнопок, используйте ```mode```
Различные значения свойства ```type``` для кнопок

```jsx
<table cellPadding={5}>
    <tbody>
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
    </tbody>
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