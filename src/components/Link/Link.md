Все теги `<div>`, в которые обернуты компоненты, только для того, чтобы сделать пример более красивым.

 ```jsx
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link href="https://vk.com" target="_blank" component="a" ismobile={true}>Mobile default link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link  href="https://vk.com" target="_blank" component="a">Default link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link type="medium" href="https://vk.com" target="_blank" component="a">Medium link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link type="bold" href="https://vk.com" target="_blank" component="a">Bold link</Link>
</div>
```
