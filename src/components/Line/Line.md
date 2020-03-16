Компанент чтобы поставить что-то в одну строку
```jsx harmony
<Box>
    <Line>
        <Button right={true}>Save</Button>
        <span>saved...</span>
    </Line>
</Box>

<Box>
    <Line mode="center">
        <Button right={true}>Save</Button>
        <span>saved...</span>
    </Line>
</Box>

<Box>
    <Line mode="right">
        <Button mode={"secondary"}>Cancel</Button>
        <Button left={true}>OK</Button>
    </Line>
</Box>

<Box>
    <Line mode="split">
        <Button mode={"secondary"}>NO</Button>
        <Button left={true}>YES</Button>
    </Line>
</Box>

<Box>
    <Line mode="center" vertical="bottom">
        <FormLayout grow={true}>
            <Input top="Сумма"/>
        </FormLayout>
        <Button left={true}>Buy</Button>
    </Line>
</Box>
```