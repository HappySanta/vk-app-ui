Тег `<div>`, в который обернуты компоненты, и подключенные стили только для того, чтобы сделать пример более красивым.

 ```jsx
require('../../css/example.scss');

<div>
    <Input ismobile={true} placeholder="Mobile input" />
    <Input placeholder="Desktop input" />
    <Input placeholder="Desktop input disabled" disabled={true} />
</div>
```
