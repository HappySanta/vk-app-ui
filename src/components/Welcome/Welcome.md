Обратите внимение что в проекте дожен быть подключен ```TTCommons```
 

```jsx harmony
<Welcome header="Пожертвования" 
                icon={<svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" viewBox="0 0 80 80">
                                      <defs>
                                          <linearGradient id="prefix__e" x1="50%" x2="50%" y1="11.282%" y2="100%">
                                              <stop offset="0%" stopColor="#FFEACE" stopOpacity=".3"/>
                                              <stop offset="100%" stopColor="#FFF" stopOpacity="0"/>
                                          </linearGradient>
                                          <filter id="prefix__c" width="320.6%" height="364.9%" x="-113.2%" y="-128.9%" filterUnits="objectBoundingBox">
                                              <feOffset dx="-1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="12.5"/>
                                              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 1 0 0 0 0 0.596344054 0 0 0 0 0 0 0 0 0.7 0"/>
                                          </filter>
                                          <circle id="prefix__a" cx="40" cy="40" r="40"/>
                                          <path id="prefix__d" d="M25.689 4.533c5.348.025 9.671 4.368 9.671 9.717 0 5.394-2.16 8.1-11.258 15.11l-4.2 3.265c-1.037.804-2.486.804-3.522 0l-4.216-3.204C3.022 22.35.907 19.644.907 14.25c0-5.349 4.322-9.692 9.67-9.717 3.193.041 6.1 1.844 7.556 4.685 1.456-2.841 4.364-4.644 7.556-4.685z"/>
                                      </defs>
                                      <g fill="none" fillRule="evenodd">
                                          <mask id="prefix__b" fill="#fff">
                                              <use href="#prefix__a"/>
                                          </mask>
                                          <use fill="#FFB300" href="#prefix__a"/>
                                          <circle cx="40" cy="40" r="36.267" stroke="#FFE494" strokeWidth="7.467" mask="url(#prefix__b)"/>
                                          <g mask="url(#prefix__b)">
                                              <g transform="translate(21.867 21.867)">
                                                  <path d="M0 0L36.267 0 36.267 36.267 0 36.267z"/>
                                                  <use fill="#000" filter="url(#prefix__c)" href="#prefix__d"/>
                                                  <use fill="#FFF8D3" href="#prefix__d"/>
                                              </g>
                                          </g>
                                          <circle cx="40" cy="40" r="40" fill="url(#prefix__e)" fillRule="nonzero"/>
                                      </g>
                                  </svg>}
             footer={<Button mode="primary">Начать</Button>}
             description="Принимайте пожертвования от Ваших подписчиков.\nПриложение позволяет интегрировать форму приема платежей от Яндекс.Денег, PayPal, Cloudpayments и информацию о Вашем кошельке Qiwi в сообщество."/>
```