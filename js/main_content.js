/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainContent = document.querySelector('#main-content');
const mainLogoButton = document.querySelector('#main-logo-button');
const dynamicNavigationLinks = document.querySelectorAll('nav .navbar-nav .nav-link.dynamic');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getMainContentOfCategory(contentCategory)
{
    switch(contentCategory)
    {
        case 'projects':
        {
            return '';
        }
        case 'about':
        {
            return '';
        }
        case 'contact':
        {
            return '';
        }
    }

    return '';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mainLogoButton.addEventListener('click', (event) => {
    mainContent.innerHTML = '<div class=\"main-background\"></div>';
});

dynamicNavigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        mainContent.innerHTML = getMainContentOfCategory(link.dataset.content);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////