# Portfólio Pessoal

Estrutura da sessão Educação, Atividades Complementares e Experiência Profissional.

```html
<div class="simple-box">
    <h2 class="box-title">Descrição</h2>
    <h3 class="box-where">Local</h3>
    <p class="time">Período</p>
</div>
```

Estrutura da sessão de Habilidades
```html
<div class="skills-box">
    <h2>Nome da habilidade</h2>
    <svg width="100" heigth="100" viewBox="0 0 100 100">
        <!-- Troque *****alguma_tecnologia***** por uma nova classe, ela é necessária para calcular a porcentagem. -->
        <circle class="*****alguma_tecnologia*****" r="40" cx="50" cy="50" fill="transparent" stroke="#333" stroke-width="8"/>
        <text class="text" x="24" y="57" fill="#333">XX %</text>
    </svg>
</div>
```

Para mostrar a porcentagem corretamente, basta ir no arquivo `css/components/_vars.styl` e editar os valores ou adicionar algum outro.

```css
:root {
	--ALGUMA-TECNOLOGIA-VAR: 90;
}
```

E logo a baixo no mesmo arquivo, editar a classe do elemento SVG.

```css
svg .alguma_tecnologia {
	stroke-dasharray: calc(251px * var(--ALGUMA-TECNOLOGIA-VAR) / 100);
}
```

## Atenção
Após alterar o CSS, rode o comando `gulp` no projeto para atualizar o arquivo css final.

Estrutura da sessão de Portfólio e Projetos.
```html
<div class="project">
    <div class="project-item">
        <h2 class="project-name">Nome do projeto</h2>
        <span>Feito em</span>
        <ul class="project-list">
            <li>Lista</li>
            <li>de</li>
            <li>técnologias</li>
            <li>útilizadas</li>
        </ul>
        <a target="_blank" href="LINK_DO_PROJETO">LINK_DO_PROJETO</a>
        <p>Descrição do projeto</p>
    </div>
</div>
```