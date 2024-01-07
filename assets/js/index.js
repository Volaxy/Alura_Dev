const $codeExternalBlock = document.querySelector("[data-element-id='code-external-block']");
const $customizationColor = document.querySelector("[data-element-id='customization-color']");
$customizationColor.addEventListener("input", () => {
    const color = $customizationColor.value;
    $codeExternalBlock.style.backgroundColor = color;
});