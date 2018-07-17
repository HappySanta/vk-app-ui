Все теги `<div>`, в которые обернуты компоненты, только для того, чтобы сделать пример более красивым.

 ```jsx
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link href="https://vk.com" target="_blank" ismobile={true}>Mobile default link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link href="https://vk.com" target="_blank">Default link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link type="medium" href="https://vk.com" target="_blank">Medium link</Link>
</div>
<div style={{padding: '10px', display: 'inline-block'}}>
    <Link type="bold" href="https://vk.com" target="_blank">Bold link</Link>
</div>
```
