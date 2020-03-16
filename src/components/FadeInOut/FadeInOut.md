
```jsx harmony
initialState = {ts:0};

<Line>
    <Button right={true} onClick={() => setState({ts:Date.now()})}>Save</Button>
    <FadeInOut ts={state.ts}>
        <Gray>Изменения сохранены</Gray>
    </FadeInOut>
</Line>

```