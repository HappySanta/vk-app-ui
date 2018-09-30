```jsx
initialState = {popup:false};
<div>
<Button onClick={ () => setState({popup:!state.popup})}>Open page</Button>
{state && state.popup ? <ModalDialog onClose={()=>setState({popup:false})} onConfirm={()=>setState({popup:false})} header="Настройки">
<h1>Desktop button</h1>
<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/>
Some text
</ModalDialog> : null}
</div>
```