const PROJECTS_URL = 'http://localhost:3000/projects'
const SPECIFIC_PROJECT_URL = id => PROJECTS_URL + '/' + id

//Redux Actions
const getProjectsAction = projectsArray => ({
    type: 'GET_PROJECTS',
    payload: projectsArray
});

const createProjectAction = projectForm => ({
    type: 'CREATE_PROJECT',
    payload: projectForm
});

const showProjectAction = projectObj => ({
    type: 'SHOW_PROJECT',
    payload: projectObj
})

const clearProjectAction = () => ({
    type: 'CLEAR_PROJECT'
})

//Fetches
const getProjects = projectsArray => dispatch => {
    fetch(PROJECTS_URL)
    .then(r => r.json())
    .then(projectsArray => {
        dispatch(getProjectsAction(projectsArray))
    })
};

const createProject = projectForm => dispatch => {
    const config = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectForm)
    }
    fetch(PROJECTS_URL, config)
    .then(r => r.json())
    .then(projectForm => {
        dispatch(createProjectAction(projectForm))
    })
};

const showProject = projectId => dispatch => {
    fetch(SPECIFIC_PROJECT_URL(projectId))
    .then(r => r.json())
    .then(projectObj => {
        dispatch(showProjectAction(projectObj))
    })
}

const clearProject = () => dispatch => {
    dispatch(clearProjectAction())
}

export default {
    getProjects,
    createProject,
    showProject,
    clearProject
}