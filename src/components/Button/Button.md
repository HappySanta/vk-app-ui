Все теги `<div>`, в которые обернуты компоненты, только для того, чтобы сделать пример более красивым.

 ```jsx
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="default" component="a" href="https://vk.com" target="_blank" ismobile={true}>Mobile Default</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button type="default" component="a"  href="https://vk.com" target="_blank">Default</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button type="default" component="a"  href="https://vk.com" target="_blank" loading={true}>Default loading</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="default" component="button" disabled={true}>Default disabled</Button>
</div>
<br/>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="secondary" component="span" ismobile={true} onClick={() => {}}>Mobile Secondary</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button type="secondary" component="span"  onClick={() => {}}>Secondary</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button type="secondary" component="span" fixedwidth={true}  onClick={() => {}} loading={true}>Secondary loading</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="secondary" component="button" disabled={true}>Secondary disabled</Button>
</div>
<br/>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="transparent" component="button" ismobile={true}>Mobile Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '100px'}}>
    <Button type="transparent" component="button">Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '60px'}}>
    <Button type="transparent" component="button" loading={true}>Transparent</Button>
</div>
<div style={{padding: '10px', display: 'inline-block', minWidth: '150px'}}>
    <Button type="transparent" component="button" disabled={true}>Transparent disabled</Button>
</div>
```
