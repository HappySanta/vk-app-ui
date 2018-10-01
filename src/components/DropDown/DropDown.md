

```jsx
initialState = {selected:[]};
<DropDown onSelect={(item) => setState({selected:state.selected.concat([item])})} 
onRemove={ (item) => setState({selected:state.selected.filter( i => i != item)}) }
selected={state.selected}
placeholder="Hello"
items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
```