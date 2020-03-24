```jsx harmony
<h1>
Новости
<DropList pin="right" items={[
    {
        body: "В москве",
        onClick: () => {},
    },
    {
        body: "В Москве",
        onClick: () => {},
    },
    {
        body: "В Санкт-Петербурге",
        onClick: () => {},
    },
]}>
<span style={{color:'#4a76a8'}}>в Санкт-Перертурге 
<span style={{verticalAlign: '2px',
                  display: 'inline-block',
                  width: '8px',
                  height: '4px'}}><Arrow strokeWidth={2} block={true} color="currentColor" direction="down"/></span>
</span>
</DropList>
</h1>
```