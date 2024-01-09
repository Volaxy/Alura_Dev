(function() {
    const $projects = document.querySelector("[data-element-id='projects']");

    // const projects = sessionStorage.getItem("projects") || [];
    const projects = JSON.parse(sessionStorage.getItem("projects")) || [];
    projects.forEach(project => {
        $projects.innerHTML += `
            <article class="project">
                <section class="code__external-block" data-element-id="code-external-block" style="background-color: ${project.color}">
                    <div class="code__internal-block">
                        <img src="assets/images/mac-buttons.svg" alt="Mac Buttons">
                        
                        <div class="code__internal-block__wrapper" data-element-id="code__internal-block">    
                            <code class="code__internal-block__code">${project.code}</code>
                        </div>

                        <div class="code__internal-block__code--hidden-text"></div>
                    </div>
                </section>

                <header class="project__info">
                    <h2 class="project__info__title">${project.name || "Título indefinido"}</h2>
                    <p class="project__info__description">${project.description || "Sem descrição"}</p>

                    <article class="project__info__data">
                        <div class="project__info__data__actions">
                            <div class="project__info__action">
                                <img src="assets/images/icons/chat-bloon.svg" alt="Chat bloon">
                                1
                            </div>

                            <div class="project__info__action">
                                <img src="assets/images/icons/heart.svg" alt="Heart">
                                2
                            </div>
                        </div>

                        <div class="project__info__data__profile">
                            <img src="assets/images/header-photo.png" alt="Foto de perfil">
                            @Harry
                        </div>
                    </article>
                </header>
            </article>
        `;
    });
})()