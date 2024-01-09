const $codeExternalBlock = document.querySelector("[data-element-id='code-external-block']");
const $customizationColor = document.querySelector("[data-element-id='customization-color']");
$customizationColor.addEventListener("input", () => {
    const color = $customizationColor.value;
    $codeExternalBlock.style.backgroundColor = color;
});

const $saveProject = document.querySelector("[data-element-id='save-project']");
$saveProject.addEventListener("click", event => {
    event.preventDefault();

    const [code, name, description, color] = [
        document.querySelector(".code__internal-block__code").innerText,
        document.querySelector("[data-element-id='project-name']").value,
        document.querySelector("[data-element-id='project-description']").value,
        document.querySelector("[data-element-id='customization-color']").value
    ];
    const project = {
        code,
        name,
        description,
        color
    };
    
    const projects = getProjects();
    projects.push(project)
    sessionStorage.setItem("projects", JSON.stringify(projects));

    window.location.replace("./projects.html");
});

function getProjects() {
    return JSON.parse(sessionStorage.getItem("projects")) || [];
}