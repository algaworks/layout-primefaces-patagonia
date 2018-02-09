# O que é?

Este é um fork do layout para Java EE com PrimeFaces chamado <a href="https://github.com/algaworks/layout-primefaces-patagonia"> patagonia</a> da Escola de cursos on-line <a href="http://www.algaworks.com">Algaworks</a>,** mas com a adição da possibilidade de inserir submenus e personalizar o título de cada página do projeto**.


Exemplo sem submenus:  

![alt text](https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/resources/algaworks/images/exemplo-sem-submenus.png)

Exemplo com submenus (funcionalidade adicionada neste fork):   

![Alt tex](https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/resources/algaworks/images/exemplo-com-submenus.png)  


### Update:  
Foi adicionado também uma região para o título da aba/janela do navegador, no modelo antes deste update, todas as janelas iriam ter o mesmo nome de exibição no browser.

## Como usar?

### Adicionar submenus
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

### Adicionar título para a janela/aba do navegador
Em qualquer arquivo xhtml que tem o Layout.xhtml como template, adicione um a tag ui:define com o name igual a 'title-tab', esta tag deve ficar entre o ui:composition e o ui:define com name de 'content'.Ex.:    

```html
<ui:composition xmlns="http://www.w3.org/1999/xhtml"
	xmlns:h="http://xmlns.jcp.org/jsf/html"
	xmlns:f="http://xmlns.jcp.org/jsf/core"
	xmlns:ui="http://xmlns.jcp.org/jsf/facelets"
	xmlns:p="http://primefaces.org/ui"
	template="/WEB-INF/templates/Layout.xhtml">
	
	<ui:define name="title-tab">Meu título</ui:define>
	
	<ui:define name="content">
		<h1 class="aw-page-title">Título da sua página</h1>
		
		<h:form id="frm">
			Conteúdo do formulário
		</h:form>
	</ui:define>
	
</ui:composition>
```

Perceba que exite uma tag h1 com o conteúdo: Título da sua página, mas este título será exibido dentro da sua página, enquanto que o contéudo dentro da tag ui:fefine/title-tab será exibido na aba do navegador, **antes não erá possível personalizar este título exibido pelo navegador**.

![alt text](https://github.com/rmnresende/layout-primefaces-patagonia/blob/master/src/main/webapp/resources/algaworks/images/personalizacao-titulo.png)













