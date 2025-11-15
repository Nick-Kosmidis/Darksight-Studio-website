/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainContent = document.querySelector('#main-content');
const mainLogoButton = document.querySelector('#main-logo-button');
const dynamicNavigationLinks = document.querySelectorAll('nav .navbar-nav .nav-link.dynamic');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getMainContentOfCategory(contentCategory)
{
    const template = document.querySelector("#"+contentCategory+"-page");
    if(template)
    {
        return template.innerHTML;
    }
    else
    {
        return "<p>Not found.</p>";
    }


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
function handleProjectLinkClick(event) 
{
    event.preventDefault();
    mainContent.innerHTML = getMainContentOfCategory(event.currentTarget.dataset.content);
}

function attachProjectLinkListeners() 
{
    const projectLinks = document.querySelectorAll('.game-link.project-link'); 
    
    projectLinks.forEach(link => {
        link.removeEventListener('click', handleProjectLinkClick); 
        link.addEventListener('click', handleProjectLinkClick);
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

mainLogoButton.addEventListener('click', (event) => {
    mainContent.innerHTML = '<div class=\"main-background\"></div>';
});

dynamicNavigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const contentCategory = link.dataset.content;
        mainContent.innerHTML = getMainContentOfCategory(contentCategory);
        if (contentCategory === 'projects') {
            attachProjectLinkListeners();
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////