Построен на основе momentjs.com

```jsx
initialState = {time:null};
<DatePicker value={state.time}
            placeholder="Не выбрано" 
            inputClassName="InputClassName"
            onChange={day => setState({time:day})}/>
```