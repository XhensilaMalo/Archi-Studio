document.addEventListener('DOMContentLoaded', function () {
    var projectElements = document.querySelectorAll('.project');

    projectElements.forEach(function (project) {
        project.addEventListener('click', function () {
            var projectUrl = project.getAttribute('data-project-url');
            openProject(projectUrl);
        });
    });
});

function openProject(projectUrl) {
    window.location.href = projectUrl;
}
