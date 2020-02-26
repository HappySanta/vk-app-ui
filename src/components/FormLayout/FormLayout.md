Форма ввода

```jsx harmony
<FormLayout>
<Input type="text" placeholder="Имя" top="Ваше имя"/>
<Input type="text" placeholder="Фамилия" top="Ваше фамилия"/>
<Input type="email" placeholder="Для связи" top="Email"/>
<Input type="email" top="Email" status="error"/>
<Textarea top="О себе" 
            placeholder="До 1000 символов"
            bottom="Расскадите о себе пару строк чтобы мы понимали кто вы такой"/>
<Checkbox>Я общешаю хрошо себя вести</Checkbox>
<div>
<Radio>Раз</Radio>
<br/>
<Radio>Два</Radio>
<br/>
<Radio>Три</Radio>
</div>
<DropDown onSelect={item => setState({selected:item})}  
        top="Подарок"
           selected={state.selected}
            placeholder="Выберите один параметер"
            single={true}
            items={['аккумулятор','максимальный ток 2.4 А','два разъема USB','переходник на micro USB','быстрая зарядка']}/>
<DatePicker value={state.time}
            top="Когда вы родились?"
            placeholder="Не выбрано" 
            inputClassName="InputClassName"
            onChange={day => setState({time:day})}/>

</FormLayout>
```