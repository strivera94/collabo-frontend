const PROJECTS_URL = 'http://localhost:3000/projects'
const SPECIFIC_PROJECT_URL = id => PROJECTS_URL + '/' + id
const COLLAB_URL = 'http://localhost:3000/collaborations';


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

const getCollabsAction = collabs => ({
    type: 'GET_COLLABS',
    payload: collabs
})

const joinProjectAction = collabObj => ({
    type: 'JOIN_PROJECT',
    payload: collabObj
});

const declareCompletedAction = projectObj => ({
    type: 'DECLARE_COMPLETED',
    payload: projectObj
})

//Fetches
const getProjects = () => dispatch => {
    fetch(PROJECTS_URL)
    .then(r => r.json())
    .then(projectsArray => {
        dispatch(getProjectsAction(projectsArray))
    })
};

const createProject = (projectObj, userId) => dispatch => {
    const config = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            title: projectObj.title,
            description: projectObj.description
        })
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

const getCollabs = projectId => dispatch => {
    fetch(SPECIFIC_PROJECT_URL(projectId))
    .then(r => r.json())
    .then( projectObj => {
        dispatch(getCollabsAction(projectObj.collaborations))
    })
}

const joinProject = (userId, projectId) => dispatch => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: userId,
            project_id: projectId
        })
    }
    fetch(COLLAB_URL, config)
    .then(r => r.json())
    .then(collabObj => 
        dispatch(joinProjectAction(collabObj))
        )
}

const declareCompleted = (projectId) => dispatch => {
    const config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: true
        })
    }
    fetch(SPECIFIC_PROJECT_URL(projectId), config)
    .then(r => r.json())
    .then(projectObj => 
        dispatch(declareCompletedAction(projectObj))
    )
}

export default {
    getProjects,
    createProject,
    showProject,
    clearProject,
    getCollabs,
    joinProject,
    declareCompleted
}