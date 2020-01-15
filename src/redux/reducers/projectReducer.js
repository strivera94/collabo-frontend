const initialState = {
    projects: [],
    project: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_PROJECTS':
        return {
            ...state,
            projects: payload
        }

    case 'CREATE_PROJECT': 
        return {
            ...state,
            projects: [...state.projects, payload]
        }

    case 'SHOW_PROJECT':
        return {
            ...state,
            project: payload
        }

    case 'CLEAR_PROJECT':
        return {
            ...state,
            project: {}
        }

    default:
        return state;
    }
}
