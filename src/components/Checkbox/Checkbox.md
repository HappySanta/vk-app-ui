 ```jsx
initialState = {lock:true};
<div>
    <Checkbox mobile={true}>Mobile Checkbox</Checkbox>
    <br/>
    <Checkbox>Desktop Checkbox</Checkbox>
    <br/>
    <Checkbox disabled={true}>Desktop Checkbox disabled</Checkbox>
    <br/>
    <br/>
    <Checkbox checked={true}>Always checked</Checkbox>
    <br/>
    <br/>
    <Checkbox onChange={ () => setState({lock:!state.lock}) } checked={state.lock}>One</Checkbox>
    <br/>
    <Checkbox onChange={ () => setState({lock:!state.lock}) } checked={!state.lock}>Two</Checkbox>
</div>
```
