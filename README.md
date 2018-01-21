# O que é?

Este é um fork do layout para Java EE com PrimeFaces chamado <a href="https://github.com/algaworks/layout-primefaces-patagonia"> patagonia</a> da Escola de cursos on-line <a href="http://www.algaworks.com">Algaworks</a>, mas com a adição da possibilidade de adicionar submenus.

Exemplo com submenus:   

![Alt tex](https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/resources/algaworks/images/exemplo-com-submenus.png)  

Exemplo sem submenus:  

![alt text](https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/resources/algaworks/images/exemplo-sem-submenus.png)

## Como usar?

Simples. Adicione uma tag ul abaixo do link do menu que você deseja que apareça o submenu, esta ul deve ter a classe 'aw-menu-tree' e pode conter quantas tags li forem necessárias, e cada li será um subitem do link que está acima da ul. Cada li do submenu deve ter a classe 'subitem' e todos os links do menu devem a classe 'aw-item-link', e é somente isto. Ex.:

```html
<li>
    <h:link styleClass="aw-item-link"><i class="fa  fa-fw  fa-file-text"></i>Página 2 <i class="fa fa-fw  fa-angle-left pull-right"></i></h:link>
    <ul class="aw-menu-tree">
	<li class="subitem"><h:link styleClass="aw-item-link" ><i class="fa  fa-fw  fa-user-times"></i>Subitem 1</h:link></li>
	<li class="subitem"><h:link styleClass="aw-item-link" ><i class="fa  fa-fw  fa-users"></i>Subitem 2</h:link></li>
        <li class="subitem"><h:link styleClass="aw-item-link" ><i class="fa  fa-fw  fa-user-plus"></i>Subitem 3</h:link></li>    
    </ul>
</li>
```
O exemplo completo pode ser visto no arquivo <a href="https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/WEB-INF/templates/Menu.xhtml">Menu.xhtml</a>











