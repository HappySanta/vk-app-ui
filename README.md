# @happysanta/vk-app-ui

Основные элементы для приложений сообществ VK. Можно прописывать любые атрибуты и вешать обработчики — они сохранятся.
Наглядные примеры с кодом — [https://happysanta.github.io/vk-app-ui/styleguide/](https://happysanta.github.io/vk-app-ui/styleguide/).

## Changelog

#### 0.2.0

- Новый компанент PageRoot для органицации страниц и попапов
- Новый компанент FormLayout для органицации форм
- Новые типы кнопок, атрибут ```type``` у компанента ```Button``` устрел, используйте ```mode```
- Фиксы старых компонентов

#### 0.1.8

- Новый компанент <Arrow/>

#### 0.1.7

- Рандомные названия классов в css чтобы небыло пересечений со старыми проектами
- Во всех компонентах свойство ismobile переименнованно в mobile
- Глобальная переменная window.isMobile переименнованна в window._hsMobileUI
- Убран user-select:none для компонента Input
 
## Установка

```sh
$ npm i @happysanta/vk-app-ui
```


## Настройка

В начале основного файла проекта, например, в index.js нужно подключить стили, чтобы не делать этого в каждом файле, где понадобится компонент.
Также в основном файле нужно задать глобальную переменную window.isMobile = true/false, чтобы компонент понимал, когда ему использовать стили для десктопа, а когда для мобильных устройств. Если эта переменная не выставлена, компонент будет смотреть, есть ли в locaton.path «/mobile/».

```javascript
import '@happysanta/vk-app-ui/dist/vkappui.css'

window._hsMobileUI = true // тут условие которое ставит true/false в зависимости от устройства.
```

В начале файла, в котором нужно использовать компонент.

```javascript
import { Button, Link, WaitDots } from "@happysanta/vk-app-ui"

<Button>Button</Button>
```

Полная документация и примеры с кодом — [https://happysanta.github.io/vk-app-ui/styleguide/](https://happysanta.github.io/vk-app-ui/styleguide/).

## Как обновить пакет в npm

Обновить код, в package.json изменить версию, затем:

```sh
$ npm adduser // нужно, если пользователь не авторизован
$ npm whoami // проверить авторизован ли пользователь
$ npm publish --access public // если пакет не приватный, иначе не опубликуется
```


## License

MIT.


