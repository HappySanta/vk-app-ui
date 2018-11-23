

```jsx
initialState = {selected:[]};
<div style={{maxWidth:"400px"}}>
<DropDown onSelect={(item) => setState({selected:state.selected.concat([item])})} 
            onRemove={ (item) => setState({selected:state.selected.filter( i => i != item)}) }
            selected={state.selected}
            placeholder="Выберите несколько параметров"
            items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
</div>
```

```jsx
initialState = {selected:null};
<DropDown onSelect={item => setState({selected:item})}  
           selected={state.selected}
            placeholder="Выберите один параметер"
            single={true}
            items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
```


hideSelectedFromList = true

```jsx
initialState = {selected:[]};
<div style={{maxWidth:"400px"}}>
<DropDown onSelect={(item) => setState({selected:state.selected.concat([item])})} 
            onRemove={ (item) => setState({selected:state.selected.filter( i => i != item)}) }
            selected={state.selected}
            hideSelectedFromList={true}
            placeholder="Выберите несколько параметров"
            items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
</div>
```