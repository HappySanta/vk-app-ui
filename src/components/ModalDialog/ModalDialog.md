```jsx
initialState = {popup:false,selected:[]};
<div>
<Button onClick={ () => setState({popup:!state.popup})}>Open page</Button>
{state && state.popup ? <ModalDialog onClose={()=>setState({popup:false})} onConfirm={()=>setState({popup:false})} header="Настройки">
<h1>Анкета</h1>
<div style={{display:"flex"}}>
<Input placeholder="Ваше имя"/>
<DropDown onSelect={(item) => setState({selected:state.selected.concat([item])})} 
            onRemove={ (item) => setState({selected:state.selected.filter( i => i != item)}) }
            selected={state.selected}
            placeholder="Выберите несколько параметров"
            items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
            <DatePicker/>
            </div>
</ModalDialog> : null}
</div>
```