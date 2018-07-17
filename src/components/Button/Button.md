Все теги `<div>`, в которые обернуты компоненты, только для того, чтобы сделать пример более красивым.

 ```jsx
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button href="https://vk.com" target="_blank" ismobile={true}>Mobile Default</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button href="https://vk.com" target="_blank">Default</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button href="https://vk.com" target="_blank" loading={true}>Default loading</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button disabled={true}>Default disabled</Button>
</div>
<br/>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="secondary" ismobile={true}>Mobile Secondary</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button type="secondary">Secondary</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button type="secondary" fixedwidth={true} loading={true}>Secondary loading</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="secondary" disabled={true}>Secondary disabled</Button>
</div>
<br/>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="transparent" ismobile={true}>Mobile Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button type="transparent">Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button type="transparent" loading={true}>Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="transparent" disabled={true}>Transparent disabled</Button>
</div>
```
