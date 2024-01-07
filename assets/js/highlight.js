const $projectLanguage = document.querySelector("[data-element-id='project-language']");
const $codeInternalBlock  = document.querySelector("[data-element-id='code__internal-block']");
const $showHighlightButton = document.querySelector("[data-element-id='show-highlight']");

function applyHighlight() {
    const codeText = $codeInternalBlock.innerText;
    $codeInternalBlock.innerHTML = `<code class="code__internal-block__code hljs ${$projectLanguage.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    $codeInternalBlock.querySelector("code").textContent = codeText;

    hljs.highlightElement($codeInternalBlock.querySelector("code"));
}

$showHighlightButton.addEventListener("click", event => {
    event.preventDefault();

    applyHighlight();
});

applyHighlight();
