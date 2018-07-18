Тег `<div>`, в который обернуты компоненты, и подключенные стили только для того, чтобы сделать пример более красивым.

 ```jsx
require('../../css/example.scss');

<div>
    <Link href="https://vk.com" target="_blank" ismobile={true}>Mobile default link</Link>
    <Link href="https://vk.com" target="_blank">Default link</Link>
    <Link type="medium" href="https://vk.com" target="_blank">Medium link</Link>
    <Link type="bold" href="https://vk.com" target="_blank">Bold link</Link>
</div>
```
