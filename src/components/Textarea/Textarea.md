 ```jsx
initialState = {value:""};
<div>
    <Textarea value={state.value} onChange={e => setState({value:e.target.value})} placeholder="Textarea input" rows={3} />
        <br/>
    <br/>
    <Textarea placeholder="Desktop input" value="Очень длинный текст окотрый сразу растягивет инпут чтобы он ресайился что проверяет что ресайз работает хорошо" rows={1} />
    <br/>
    <br/>
    <Textarea placeholder="Desktop input disabled" disabled={true} />
</div>
```
