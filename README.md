# @happysanta/vk-app-ui

Основные элементы для приложений сообществ VK. Можно прописывать любые атрибуты и вешать обработчики — они сохранятся.


## Установка

```sh
$ npm i @happysanta/vk-app-ui
```


## Настройка

В начале основного файла проекта, например, в index.js, нужно подключить стили, чтобы не делать этого в каждом файле, где понадобится компонент.
Также в основном файле нужно задать глобальную переменную window.isMobile = true/false, чтобы компонент понимал, когда ему использовать стили для десктопа, а когда для мобильных устройств. Если эта переменная не выставлена, компонент будет смотреть, есть ли в locaton.path «/mobile/».

```javascript
import '@happysanta/vk-app-ui/dist/vkappui.css'

window.isMobile = true // тут условие которое ставит true/false в зависимости от устройства.
```

В начале файла, в котором нужно использовать компонент.

```javascript
import { Button, Link, WaitDots } from "@happysanta/vk-app-ui"

<Button></Button>
```


## Компоненты

* [Button](#button)
* [Checkbox](#checkbox)
* [Input](#input)
* [Link](#link)
* [Radio](#radio)
* [WaitDots](#waitdots)



### Button

| Prop       | Type      | Required  | Values                              |
|:-----------|:----------|:----------|:------------------------------------|
| type       | string    | no        | defalt, secondary, transparent      |
| component  | string    | no        | любой тег (обычно a, button)        |
| ismobile   | bool      | no        | стили для моб. версии               |
| loading    | bool      | no        | true, чтобы показывался прелоадер   |
| fixedwidth | bool      | no        | true, чтобы у кнопки была min-width |

Компонент кнопки.

```javascript
<Button type="default" component="button" className="anyClassNames">Здесь могут быть другие теги или текст</Button>
```


### Checkbox

| Prop       | Type      | Required  | Values                       |
|:-----------|:----------|:----------|:-----------------------------|
| ismobile   | bool      | no        | стили для моб. версии        |

Компонент чекбокса.

```javascript
<Checkbox className="anyClassNames">Checkbox</Checkbox>
```


### Input

| Prop       | Type      | Required  | Values                       |
|:-----------|:----------|:----------|:-----------------------------|
| ismobile   | bool      | no        | стили для моб. версии        |

Компонент поля ввода.

```javascript
<Input type="text" placeholder="Type something" className="anyClassNames"/>
```


### Link

| Prop       | Type      | Required  | Values                       |
|:-----------|:----------|:----------|:-----------------------------|
| type       | string    | no        | medium, bold                 |
| component  | string    | no        | любой тег (обычно a, button) |
| ismobile   | bool      | no        | стили для моб. версии        |


Компонент ссылки.


```javascript
<Link type="default" component="a" className="anyClassNames">Здесь могут быть другие теги или текст</Link>
```


### Radio

| Prop       | Type      | Required  | Values                       |
|:-----------|:----------|:----------|:-----------------------------|
| ismobile   | bool      | no        | стили для моб. версии        |

Компонент радиокнопки.

```javascript
<Radio className="anyClassNames">Radio</Radio>
```


### WaitDots

| Prop       | Type      | Required  | Values                       |
|:-----------|:----------|:----------|:-----------------------------|
| color      | string    | no        | blue                         |

Компонент загрузки.


```javascript
<WaitDots color="blue"></WaitDots>
```


## Как обновить пакет в npm

Обновить код, в package.json изменить версию, затем:

```sh
$ npm adduser // нужно, если пользователь не авторизован
$ npm whoami // проверить авторизован ли пользователь
$ npm publish --access public // если пакет не приватный, иначе не опубликуется
```


## License

MIT.


