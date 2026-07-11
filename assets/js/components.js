async function loadComponent(id, url) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error(`Erro ao carregar ${url}`);

        }

        element.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }

}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar", "./components/navbar.html");

    await loadComponent("footer", "./components/footer.html");

    await loadComponent("cta", "./components/cta.html");

});