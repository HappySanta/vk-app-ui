Построен на основе momentjs.com

```jsx
initialState = {time:null};
<DatePicker value={state.time}
            placeholder="Не выбрано" 
            className="AllPickerClassName"
            inputClassName="InputClassName"
            onChange={day => setState({time:day})}/>
```