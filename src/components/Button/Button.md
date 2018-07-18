Тег `<div>`, в который обернуты компоненты, и подключенные стили только для того, чтобы сделать пример более красивым.

 ```jsx
require('../../css/example.scss');
initialState = { isLoadingDefault: false, isLoadingSecondary: false, isLoadingTransparent: false };

<div>
    <Button href="https://vk.com" target="_blank" ismobile={true}>Mobile Default</Button>
    <Button href="https://vk.com" target="_blank">Default</Button>
    <Button onClick={() => setState({ isLoadingDefault: true })} loading={state.isLoadingDefault}>Default loading</Button>
    <Button disabled={true}>Default disabled</Button>
    <br/>
    <Button type="secondary" ismobile={true}>Mobile Secondary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="secondary" fixedwidth={true} onClick={() => setState({ isLoadingSecondary: true })} loading={state.isLoadingSecondary}>Secondary loading fixed width</Button>
    <Button type="secondary" disabled={true}>Secondary disabled</Button>
    <br/>
    <Button type="transparent" ismobile={true}>Mobile Transparent</Button>
    <Button type="transparent">Transparent</Button>
    <Button type="transparent" onClick={() => setState({ isLoadingTransparent: true })} loading={state.isLoadingTransparent}>Transparent loading</Button>
    <Button type="transparent" disabled={true}>Transparent disabled</Button>
</div>
```
